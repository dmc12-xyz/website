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
  margin:10px;
  padding:15px;
  margin-top: 88%;
  & div {
    width: 80%;
     margin: auto; 
  }
  @media only screen and (max-width: 768px) {
    margin-top: 110%;
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
  margin: 10px;
  padding: 15px;
  margin-top: 15%;
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
    margin-top: 20%;
    & div {
      width: 100%;
    }
    & div:nth-child(1) {
      font-size: 10px;
      line-height: 276.04%;
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

export const CompanyLogo = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  text-align: center;
  @media only screen and (max-width: 1200px) {
    width: 60%;
  }
  @media only screen and (max-width: 900px) {
    width: 70%;
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
