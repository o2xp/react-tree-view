// @flow
import React from "react";
import TreeView from "../../src/TreeView";
import data from "../../static/data";
import "./index.css";

const DefaultStory = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <TreeView data={data} />
    </div>
  );
};

export default DefaultStory;
