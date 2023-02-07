import {ProjectCardWrapper} from "./Style";
import Text from "../Text/Text";
import React from "react";
import {ProjectCardProps} from "./types";

const ProjectCard = ({ backgroundColor, heading, title, onClick }: ProjectCardProps) => {
  return (
      <ProjectCardWrapper color={backgroundColor}>
        <Text
          size="16px"
          family="Inter"
          weight="400"
          lineHeight={"19px"}
          style={{ textAlign: "left"}}
        >
              <span>
                { heading }
              </span>
        </Text>
        <Text
          size="40px"
          family="Inter"
          weight="800"
          lineHeight={"48px"}
          style={{ textAlign: "right", marginTop: "30px" }}
        >
              <span>
                { title }
              </span>
        </Text>
        <div onClick={onClick} >
        <Text
          size="20px"
          family="Advent Pro"
          weight="700"
          lineHeight={"24px"}
          style={{ textAlign: "right", marginTop: "50px", cursor: "pointer" }}
        >
              <span>
                {"View project ->"}
              </span>
        </Text>
        </div>
      </ProjectCardWrapper>
  );
}

export { ProjectCard };
