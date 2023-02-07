import {GithubIcon, LogoIcon} from "../Icons";
import { TwitterIcon, UnknownIcon } from "../Icons/Icons";
import Text from "../Text/Text";
import {FootWrapper, LeftWrapper, RightWrapper, RowWrapper, SocialWrapper} from "./Style";

const DesktopFooter = () => {
  return (
    <FootWrapper>
      <LeftWrapper>
        <RowWrapper>
          <Text
            size="64px"
            weight="400"
            lineHeight="73.63px"
            style={{ marginRight: "20px" }}
          >
            <span>DMC-12</span>
          </Text>
          <LogoIcon />
        </RowWrapper>
        <Text
          size="20px"
          weight="500"
          family="Advent Pro"
          lineHeight="32px"
          style={{ textAlign: "left", marginTop: "22px" }}
        >
          <span>Where talented founders accelerate web3 projects..</span>
        </Text>
      </LeftWrapper>
      <RightWrapper>
        <RowWrapper>
          <a style={{display: "table-cell"}} href="https://github.com/dmc12-xyz/" target="_blank">
            <SocialWrapper><GithubIcon /></SocialWrapper>
          </a>
          <a style={{display: "table-cell"}} href="https://twitter.com/hidmc12" target="_blank">
            <SocialWrapper><TwitterIcon /></SocialWrapper>
          </a>
          <a style={{display: "table-cell"}} href="#" target="_blank">
            <SocialWrapper><UnknownIcon /></SocialWrapper>
          </a>
        </RowWrapper>
        <Text
          size="36px"
          weight="400"
          family="Advent Pro"
          lineHeight="32px"
          style={{ textAlign: "left" }}
        >
          <span>hello@dmc12.xyz</span>
        </Text>
      </RightWrapper>
    </FootWrapper>
  );
};

export default DesktopFooter;
