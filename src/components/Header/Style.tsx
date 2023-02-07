import React from "react";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  @media only screen and (max-width: 780px) {
    padding: 10px;
  }
`;

export const Logo = styled.div`
  width: 12.7vw;
  max-width: 170px;
  height: auto;
  @media only screen and (max-width: 768px) {
    width: 66px;
    height: 39px;
  }
`;

export const DesktopHeader = styled.div`
  display: flex;
  gap: 20px;
  height: 63px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 63px;
  margin: 0px 30px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
