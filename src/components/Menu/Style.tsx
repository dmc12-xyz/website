import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 30px;
  box-sizing: border-box;
  position: absolute;
  z-index: 3;
  right: 0px;
  left: 0px;
  top: 100px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #ffffff;
  padding: 10px 0px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
