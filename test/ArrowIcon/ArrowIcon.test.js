import "jsdom-global/register";
import React from "react";
import { shallow } from "enzyme";
import ArrowIcon from "../../src/ArrowIcon";

describe("ArrowIcon", () => {
  const wrapper = shallow(<ArrowIcon className="collapsed" />);

  it("should shallow", () => {
    expect(wrapper.find("svg")).toHaveLength(1);
  });

  it("add className", () => {
    expect(wrapper.find(".o2xp-svg-icon.o2xp-collapsed")).toHaveLength(1);
  });
});
