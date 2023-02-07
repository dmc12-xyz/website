import React from "react";
import { CollabCardProps } from "./types";
import { CollabCardContainer } from "./Style";
import Text from "../Text/Text";

const CollabCard = ({ icon, text }: CollabCardProps) => {
  return (
    <CollabCardContainer>
      {icon}
      <Text size="48px" family="Advent Pro" weight="700" lineHeight="57px">
        <span>{text}</span>
      </Text>
    </CollabCardContainer>
  );
};

export { CollabCard };
