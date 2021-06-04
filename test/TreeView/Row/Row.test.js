import "jsdom-global/register";
import React from "react";
import { shallow } from "enzyme";
import Row from "../../../src/TreeView/Row";

const createNode = params => ({
  id: "0",
  label: "Label",
  depth: 0,
  hasChildren: false,
  collapsed: false,
  ...params
});

const style = {
  height: 0,
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
  width: "100%"
};

const onClick = jest.fn();

const RowContent = () => <div className="custom-row-content" />;

describe("Row", () => {
  afterEach(() => {
    onClick.mockClear();
  });

  describe("should", () => {
    const node = createNode();
    const wrapper = shallow(
      <Row index={0} node={node} style={style} onClick={onClick} />
    );

    it("shallow", () => {
      expect(wrapper.find(".o2xp-tree-view-row")).toHaveLength(1);
      expect(wrapper.find("RowContent")).toHaveLength(0);
    });

    it("not have visible arrow ", () => {
      expect(wrapper.find(".o2xp-invisible")).toHaveLength(1);
    });

    it("not be collapsed", () => {
      expect(wrapper.find(".o2xp-collapsed")).toHaveLength(0);
    });

    describe("handle", () => {
      it("onClick", () => {
        expect(onClick).toHaveBeenCalledTimes(0);
        const button = wrapper.find(".o2xp-tree-view-row");
        button.simulate("click");
        expect(onClick).toHaveBeenCalledWith(node);
      });

      it("onKeyPress", () => {
        expect(onClick).toHaveBeenCalledTimes(0);
        const button = wrapper.find(".o2xp-tree-view-row");
        button.simulate("keypress", { key: "Enter" });
        expect(onClick).toHaveBeenCalledWith(node);
      });
    });
  });

  describe("should", () => {
    const node = createNode({ hasChildren: true, collapsed: true });
    const wrapper = shallow(
      <Row
        index={0}
        node={node}
        style={style}
        onClick={onClick}
        RowContent={RowContent}
      />
    );

    it("have visible arrow", () => {
      expect(wrapper.find(".o2xp-invisible")).toHaveLength(0);
    });

    it("be collapsed", () => {
      expect(wrapper.find(".o2xp-collapsed")).toHaveLength(1);
    });

    it("render custom RowContent", () => {
      expect(wrapper.find("RowContent")).toHaveLength(1);
    });
  });
});
