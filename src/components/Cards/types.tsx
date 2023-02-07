import {ReactElement} from "react";

export interface CollabCardProps {
  icon: ReactElement,
  text: string;
}

export interface ProjectCardProps {
  backgroundColor: string;
  heading: string;
  title: string;
  onClick: any;
}
