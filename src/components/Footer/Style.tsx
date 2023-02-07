import React from "react";
import styled from "styled-components";

export const FootWrapper = styled.div`
  display: flex;
  background-image: url("/assets/footer.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  padding: 57px 50px 57px 50px;
  box-sizing: border-box;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export const SocialWrapper = styled.div`
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: #171538;
  border: 2px solid #FFFFFF;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 850px) {
    width: 70px;
    height: 65px;
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 35px;
  margin-bottom: 40px;

  @media only screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  @media only screen and (max-width: 768px) {
    margin-top: 84px;
    gap: 20px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MobileFootWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 122px;
  padding-top: 50px;
  
  background-image: url("/assets/footer-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  
  @media only screen and (min-width: 851px) {
    display: none;
  }
`;
