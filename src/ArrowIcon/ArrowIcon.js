// @flow
import React from "react";
import type { ArrowIconProps } from "../types";

const ArrowIcon = ({ className }: ArrowIconProps) => (
  <svg
    className={`o2xp-svg-icon ${className}`}
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

export default ArrowIcon;
