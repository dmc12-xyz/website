import React from "react";
import Text from "../../components/Text/Text";
import {
  Description,
  ImagesWrapper,
  ParagraphWrapper,
  GlobalStyle,
  ProjectTitleSection,
} from "./Style";
import { ProjectPageProps, ParagraphProps } from "./types";

const Paragraph = ({ title, description }: ParagraphProps) => {
  return (
    <div>
      <Text size="40px" family="Advent Pro" weight="700" lineHeight="101px">
        <span>{title}</span>
      </Text>
      <Description>
        <Text size="22px" family="Advent Pro" weight="700" lineHeight="40px">
          <span>{description}</span>
        </Text>
      </Description>
    </div>
  );
};

const ProjectDetailsPage = (props: ProjectPageProps) => {
  // const elements = window.document.getElementsByTagName("html");
  // elements[0].style.backgroundImage = `url("")`;

  return (
    <>
      <GlobalStyle />
      <ProjectTitleSection>
        <Text size="64px" family="Death Star" weight="400" lineHeight="74px">
          <span>{props.title}</span>
        </Text>
      </ProjectTitleSection>
      <section style={{ margin: "5% 10%" }}>
        <img
          src={props.cover}
          alt={"project-cover"}
          width={"100%"}
          height={"auto"}
        />
      </section>
      <section>
        <ParagraphWrapper>
          <Paragraph title={"The Problem"} description={props.problem} />
          <Paragraph title={"The Solution"} description={props.solution} />
        </ParagraphWrapper>
      </section>
      <ImagesWrapper>
        {props.images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt={"screen"}
              width={"100%"}
              height={"auto"}
            />
          );
        })}
      </ImagesWrapper>
    </>
  );
};

export default ProjectDetailsPage;
