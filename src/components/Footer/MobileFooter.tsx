import {GithubIcon, LogoIcon} from "../Icons";
import { TwitterIcon, UnknownIcon } from "../Icons/Icons";
import Text from "../Text/Text";
import {MobileFootWrapper, Socials, SocialWrapper} from "./Style";

const MobileFooter = () => {
  return (
    <MobileFootWrapper>
      <Text size="32px" weight="400" lineHeight="36.02px">
        <span>stay connected</span>
      </Text>
      <Socials>
        <a style={{display: "table-cell"}} href="https://github.com/dmc12-xyz/" target="_blank">
          <SocialWrapper><GithubIcon width={'40'} height={'40'} /></SocialWrapper>
        </a>
        <a style={{display: "table-cell"}} href="https://twitter.com/hidmc12" target="_blank">
          <SocialWrapper><TwitterIcon width={'40'} height={'40'} /></SocialWrapper>
        </a>
        <a style={{display: "table-cell"}} href="#" target="_blank">
          <SocialWrapper><UnknownIcon width={'40'} height={'40'} /></SocialWrapper>
        </a>
      </Socials>
      <Text
        size="12px"
        weight="400"
        lineHeight="24px"
        family="Raven Sans NBP"
        style={{ textAlign: "left" }}
      >
        <span>hello@dmc12.xyz</span>
      </Text>
      <Text
        size="32px"
        weight="400"
        lineHeight="36.63px"
        style={{ marginTop: "84px", marginBottom: "20px" }}
      >
        <span>DMC-12</span>
      </Text>
      <LogoIcon width="50%" />
    </MobileFootWrapper>
  );
};

export default MobileFooter;
