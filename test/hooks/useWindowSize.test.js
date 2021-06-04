import "jsdom-global/register";
import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import useWindowSize from "../../src/hooks/useWindowSize";

const ref = {
  current: {
    offsetWidth: 500,
    offsetHeight: 500
  }
};

const expectedRes = {
  width: 500,
  height: 500
};

const refResized = {
  current: {
    offsetWidth: 100,
    offsetHeight: 100
  }
};

const expectedResResized = {
  width: 500,
  height: 500
};

// eslint-disable-next-line react/prop-types
const HookWrapper = ({ fakeRef }) => {
  const value = useWindowSize(fakeRef);
  return <div res={value} />;
};

describe("useWindowSize", () => {
  it("init value", () => {
    const wrapper = mount(<HookWrapper fakeRef={ref} />);
    const { res } = wrapper.find("div").props();
    expect(res).toEqual(expectedRes);
  });

  it("update value", () => {
    const wrapper = mount(<HookWrapper fakeRef={ref} />);
    const { res } = wrapper.find("div").props();
    expect(res).toEqual(expectedRes);

    act(() => {
      wrapper.setProps({ fakeRef: refResized });
    });

    const { res: resResized } = wrapper.find("div").props();
    expect(resResized).toEqual(expectedResResized);
  });
});
