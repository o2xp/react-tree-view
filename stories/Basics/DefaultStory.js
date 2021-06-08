// @flow
import React, { useState } from "react";
import TreeView from "../../src/TreeView";
import data from "../../static/data";
import "./index.css";

const Row = ({ label }: { label: string }) => {
  return <div className="explorer-row">{label}</div>;
};

const DefaultStory = () => {
  const [expanded, setExpanded] = useState([]);

  const onOpen = node => {
    return node.collapsed
      ? setExpanded([...expanded, node.id])
      : setExpanded(expanded.filter((id: string) => id !== node.id));
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <TreeView data={data} Row={Row} expanded={expanded} onClick={onOpen} />
    </div>
  );
};

export default DefaultStory;
