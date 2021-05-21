import React, { useState } from "react";
import TreeView from "../../src/TreeView";
import "./index.css";

const data = [
  {
    children: [
      {
        children: [
          {
            id: "id",
            label: "parent"
          }
        ],
        id: "test2",
        label: "test2"
      }
    ],
    id: "in",
    label: "in"
  },
  {
    children: [
      {
        id: "test",
        label: "test"
      }
    ],
    id: "out",
    label: "out"
  }
];

const Row = ({ label }) => {
  return <div className="explorer-row">{label}</div>;
};

const DefaultStory = () => {
  const [expanded, setExpanded] = useState([]);

  const onOpen = node =>
    node.collapsed
      ? setExpanded([...expanded, node.id])
      : setExpanded(expanded.filter(id => id !== node.id));

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <TreeView data={data} Row={Row} expanded={expanded} onClick={onOpen} />
    </div>
  );
};

export default DefaultStory;
