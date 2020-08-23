import React from "react";
import styled from "styled-components";
import logo from "../../assets/favicon.png";
import HamburgerIcon from "../../icons/HamburgerIcon";

const DesktopNavItemsContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 922px) {
    display: none;
    background-color: blue;
  }
`;

const MobileNavItemsContainer = styled.div`
  display: contents;
  @media (min-width: 922px) {
    display: flex;
    background-color: white;
  }
`;

const NavigationBarContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 1;
  align-items: center;
`;

const NavItems = styled.div`
  padding: 5px 15px;
  margin-right: 30px;
  text-align: center;
  color: white;
  font-weight: bolder;
  font-size: larger;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
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
  font-size: larger;
  font-weight: bolder;
  margin-left: 10px;
`;

const NavBar: React.FC = (): JSX.Element => {
  return (
    <NavigationBarContainer>
      <LogoContainer>
        <Logo />
        <LogoText>REDWOLF</LogoText>
      </LogoContainer>
      <DesktopNavItemsContainer>
        <NavItems>HOME</NavItems>
        <NavItems>PORTFOLIO</NavItems>
        <NavItems>SERVICES</NavItems>
        <NavItems>ABOUT</NavItems>
        <NavItems>CONTACT</NavItems>
      </DesktopNavItemsContainer>

      <MobileNavItemsContainer>
        <HamburgerIcon height={20}></HamburgerIcon>
      </MobileNavItemsContainer>
    </NavigationBarContainer>
  );
};

export default NavBar;
