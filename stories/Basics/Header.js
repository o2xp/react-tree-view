// @flow
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const createOrderBy = ({ index, id, orderBy }) => {
  if (index === -1) {
    const newOrder = {
      id,
      order: "asc"
    };
    return [...orderBy, newOrder];
  }

  const { order } = orderBy[index];
  const newOrderBy = [...orderBy];
  if (order === "asc") {
    newOrderBy[index].order = "desc";
    return newOrderBy;
  }

  newOrderBy.splice(index, 1);

  return newOrderBy;
};

type HeaderSorterProps = {
  sortingInfos: {
    index: number,
    order: string
  }
};

const HeaderSorter = ({ sortingInfos }: HeaderSorterProps) => {
  const { index, order } = sortingInfos;

  return (
    <>
      {index === -1 ? (
        <UnfoldMoreIcon />
      ) : (
        <KeyboardArrowDownIcon
          style={order === "asc" ? { transform: "scaleY(-1" } : {}}
        />
      )}
      <Typography
        variant="subtitle1"
        style={{
          opacity: order ? 0.5 : 0
        }}
      >
        {index + 1}
      </Typography>
    </>
  );
};

type OrderBy = {
  id: string,
  order: string
};

type Props = {
  orderBy: OrderBy[],
  setOrderBy: (OrderByType[]) => void
};

const Header = ({ orderBy, setOrderBy }: Props) => {
  const getInfos = ({ id }) => {
    const index = orderBy.findIndex(el => el.id === id);

    const sortingInfos = {
      id,
      index,
      ...orderBy[index]
    };

    return sortingInfos;
  };

  const handleCLick = ({ id, index }) => {
    setOrderBy(createOrderBy({ index, id, orderBy }));
  };

  return (
    <div className="explorer-row">
      <Button className="label" onClick={() => handleCLick(getInfos({ id: "label" }))}>
        <Typography variant="body2">Label</Typography>
        <HeaderSorter sortingInfos={getInfos({ id: "label" })} />
      </Button>

      <Button
        className="lastEdit"
        onClick={() => handleCLick(getInfos({ id: "lastEdit" }))}
      >
        <Typography variant="body2">Last Edit</Typography>
        <HeaderSorter sortingInfos={getInfos({ id: "lastEdit" })} />
      </Button>

      <Button className="size" onClick={() => handleCLick(getInfos({ id: "size" }))}>
        <Typography variant="body2">Size</Typography>
        <HeaderSorter sortingInfos={getInfos({ id: "size" })} />
      </Button>
    </div>
  );
};

export default Header;
