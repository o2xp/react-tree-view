import flattenObject, { flattenNode } from "../../src/utils/flattenObject";
import data from "../../static/data";
import {
  resNodeWithOrderBy,
  resNodeWithoutOrderBy,
  resDataWithOrderBy,
  resDataWithoutOrderBy
} from "./data";

const orderBy = {
  ids: ["label"],
  orders: ["desc"]
};

describe("utils", () => {
  describe("flattenNode", () => {
    it("without order by", () => {
      const result = [];
      flattenNode({
        node: data[0],
        depth: 0,
        result,
        expanded: ["folder_1", "folder_1_2", "folder_1_1"]
      });

      expect(result).toEqual(resNodeWithoutOrderBy);
    });

    it("with order by", () => {
      const result = [];
      flattenNode({
        node: data[0],
        depth: 0,
        result,
        expanded: ["folder_1", "folder_1_2"],
        orderBy
      });

      expect(result).toEqual(resNodeWithOrderBy);
    });
  });

  describe("flattenObject", () => {
    it("without order by", () => {
      const result = flattenObject({
        data,
        expanded: ["folder_1", "folder_1_2", "folder_1_1"]
      });

      expect(result).toEqual(resDataWithoutOrderBy);
    });

    it("with order by", () => {
      const result = flattenObject({
        data,
        expanded: ["folder_1", "folder_1_2"],
        orderBy
      });

      expect(result).toEqual(resDataWithOrderBy);
    });
  });
});
