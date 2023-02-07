import React from "react";
import { StyledPrimaryButton } from "./Style";
import { PrimaryButtonProps } from "./types";

const PrimaryButton = ({
  text,
  onClick,
  icon
}: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton onClick={onClick}>
      {text}
      {icon ? icon : null}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
