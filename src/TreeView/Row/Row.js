// @flow
import React, { memo } from "react";
import { areEqual } from "react-window";
import ArrowIcon from "../../ArrowIcon";
import type { RowProps } from "../../types";

const Row = ({ index, node, style, RowContent, onClick }: RowProps) => {
  const { hasChildren, label, collapsed, depth } = node;
  const left = depth * 20;
  const className = `${String(!hasChildren && "o2xp-invisible")} ${String(
    collapsed && "o2xp-collapsed"
  )}`;

  return (
    <div
      className="o2xp-tree-view-row"
      role="button"
      tabIndex={index}
      style={{ ...style }}
      onClick={() => onClick(node)}
      onKeyPress={() => onClick(node)}
    >
      <div
        className="o2xp-tree-view-row-content"
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
};

export default memo<RowProps>(Row, areEqual);
