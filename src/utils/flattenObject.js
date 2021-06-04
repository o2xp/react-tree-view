// @flow
import orderByFunc from "lodash/orderBy";
import memoize from "memoize-one";
import type { FlattenNodeProps, FlattenObjectProps, Node, FlattenNode } from "../types";

export const flattenNode = ({
  node,
  depth,
  result,
  expanded,
  orderBy
}: FlattenNodeProps) => {
  const { id, children } = node;
  const collapsed = !expanded.includes(id);

  result.push({
    ...node,
    hasChildren: !!(children && children.length > 0),
    depth,
    collapsed
  });

  if (children) {
    let orderedChildren: Node[] = [...children];

    if (orderBy) {
      const { ids, orders } = orderBy;
      orderedChildren = orderByFunc(orderedChildren, ids, orders);
    }

    if (!collapsed) {
      orderedChildren.forEach((child: Node) => {
        flattenNode({ node: child, depth: depth + 1, result, expanded, orderBy });
      });
    }
  }
};

const flattenObject = memoize(({ data, expanded, orderBy }: FlattenObjectProps) => {
  const result: FlattenNode[] = [];
  let orderedData: Node[] = [...data];

  if (orderBy) {
    const { ids, orders } = orderBy;
    orderedData = orderByFunc(orderedData, ids, orders);
  }

  orderedData.forEach((node: Node) => {
    flattenNode({ node, depth: 1, result, expanded, orderBy });
  });

  return result;
});

export default flattenObject;
