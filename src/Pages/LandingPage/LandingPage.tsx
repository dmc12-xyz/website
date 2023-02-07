import React from "react";
import Text from "../../components/Text/Text";
import { ThunderIcon, MailIcon, CheckIcon } from "../../components/Icons";
import {
  HeadingWrapper,
  FunnyTextWrapper,
  AboutTextWrapper,
  PastWorkWrapper,
  CompanyLogo,
  ImageContainer,
  PastWorkSection,
  BottomSectionWrapper,
  TechStackSection,
  TechStackWrapper,
  WorkflowSection,
  WorkFlowWrapper,
  CollaborationWrapper,
  ProjectSection,
  ProjectWrapper,
  ProjectListContainer,
  ProjectContainer,
  ImageHolder,
  TextContanier,
  ProjectsMobileTitle,
  ProjectMobileSection,
  MobileProjectCard,
} from "./Style";

import Messari from "../../components/Icons/Messari.png";
import Clipto from "../../components/Icons/Clipto.png";
import Macys from "../../components/Icons/Macys.png";
import DevNode from "../../components/Icons/DevNode.png";

import Solidity from "../../components/Icons/Solidity.png";
import Rust from "../../components/Icons/Rust.png";
import Polygon from "../../components/Icons/Polygon.png";
import Ceramic from "../../components/Icons/Ceramic.png";
import Typescript from "../../components/Icons/Typescript.png";
import { CollabCard } from "../../components/Cards/CollabCard";
import { ProjectCard } from "../../components/Cards/ProjectCard";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const redirectToDevnode = () => {
    navigate("/devnode");
  };

  const redirectToClipto = () => {
    navigate("/clipto");
  };

  return (
    <>
      <section>
        <HeadingWrapper>
          <Text size="7vw" family="Death Star" weight="400" lineHeight="80vw">
            <span>HEY, WE'RE DMC-12</span>
          </Text>
        </HeadingWrapper>
      </section>

      <section>
        <FunnyTextWrapper>
          <Text
            size="20px"
            family="Death Star"
            weight="400"
            lineHeight="23px"
            style={{}}
          >
            <span></span>
          </Text>
        </FunnyTextWrapper>
        <AboutTextWrapper>
          <Text
            size="40px"
            family="Advent Pro"
            weight="700"
            lineHeight="276.04%"
          >
            <span>
              DMC-12 is a collective of software engineers and product heads
              that provide founders and organisations with professional services
              for web3 application designs, development, NFT projects, DAO
              tooling, and loads more.
            </span>
          </Text>
        </AboutTextWrapper>
      </section>
      <BottomSectionWrapper>
        <WorkflowSection>
          <WorkFlowWrapper>
            <Text
              size="48px"
              family="Death Star"
              weight="400"
              lineHeight="55px"
              style={{ marginTop: "100px" }}
            >
              <span>Workflow</span>
            </Text>
            <Text
              size="40px"
              family="Advent Pro"
              weight="700"
              lineHeight="276.04%"
              style={{ marginTop: "83px" }}
            >
              <span>Collaboration is straightforward and easy:</span>
            </Text>
          </WorkFlowWrapper>
          <CollaborationWrapper>
            <CollabCard
              icon={<ThunderIcon />}
              text={"Submit a project brief"}
            />
            <CollabCard
              icon={<MailIcon />}
              text={"Receive a proposal from our experienced team"}
            />
            <CollabCard
              icon={<CheckIcon />}
              text={"Review, agree, and pay as we complete your project"}
            />
          </CollaborationWrapper>

          <ProjectsMobileTitle>
            <Text
              size="40px"
              family="Death Star"
              weight="400"
              lineHeight="46px"
            >
              <span>PROJECTS</span>
            </Text>
          </ProjectsMobileTitle>
        </WorkflowSection>

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

        <ProjectSection>
          <ProjectWrapper>
            <Text
              size="48px"
              family="Death Star"
              weight="400"
              lineHeight="55px"
              style={{ marginTop: "100px" }}
            >
              <span>Build fast with dmc-12</span>
            </Text>
          </ProjectWrapper>
          <AboutTextWrapper>
            <Text
              size="40px"
              family="Advent Pro"
              weight="700"
              lineHeight="200.04%"
            >
              <span>
                Over the years we’ve developed building styles that are high
                quality and rapid. From dynamic interfaces to scalable backends,
                we provide high quality execution at every step. Here’s a
                snapshot of our problem solving skills.
              </span>
            </Text>
          </AboutTextWrapper>

          <ProjectListContainer>
            <ProjectContainer>
              <ImageHolder
                style={{
                  backgroundImage: "url('/assets/devnode-screenshot.png')",
                  backgroundSize: "cover",
                }}
              >
                <div style={{ position: "absolute", bottom: 20, right: 20 }}>
                  <ProjectCard
                    onClick={redirectToDevnode}
                    backgroundColor={"#000000"}
                    heading={"GROWING DEVELOPER ECOSYSTEMS"}
                    title={"Devnode"}
                  />
                </div>
              </ImageHolder>
              <TextContanier>
                <Text
                  size="24px"
                  family="Inter"
                  weight="700"
                  lineHeight={"29px"}
                  style={{ textAlign: "left", width: "80%" }}
                >
                  <span>GROWING DEVELOPER ECOSYSTEMS</span>
                </Text>
                <Text
                  size="32px"
                  family="Advent Pro"
                  weight="700"
                  lineHeight={"38px"}
                  style={{ marginTop: "40px", textAlign: "left", width: "80%" }}
                >
                  <span>
                    Rapid prototype development.
                    <br /> Test your web3 infrastructure ideas and then scale
                  </span>
                </Text>
              </TextContanier>
            </ProjectContainer>
            <ProjectContainer>
              <TextContanier style={{ alignItems: "flex-end" }}>
                <Text
                  size="24px"
                  family="Inter"
                  weight="700"
                  lineHeight={"29px"}
                  style={{ textAlign: "left", width: "80%" }}
                >
                  <span>NFT MARKET DEVELOPMENT </span>
                </Text>
                <Text
                  size="32px"
                  family="Advent Pro"
                  weight="700"
                  lineHeight={"38px"}
                  style={{ marginTop: "40px", textAlign: "left", width: "80%" }}
                >
                  <span>
                    Go from 0 to 1.
                    <br /> Build an NFT marketplace that creators and fans love
                  </span>
                </Text>
              </TextContanier>
              <ImageHolder
                style={{
                  backgroundImage: "url('/assets/clipto-screenshot.png')",
                  backgroundSize: "cover",
                }}
              >
                <div style={{ position: "absolute", bottom: 20, right: 20 }}>
                  <ProjectCard
                    onClick={redirectToClipto}
                    backgroundColor={"#2C1340"}
                    heading={"NFT MARKET DEVELOPMENT "}
                    title={"CLIPTO"}
                  />
                </div>
              </ImageHolder>
            </ProjectContainer>
          </ProjectListContainer>
        </ProjectSection>

        <TechStackSection>
          <TechStackWrapper>
            <Text
              size="48px"
              family="Death Star"
              weight="400"
              lineHeight="55px"
            >
              <span>Tech Stack</span>
            </Text>
          </TechStackWrapper>
          <CompanyLogo>
            <ImageContainer>
              <img
                src={Solidity}
                alt={"solidity lang"}
                width="50%"
                height="auto"
              />
            </ImageContainer>
            <ImageContainer>
              <img src={Rust} alt={"rust lang"} width="100%" height="auto" />
            </ImageContainer>
            <ImageContainer>
              <img
                src={Typescript}
                alt={"typescript lang"}
                width="50%"
                height="auto"
              />
            </ImageContainer>
            <ImageContainer>
              <img src={Polygon} alt={"polygon"} width="50%" height="auto" />
            </ImageContainer>
            <ImageContainer>
              <img src={Ceramic} alt={"ceramic"} width="50%" height="auto" />
            </ImageContainer>
          </CompanyLogo>
        </TechStackSection>

        <PastWorkSection>
          <PastWorkWrapper>
            <Text
              size="48px"
              family="Death Star"
              weight="400"
              lineHeight="55px"
            >
              <span>Stuff we'’ve helped build</span>
            </Text>
          </PastWorkWrapper>
          <CompanyLogo>
            <ImageContainer>
              <a href={"https://messari.io/"} target={"_blank"}>
                <img src={Messari} alt={"messari"} width="100%" height="auto" />
              </a>
            </ImageContainer>
            <ImageContainer>
              <a href={"https://devnode.network/"} target={"_blank"}>
                <img src={DevNode} alt={"devnode"} width="60%" height="auto" />
              </a>
            </ImageContainer>
            <ImageContainer>
              <a href={"https://www.clipto.io/"} target={"_blank"}>
                <img src={Clipto} alt={"clipto"} width="50%" height="auto" />
              </a>
            </ImageContainer>
            <ImageContainer>
              <a href={"https://www.macysinc.com/"} target={"_blank"}>
                <img src={Macys} alt={"macys"} width="100%" height="auto" />
              </a>
            </ImageContainer>
          </CompanyLogo>
        </PastWorkSection>
      </BottomSectionWrapper>
    </>
  );
};
export default LandingPage;
