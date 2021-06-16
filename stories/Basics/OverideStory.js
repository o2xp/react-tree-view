// @flow
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DescriptionIcon from "@material-ui/icons/Description";
import DownloadIcon from "@material-ui/icons/GetApp";
import SettingsIcon from "@material-ui/icons/Settings";
import TreeView from "../../src/TreeView";
import Header from "./Header";
import data from "../../static/data";
import "./index.css";

const itemSize = 48;

type RowPros = {
  id: string,
  type: string,
  label: string,
  lastEdit: string,
  size: string
};

const OverideStory = () => {
  const [expanded, setExpanded] = useState([]);
  const [orderBy, setOrderBy] = useState([]);
  const [orderByLodashParams, setOrderByLodashParams] = useState({
    ids: ["size", "label"],
    orders: ["desc", "asc"]
  });
  const [fakeLoading, setFakeLoading] = useState([]);

  useEffect(() => {
    const ids = ["type"];
    const orders = ["asc"];
    orderBy.forEach(({ id, order }) => {
      ids.push(id);
      orders.push(order);
    });
    setOrderByLodashParams({
      ids,
      orders
    });
  }, [orderBy]);

  const onOpen = ({ id, collapsed, type }) => {
    if (type === "directory") {
      if (collapsed) {
        setFakeLoading([...fakeLoading, id]);
        setTimeout(() => {
          setFakeLoading(fakeLoading.filter(fakeLoadingId => fakeLoadingId !== id));
          setExpanded([...expanded, id]);
        }, 1000);
      } else {
        setExpanded(expanded.filter(expandId => expandId !== id));
      }
    }
  };

  const Row = ({ id, type, label, lastEdit, size }: RowPros) => {
    const isFile = type === "file";
    const isLoading = fakeLoading.includes(id);

    return (
      <div className="explorer-row">
        {!isLoading &&
          (isFile ? (
            <DescriptionIcon color="primary" />
          ) : (
            <FolderIcon color="secondary" />
          ))}

        {isLoading && <SettingsIcon className="rotate" />}

        <Typography className="label" variant="caption">
          {label}
        </Typography>

        <IconButton>
          <DownloadIcon
            color="primary"
            disabled={!isFile}
            style={{ opacity: isFile ? 1 : 0 }}
          />
        </IconButton>

        <Typography className="lastEdit" variant="caption">
          {moment.tz(lastEdit, "Europe/Berlin").format("DD/MM/YYYY HH:mm")}
        </Typography>

        <Typography className="size" variant="caption">
          {size}
        </Typography>
      </div>
    );
  };

  return (
    <>
      <Header orderBy={orderBy} setOrderBy={setOrderBy} />
      <div style={{ height: "calc(100% - 48px)", width: "100%" }}>
        <TreeView
          data={data}
          expanded={expanded}
          Row={Row}
          onClick={onOpen}
          orderBy={orderByLodashParams}
          itemSize={itemSize}
        />
      </div>
    </>
  );
};

export default OverideStory;
