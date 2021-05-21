import React, { useState, useRef } from "react";
import { FixedSizeList as List } from "react-window";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useWindowSize from "../hooks/useWindowSize";
import useDebounce from "../hooks/useDebounce";
import "../style/index.css";

const SpeedTree = ({ data, Row: RowContent }) => {
  const [openedNodeIds, setOpenedNodeIds] = useState([]);
  const ref = useRef();
  const { width, height } = useDebounce({
    value: useWindowSize(ref),
    delay: 100
  });

  const flattenOpened = treeData => {
    const result = [];
    for (let node of data) {
      flattenNode(node, 1, result);
    }
    return result;
  };

  const flattenNode = (node, depth, result) => {
    const { id, children } = node;
    let collapsed = !openedNodeIds.includes(id);
    result.push({
      ...node,
      hasChildren: children && children.length > 0,
      depth,
      collapsed
    });

    if (!collapsed && children) {
      for (let child of children) {
        flattenNode(child, depth + 1, result);
      }
    }
  };

  const flattenedData = flattenOpened(data);

  const onOpen = node =>
    node.collapsed
      ? setOpenedNodeIds([...openedNodeIds, node.id])
      : setOpenedNodeIds(openedNodeIds.filter(id => id !== node.id));

  const Row = ({ index, style }) => {
    const node = flattenedData[index];
    const left = node.depth * 20;
    const { hasChildren, collapsed } = node;
    const className = !hasChildren ? "invisible" : "";

    return (
      <div className="tree-view-row" style={{ ...style }} onClick={() => onOpen(node)}>
        <div
          className="tree-view-row-content"
          style={{
            paddingLeft: `${left}px`,
            width: `calc(100% - ${left}px)`
          }}
        >
          {collapsed ? (
            <ChevronRightIcon className={className} />
          ) : (
            <ExpandMoreIcon className={className} />
          )}
          <RowContent node={node} />
        </div>
      </div>
    );
  };

  return (
    <div className="tree-view" ref={ref}>
      <List
        height={height}
        itemCount={flattenedData.length}
        itemSize={32}
        width={width}
        itemKey={index => flattenedData[index].id}
      >
        {Row}
      </List>
    </div>
  );
};

export default SpeedTree;
