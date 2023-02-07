import react, { useEffect, useRef, useState } from "react";
import { MenuWrapper, MenuItem } from "./Style";
import { HamburgurIcon } from "../Icons/Hamburgur";
import { CloseIcon } from "../Icons/Close";
import Text from "../Text/Text";
import { ChatIcon, GithubIcon } from "../Icons";
import { Link } from "react-router-dom";
const Menu = () => {
  const [close, setClose] = useState(true);
  const closeRef: any = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  const handleClose = () => {
    setClose(!close);
  };
  const closeMenu = (e: any) => {
    if (closeRef.current && !closeRef.current?.contains(e.target)) {
      setClose(true);
    }
  };
  const listItems = [
    {
      text: "submit a form",
      hasIcon: false,
      Icon: "",
      link: "https://forms.gle/FDnpYSYCxHu8Q7Jv6",
    },
    {
      text: "OUR GITHUB",
      hasIcon: true,
      Icon: <GithubIcon width={"15px"} height={"14px"} />,
      link: "https://github.com/dmc12-xyz",
    },
    {
      text: "BUILD WIHT US",
      hasIcon: true,
      Icon: <ChatIcon width={"15px"} height={"14px"} />,
      link: "mailto:hello@dmc12.xyz",
    },
    {
      text: "VIEW PROJECTS",
      hasIcon: false,
      Icon: "",
      link: "/projects",
    },
  ];
  return (
    <>
      {close ? (
        <HamburgurIcon width={"24px"} height={"24px"} onClick={handleClose} />
      ) : (
        <CloseIcon width={"24px"} height={"24px"} onClick={handleClose} />
      )}
      {!close && (
        <MenuWrapper ref={closeRef}>
          {listItems.map((data, index) => {
            return (
              <a
                key={index}
                href={data.link}
                style={{ textDecoration: "none" }}
                target="_blank"
                onClick={(e) => {
                  handleClose();
                }}
              >
                <MenuItem>
                  <Text
                    size="13px"
                    family="Death Star"
                    weight="400"
                    lineHeight="15px"
                    style={{}}
                  >
                    <span>{data.text}</span>
                  </Text>
                  {data.hasIcon && data.Icon}
                </MenuItem>
              </a>
            );
          })}
        </MenuWrapper>
      )}
    </>
  );
};

export default Menu;
