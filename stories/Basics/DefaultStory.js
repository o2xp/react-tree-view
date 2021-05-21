import React from "react";
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

const Row = ({ node }) => {
  const { label } = node;

  return <div className="explorer-row">{label}</div>;
};

const DefaultStory = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <TreeView data={data} Row={Row} />
    </div>
  );
};

export default DefaultStory;
