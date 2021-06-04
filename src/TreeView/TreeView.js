// @flow
import React, { useState, useEffect, useRef } from "react";
import { FixedSizeList as List } from "react-window";
import useWindowSize from "../hooks/useWindowSize";
import useDebounce from "../hooks/useDebounce";
import flattenObject from "../utils/flattenObject";
import Row from "./Row";
import "../style/index.css";
import type { TreeViewProps, FlattenNode, ListItemProps } from "../types";

const defaultExpanded = [];
const itemSizeDefault = 32;

const TreeView = ({
  data,
  Row: RowContent,
  expanded = defaultExpanded,
  onClick,
  orderBy,
  itemSize = itemSizeDefault
}: TreeViewProps) => {
  const [flattenedData, setFlattenedData] = useState<FlattenNode[]>([]);

  const ref = useRef();
  const { width, height } = useDebounce({
    value: useWindowSize(ref),
    delay: 100
  });

  useEffect(() => {
    setFlattenedData(flattenObject({ data, expanded, orderBy }));
  }, [data, expanded, orderBy]);

  return (
    <div className="o2xp-tree-view" ref={ref}>
      <List
        height={height}
        itemCount={flattenedData.length}
        itemSize={itemSize}
        width={width}
        itemKey={index => flattenedData[index].id}
      >
        {({ index, style }: ListItemProps) => (
          <Row
            index={index}
            node={flattenedData[index]}
            style={style}
            RowContent={RowContent}
            onClick={onClick}
          />
        )}
      </List>
    </div>
  );
};

export default TreeView;
