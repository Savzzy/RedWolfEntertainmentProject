import React from "react";
import styled from "styled-components";
import WatchesIcon from "../../assets/Watches-of-Switz.png";
import ScottMiracle from "../../assets/ScottsMiracleGro.png";
import Titan from "../../assets/Logos/titan-logo-500-500.png";

const Header = styled.div`
  width: 100%;
  background-color: black;
  top: 100%;
  position: absolute;
  height: 100%;
  margin: 0 auto;
`;

const H2Content = styled.h2`
  top: 25%;
  color: #ffffff;
  position: absolute;
  left: 40%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const ScreenTwo: React.FC = (): JSX.Element => {
  return (
    <Header>
      <H2Content>Who We Work With</H2Content>
      <ImageContainer>
        <Image src={Titan} alt="icon" />
      </ImageContainer>
    </Header>
  );
};

export default ScreenTwo;
