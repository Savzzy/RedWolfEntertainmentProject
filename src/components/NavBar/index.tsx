import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/favicon.png";
import HamburgerIcon from "../icons/HamburgerIcon";
import CrossIcon from "../icons/CrossIcon";

interface NavigationBarContainerProps {
  scrolled: boolean;
}

const NavigationBarContainer = styled.div<NavigationBarContainerProps>`
  display: flex;
  justify-content: space-between;

  position: fixed;
  width: 100%;
  display: flex;
  z-index: 1;
  align-items: center;

  box-sizing: border-box;
  padding: 15px;
  background-color: ${(props) => (props.scrolled ? "black" : "transparent")};
`;

interface DesktopNavItemsContainerProps {
  show?: boolean;
}

const DesktopNavItemsContainer = styled.div<DesktopNavItemsContainerProps>`
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
  visibility: visible;

  @media (max-width: 922px) {
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: black;
    justify-content: center;
    align-items: center;
    line-height: 10vh;
    font-size: 30px;
  }
`;

const MobileNavItemsContainer = styled.div`
  @media (min-width: 922px) {
    visibility: hidden;
    background-color: white;
  }
  z-index: 10;
`;

const NavItems = styled.div`
  padding: 5px 15px;
  text-align: center;
  color: white;
  font-weight: bolder;
  font-size: larger;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  background-image: url(${logo});
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const LogoText = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryText};
  font-family: Poppins, sans-serif;
  font-size: 31px;
  font-weight: bolder;
  margin-left: 10px;
`;

interface NavBarProps {
  scrolled: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ scrolled }): JSX.Element => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [showCrossButton, setShowCrossButton] = useState(false);

  return (
    <NavigationBarContainer scrolled={scrolled}>
      <LogoContainer>
        <Logo />
        <LogoText>REDWOLF</LogoText>
      </LogoContainer>

      <DesktopNavItemsContainer show={showMobileNavbar}>
        <NavItems>HOME</NavItems>
        <NavItems>PORTFOLIO</NavItems>
        <NavItems>SERVICES</NavItems>
        <NavItems>ABOUT</NavItems>
        <NavItems>CONTACT</NavItems>
      </DesktopNavItemsContainer>

      <MobileNavItemsContainer>
        {showCrossButton ? (
          <CrossIcon
            height={30}
            onClick={() => {
              setShowCrossButton(!showCrossButton);
              setShowMobileNavbar(!showMobileNavbar);
            }}
          />
        ) : (
          <HamburgerIcon
            size={"30px"}
            onClick={() => {
              setShowMobileNavbar(!showMobileNavbar);
              setShowCrossButton(!showCrossButton);
            }}
          />
        )}
      </MobileNavItemsContainer>
    </NavigationBarContainer>
  );
};

export default NavBar;
