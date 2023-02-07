import react from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import {
  GlobalStyle,
  HeadingWrapper,
  MobileProjectCard,
  ProjectMobileSection,
} from "./Style";

const ProjectPage = () => {
  return (
    <>
      <GlobalStyle />
      <section>
        <HeadingWrapper>
          <Text size="64px" family="Death Star" weight="400" lineHeight="4px">
            <span>PROJECTS</span>
          </Text>
        </HeadingWrapper>
      </section>
      <section>
        <ProjectMobileSection>
          <MobileProjectCard>
            <Text
              size="32px"
              family="Death Star"
              weight="400"
              lineHeight="37px"
              style={{ marginBottom: "50px" }}
            >
              <span>CLIPTO</span>
            </Text>

            <img
              src="/assets/clipto/clipto_cover.png"
              alt={"project-cover"}
              width={"100%"}
              height={"auto"}
              style={{
                marginBottom: "30px",
              }}
            />

            <Link
              to="/clipto"
              style={{ marginBottom: "110px", textDecoration: "none" }}
            >
              <Text
                size="20px"
                family="Advent Pro"
                weight="700"
                lineHeight="24px"
              >
                <span>{"View Project ->"}</span>
              </Text>
            </Link>
          </MobileProjectCard>

          <MobileProjectCard>
            <Text
              size="32px"
              family="Death Star"
              weight="400"
              lineHeight="37px"
              style={{ marginBottom: "50px" }}
            >
              <span>DEVNODE</span>
            </Text>

            <img
              src="/assets/devnode/devnode_cover.png"
              alt={"project-cover"}
              width={"100%"}
              height={"auto"}
              style={{
                marginBottom: "30px",
              }}
            />

            <Link
              to="/devnode"
              style={{ marginBottom: "110px", textDecoration: "none" }}
            >
              <Text
                size="20px"
                family="Advent Pro"
                weight="700"
                lineHeight="24px"
              >
                <span>{"View Project ->"}</span>
              </Text>
            </Link>
          </MobileProjectCard>
        </ProjectMobileSection>
      </section>
    </>
  );
};

export default ProjectPage;
