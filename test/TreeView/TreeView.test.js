import "jsdom-global/register";
import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import TreeView from "../../src/TreeView";
import data from "../../static/data";

const onClick = jest.fn();

const waitForComponentToPaint = async wrapper => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    wrapper.update();
  });
};

describe("TreeView", () => {
  afterEach(() => {
    onClick.mockClear();
  });

  describe("should", () => {
    it("mount", async () => {
      const wrapper = mount(<TreeView data={data} onClick={onClick} />);
      waitForComponentToPaint(wrapper);
      expect(wrapper.find(".o2xp-tree-view")).toHaveLength(1);
    });

    it("render ", () => {
      const wrapper = mount(
        <TreeView
          data={data}
          onClick={onClick}
          expanded={["folder_1", "folder_1_2", "folder_1_1"]}
        />
      );
      waitForComponentToPaint(wrapper);
      expect(wrapper.find(".o2xp-tree-view-row")).toHaveLength(3);
    });
  });
});
