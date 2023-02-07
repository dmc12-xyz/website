import React, { useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { ChatIcon, GithubIcon, LogoIcon } from "../Icons";
import { NavWrapper, Logo, DesktopHeader, MobileHeader } from "./Style";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";

const Header = () => {
  const navigate = useNavigate();

  const openMailClient = () => {
    const discord = "mailto:hello@dmc12.xyz";
    window.open(discord, "_blank");
  };

  const openGithub = () => {
    const github = "https://github.com/dmc12-xyz";
    window.open(github, "_blank");
  };

  const openForm = () => {
    const discord = "https://forms.gle/FDnpYSYCxHu8Q7Jv6";
    window.open(discord, "_blank");
  };

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <NavWrapper>
      <Logo>
        <LogoIcon onClick={redirectToHome} width="inherit" height="inherit" />
      </Logo>
      <DesktopHeader>
        <PrimaryButton text={"Submit a form"} onClick={openForm} />
        <PrimaryButton
          text={"Our Github"}
          onClick={openGithub}
          icon={
            <GithubIcon width={"35px"} height={"35px"} onClick={openGithub} />
          }
        />
        <PrimaryButton
          text={"Build with us"}
          onClick={openMailClient}
          icon={
            <ChatIcon width={"35px"} height={"35px"} onClick={openMailClient} />
          }
        />
      </DesktopHeader>
      <MobileHeader>
        <GithubIcon width={"30px"} height={"30px"} onClick={openGithub} />
        <ChatIcon width={"30px"} height={"30px"} onClick={openMailClient} />
        <Menu />
      </MobileHeader>
    </NavWrapper>
  );
};

export default Header;
