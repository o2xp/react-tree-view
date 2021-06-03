// @flow
import { useState, useEffect } from "react";
import type { UseWindowSizeReturn } from "../types";

const useWindowSize = (ref: any): UseWindowSizeReturn => {
  const getSize = () => {
    return {
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight
    };
  };

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const handleResize = () => {
    setWindowSize(getSize());
  };

  useEffect((): any => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return windowSize;
};

export default useWindowSize;
