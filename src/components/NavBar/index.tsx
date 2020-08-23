import React from "react";
import styled from "styled-components";
import logo from "../../assets/favicon.png";

const NavItemsContainer = styled.div`
  position: fixed;
  width: 100%;
  
  /* background-color: ${(props) => props.theme.colors.primary}; */
  display: flex;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
`;

const NavigationBarContainer = styled.div`
  position: fixed;
  width: 100%;
  /* height: 50px; */
  display: flex;
  z-index: 1;
  /* justify-content: flex-end; */
  align-items: center;
`;

const NavItems = styled.div`
  width: fit-content;
  height: 15px;
  /* background-color: white; */
  padding: 10px 20px;
  margin-right: 30px;
  text-align: center;
  color: white;
  font-weight: bolder;
  font-size: larger;
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
      <NavItemsContainer>
        <NavItems>HOME</NavItems>
        <NavItems>PORTFOLIO</NavItems>
        <NavItems>SERVICES</NavItems>
        <NavItems>ABOUT</NavItems>
        <NavItems>CONTACT</NavItems>
      </NavItemsContainer>
    </NavigationBarContainer>
  );
};

export default NavBar;
