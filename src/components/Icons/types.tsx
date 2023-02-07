import { MouseEventHandler } from "react";

export interface IconProps {
  width?: string;
  height?: string;
  classes?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}
