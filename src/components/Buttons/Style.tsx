import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";

export const StyledPrimaryButton = styled.button`
  box-sizing: border-box;
  width: ${(props: ButtonProps) => props.width || "224px"};
  height: ${(props: ButtonProps) => props.height || "63px"};
  border: 3px solid #ffffff;
  color: white;
  font-style: normal;
  font-family: "Death Star";
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  background-color: transparent;
  border-radius: 28px;

  &:hover {
    border: 1px solid #ffffff;
  }
`;

export const ButtonWrapper = styled.div``;
