import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";

export const StyledPrimaryButton = styled.button`
  box-sizing: border-box;
  width: ${(props: ButtonProps) => props.width || "224px"};
  height: ${(props: ButtonProps) => props.height || "63px"};
  border: 3px solid #ffffff;
  cursor: pointer;
  color: white;
  font-style: normal;
  text-align: center;
  font-family: "Raven Sans NBP";
  font-weight: 400;
  font-size: 14px;
  line-height: 0px;
  background-color: transparent;
  border-radius: 28px;
  padding: 20px;
  &:hover {
    border: 2px solid #ffffff;
  }
  @media only screen and (max-width: 768px) {
    font-size: 8px;
    line-height: 0px;
    border: 2px solid #ffffff;
  }
`;
