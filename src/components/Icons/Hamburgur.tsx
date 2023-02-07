import React from "react";
import { IconProps } from "./types";

const HamburgurIcon = ({
  width = "24",
  height = "24",
  classes = "",
  onClick = () => {},
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0V4.8H24V0H0ZM0 9.6V14.4H24V9.6H0ZM0 19.2V24H24V19.2H0Z"
        fill="white"
      />
    </svg>
  );
};

export { HamburgurIcon };
