import React, { useState, useEffect, useRef, memo } from "react";
import { FixedSizeList as List, areEqual } from "react-window";
import memoize from "memoize-one";
import useWindowSize from "../hooks/useWindowSize";
import useDebounce from "../hooks/useDebounce";
import ArrowIcon from "../ArrowIcon";
import "../style/index.css";

const flattenNode = ({ node, depth, result, expanded }) => {
  const { id, children } = node;
  const collapsed = !expanded.includes(id);
  result.push({
    ...node,
    hasChildren: children && children.length > 0,
    depth,
    collapsed
  });

  if (!collapsed && children) {
    children.forEach(child => {
      flattenNode({ node: child, depth: depth + 1, result, expanded });
    });
  }
};

const flattenOpened = memoize(({ data, expanded }) => {
  const result = [];
  data.forEach(node => {
    flattenNode({ node, depth: 1, result, expanded });
  });
  return result;
});

const SpeedTree = ({ data, Row: RowContent, expanded = [], onClick }) => {
  const [flattenedData, setFlattenedData] = useState([]);
  const ref = useRef();
  const { width, height } = useDebounce({
    value: useWindowSize(ref),
    delay: 100
  });

  useEffect(() => {
    setFlattenedData(flattenOpened({ data, expanded }));
  }, [data, expanded]);

  const Row = memo(({ index, style }) => {
    const node = flattenedData[index];
    const left = node.depth * 20;
    const { hasChildren, label, collapsed } = node;
    const className = `${!hasChildren && "invisible"} ${collapsed && "collapsed"}`;

    return (
      <div className="tree-view-row" style={{ ...style }} onClick={() => onClick(node)}>
        <div
          className="tree-view-row-content"
          style={{
            paddingLeft: `${left}px`,
            width: `calc(100% - ${left}px)`
          }}
        >
          <ArrowIcon className={className} />
          {RowContent ? <RowContent {...node} /> : label}
        </div>
      </div>
    );
  }, areEqual);

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
