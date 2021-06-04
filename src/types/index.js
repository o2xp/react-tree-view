// @flow
import type { Node as ReactNode } from "react";

export type Node = {
  id: string,
  label: string,
  children?: Node[]
};

export type FlattenNode = {
  ...Node,
  depth: number,
  hasChildren: boolean,
  collapsed: boolean
};

export type OrderBy = {
  ids: string[],
  orders: string[]
};

export type TreeViewProps = {
  data: Node[],
  Row?: Node => ReactNode,
  expanded: string[],
  onClick: FlattenNode => void,
  orderBy?: OrderBy,
  itemSize?: number
};

export type Style = {
  height: number,
  left: ?number,
  position: string,
  right: ?number,
  top: number,
  width: string
};

export type ListItemProps = {
  index: number,
  style: Style
};

export type RowProps = {
  index: number,
  node: FlattenNode,
  RowContent?: FlattenNode => ReactNode,
  onClick: FlattenNode => void,
  style: Style
};

export type ArrowIconProps = {
  className: string
};

export type FlattenObjectProps = {
  data: Node[],
  expanded: string[],
  orderBy?: OrderBy
};

export type FlattenNodeProps = {
  node: Node,
  depth: number,
  result: FlattenNode[],
  expanded: string[],
  orderBy: ?OrderBy
};

export type UseDebounceProps = {
  value: {
    width: number,
    height: number
  },
  delay: number
};

export type UseWindowSizeReturn = {
  width: number,
  height: number
};
