import "jsdom-global/register";
import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import TreeView from "../../src/TreeView";
import { basicData } from "../../static/data";
import { resNodeWithoutOrderBy } from "../utils/data";

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
    it("mount", () => {
      const wrapper = mount(<TreeView data={basicData} onClick={onClick} />);
      waitForComponentToPaint(wrapper);
      expect(wrapper.find(".o2xp-tree-view")).toHaveLength(1);
    });

    it("render ", async () => {
      const wrapper = mount(
        <TreeView data={basicData} onClick={onClick} expanded={["folder_1"]} />
      );
      await waitForComponentToPaint(wrapper);
      expect(wrapper.find("Row")).toHaveLength(3);
    });

    describe("handleClick ", () => {
      it("with onClick", async () => {
        const wrapper = mount(
          <TreeView data={basicData} onClick={onClick} expanded={["folder_1"]} />
        );
        await waitForComponentToPaint(wrapper);

        expect(onClick).toHaveBeenCalledTimes(0);

        const button = wrapper.find("Row").first();
        button.simulate("click");
        expect(onClick).toHaveBeenCalledTimes(1);
      });

      it("and expand", async () => {
        const wrapper = mount(<TreeView data={basicData} />);
        await waitForComponentToPaint(wrapper);
        expect(wrapper.find("Row")).toHaveLength(2);

        const button = wrapper.find("Row").first();
        button.simulate("click");
        await waitForComponentToPaint(wrapper);
        expect(wrapper.find("Row")).toHaveLength(3);
      });

      it("and collapse", async () => {
        const wrapper = mount(<TreeView data={resNodeWithoutOrderBy} />);
        await waitForComponentToPaint(wrapper);
        expect(wrapper.find("Row")).toHaveLength(3);

        let button = wrapper.find("Row").first();
        button.simulate("click");
        wrapper.update();

        button = wrapper.find("Row").first();
        button.simulate("click");
        await waitForComponentToPaint(wrapper);
        wrapper.update();
      });
    });
  });
});
