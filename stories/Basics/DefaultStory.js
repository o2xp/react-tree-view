// @flow
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
          },
          {
            id: "ad",
            label: "ad"
          }
        ],
        id: "test2",
        label: "test2"
      },
      {
        id: "lol",
        label: "lol"
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

const Row = ({ label }: { label: string }) => {
  return <div className="explorer-row">{label}</div>;
};

const DefaultStory = () => {
  const [expanded, setExpanded] = useState([]);

  const onOpen = node => {
    return node.collapsed
      ? setExpanded([...expanded, node.id])
      : setExpanded(expanded.filter(id => id !== node.id));
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <TreeView data={data} Row={Row} expanded={expanded} onClick={onOpen} />
    </div>
  );
};

export default DefaultStory;
