// @flow
import React, { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import { useResizeDetector } from "react-resize-detector";
import flattenObject from "../utils/flattenObject";
import Row from "./Row";
import "../style/index.css";
import type { TreeViewProps, FlattenNode, ListItemProps } from "../types";

const itemSizeDefault = 32;

const TreeView = ({
  data,
  Row: RowContent,
  expanded: userExpanded,
  onClick,
  orderBy,
  itemSize = itemSizeDefault
}: TreeViewProps) => {
  const { width, height = 0, ref } = useResizeDetector();
  const [flattenedData, setFlattenedData] = useState<FlattenNode[]>([]);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    if (userExpanded) {
      setExpanded(userExpanded);
    }
  }, [userExpanded]);

  const handleClick = node => {
    if (onClick) {
      onClick(node);
    }
    if (!userExpanded) {
      const { collapsed, id } = node;
      if (collapsed) {
        setExpanded([...expanded, id]);
      } else {
        setExpanded(expanded.filter((expandedId: string) => expandedId !== id));
      }
    }
  };

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
            onClick={handleClick}
          />
        )}
      </List>
    </div>
  );
};

export default TreeView;
