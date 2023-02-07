import React from "react";
import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  display: flex;
  flex-wrap: nowrap;
  gap: 18px;
  align-items: center;
  box-sizing: border-box;
  border: 4px solid #ffffff;
  cursor: pointer;
  color: white;
  font-style: normal;
  text-align: center;
  font-family: "Advent Pro", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 0;
  background-color: rgba(255, 255, 255, .2);
  border-radius: 28px;
  padding: 10px 20px;
  &:hover {
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.35);
  }

  @media only screen and (max-width: 950px) {
    font-size: 1.5rem;
    line-height: 0px;
    border: 2px solid #ffffff;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 0px;
    border: 2px solid #ffffff;
  }
`;
