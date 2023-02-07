import styled from "styled-components";

export const CollabCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  padding: 46px 62px;

  max-width: 280px;
  height: 450px;
  border: 7px solid #fbfbfb;
  border-radius: 28px;

  font-family: Raven Sans NBP;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  text-align: center;
  color: #ffffff;
  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 46px 42px;
  }
`;

export const ProjectCardWrapper = styled.div.attrs(
  (props: { color: string }) => props
)`
  width: 100%;
  max-width: 284px;
  height: auto;
  padding: 25px;
  box-sizing: border-box;
  background: ${(props) => props.color};
  border-radius: 28px;
`;
