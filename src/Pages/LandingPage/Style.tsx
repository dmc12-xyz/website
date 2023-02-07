import React from "react";
import styled from "styled-components";

interface Content {
  content: "space-between" | "center" | "space-around";
}
export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 5% 10px;
  margin-top: 0px;

  @media only screen and (max-width: 600px) {
    & div:nth-child(1) {
      margin: 80% 10px;
      font-size: 40px;
      line-height: 46px;
    }
    & div:nth-child(2) {
      font-size: 10px;
      line-height: 20px;
    }
  }
`;

export const FunnyTextWrapper = styled.div`
  margin:10px 0px;
  padding:15px;
  margin-top: 10%;
  & div {
    width: 80%;
     margin: auto; 
  }
  @media only screen and (max-width: 768px) {
    margin-top: 0;
    & div {
      width: 100%;
    }
  }
  @media only screen and (max-width: 600px) {
    & div {
      width:100%;
    }
    & div:nth-child(1) {
      font-size: 24px;
      line-height: 28px;
    }
`;

export const AboutTextWrapper = styled.div`
  padding: 54px 0;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #040217;
  //background-image: url("/assets/2.png");
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  @media only screen and (max-width: 900px) {
    //background-image: url("/assets/2.png");
    background-color: #040217;
    background-position: center top 0px;
  }
  & div {
    width: 80%;
    margin: auto;
  }
  @media only screen and (max-width: 768px) {
    & div {
      width: 100%;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-top: 10%;
    & div {
      width: 80%;
    }
    & div:nth-child(1) {
      font-family: Raven Sans NBP;
      font-size: 10px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
`;

export const WorkWrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 16.6vw;
  padding-bottom: 50px;
  @media only screen and (max-width: 600px) {
    & div:nth-child(1) {
      font-size: 32px;
      line-height: 37px;
    }
  }
`;

export const StackWrapper = styled.div`
  width: 100%;
  height: 30%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${(props: Content) => props.content || "center"};
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 980px) {
    & div > div > span {
      font-size: 25px;
    }
    &:nth-child(2) > div {
      width: 50%;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    & > div > svg {
      width: 100%;
      margin: 20px 0px;
    }
    &:nth-child(2) > div {
      width: 100%;
    }
    & div > div > span {
      font-size: 32px;
      line-height: 37px;
    }
  }

  @media only screen and (max-width: 500px) {
    height: auto;
    &:nth-child(2) > div > svg {
      height: auto;
    }
    &:nth-child(2) > div > div {
      top: 15% !important ;
    }
  }
`;

export const ShapeWrapper = styled.div`
  position: relative;
`;

export const PastWorkWrapper = styled.div`
  width: 100%;
  padding: 80px 0px;
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    padding: 50px 0px;
  }
  @media only screen and (max-width: 600px) {
    & div:nth-child(1) {
      font-size: 32px;
      line-height: 37px;
    }
  }
`;

export const TechStackWrapper = styled(PastWorkWrapper)`
  @media only screen and (max-width: 768px) {
    padding-top: 0px;
  }
`;

export const WorkFlowWrapper = styled(PastWorkWrapper)`
  @media only screen and (max-width: 600px) {
    & div:nth-child(1) {
      font-family: "Death Star";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 37px;
      text-align: center;
      margin-top: 0px !important;
    }
    & div:nth-child(2) {
      font-family: "Raven Sans NBP";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 253.54%;
      text-align: center;
      padding: 10px;
      margin-top: 30px !important;
    }
  }
`;

export const ProjectWrapper = styled(PastWorkWrapper)``;

export const CollaborationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
  align-items: center;
  justify-content: center;
  margin-top: 14px;

  @media only screen and (max-width: 768px) {
    margin: 0 20px;
  }

  @media only screen and (max-width: 600px) {
    & div > div {
      font-family: "Raven Sans NBP";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 48px;
      text-align: center;
      word-break: break-word;
    }
    & > div {
      padding: 25px;
    }
  }
`;

export const CompanyLogo = styled.div`
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 50px;
  text-align: center;
  @media only screen and (max-width: 1200px) {
    width: 60%;
  }
  @media only screen and (max-width: 900px) {
    width: 70%;
    gap: 0px;
  }
  @media only screen and (max-width: 768px) {
    width: 50%;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: inline-block;
  width: 25%;
  height: auto;
  @media only screen and (max-width: 768px) {
    width: 70%;
    margin: 40px 10px;
  }
`;

export const WorkSection = styled.section`
  margin: 10px;
`;
export const PastWorkSection = styled.section`
  margin: 20px 10px 70px 10px;
  margin-bottom: 10%;
`;

export const TechStackSection = styled(PastWorkSection)`
  margin-bottom: 5%;
`;

export const ProjectSection = styled(PastWorkSection)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const WorkflowSection = styled.div`
  background-image: url("/assets/workflow-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 257px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 136px;
  }
`;

export const BottomSectionWrapper = styled.div`
  overflow-y: hidden;
`;

export const ProjectListContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 200px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px 85px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

export const ImageHolder = styled.div`
  width: 45%;
  height: 381px;
  position: relative;
  background-color: #040217;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  border: 2px solid rgba(254, 254, 254, 0.6);
  box-shadow: 0px 4px 62px 11px rgba(255, 255, 255, 0.2);
  border-radius: 25px;
`;

export const LandingPageHr = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const TextContanier = styled.div`
  display: flex;
  flex-direction: column;
  justiy-content: space-between;
  height: 100%;
  width: 45%;
  position: relative;
  margin: 10px;
`;

export const ProjectsMobileTitle = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    padding-top: 100px;
  }
`;

export const ProjectMobileSection = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    padding: 20px;
    width: 100%;
    height: auto;
    box-sizing: border-box;
  }
`;

export const MobileProjectCard = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
