import React from "react";
import { IconProps } from "./types";

const CloseIcon = ({
  width = "18",
  height = "17",
  classes = "",
  onClick = () => {},
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0L5.91667 8.125L0 16.25H5.91667L8.875 12.1875L11.8333 16.25H17.75L11.8333 8.125L17.75 0H11.8333L8.875 4.0625L5.91667 0H0Z"
        fill="white"
      />
    </svg>
  );
};

export { CloseIcon };
