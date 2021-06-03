import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";
import useDebounce from "../../src/hooks/useDebounce";

jest.useFakeTimers();

function HookWrapper({ text }) {
  const value = useDebounce({ value: text, delay: 1000 });
  return <div hook={value} />;
}

describe("useDebounce", () => {
  it("init value", () => {
    const text = "Hello";
    const wrapper = shallow(<HookWrapper text={text} />);

    const { hook: res } = wrapper.find("div").props();
    expect(res).toEqual(text);
  });

  it("update value only once debounced is finished", () => {
    const text = "Hello";
    const updatedText = "Hello World";
    const wrapper = mount(<HookWrapper text={text} />);

    // Check init
    let res = wrapper.find("div").props().hook;
    expect(res).toEqual(text);

    // Check that value isn't set if delay isn't finished
    act(() => {
      jest.advanceTimersByTime(999);
      wrapper.setProps({ text: updatedText });
    });

    res = wrapper.find("div").props().hook;
    expect(res).toEqual(text);

    // Delay is finished, now it's have been updated
    act(() => {
      jest.advanceTimersByTime(1000);
      wrapper.setProps({ text: updatedText });
    });

    res = wrapper.find("div").props().hook;
    expect(res).toEqual(updatedText);
  });
});
