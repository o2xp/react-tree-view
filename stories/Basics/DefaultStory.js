import React, { useState } from "react";
import orderByFunc from "lodash/orderBy";
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

const Row = ({ label }) => {
  return <div className="explorer-row">{label}</div>;
};

const DefaultStory = () => {
  const [expanded, setExpanded] = useState([]);

  const onOpen = node =>
    node.collapsed
      ? setExpanded([...expanded, node.id])
      : setExpanded(expanded.filter(id => id !== node.id));

  const orderBy = arr => {
    return orderByFunc(arr);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <TreeView
        data={data}
        Row={Row}
        expanded={expanded}
        onClick={onOpen}
        orderBy={{
          ids: ["label"],
          orders: ["desc"]
        }}
      />
    </div>
  );
};

export default DefaultStory;
