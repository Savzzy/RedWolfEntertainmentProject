import React from "react";
import styled from "styled-components";

import WatchesIcon from "../../assets/Watches-of-Switz.png";
import LaWeekly from "../../assets/Logos/LAWEEKLY.png";
import Titan from "../../assets/Logos/TITAN.png";
import JMFallon from "../../assets/Logos/emo_tonightshow_01.jpg";
import KSwiss from "../../assets/Logos/k-swiss.png";
import BMW from "../../assets/Logos/BMW.png";
import InfusionSoft from "../../assets/Logos/infusionsoft-logo.png";
import Seiko from "../../assets/Logos/Seiko_GrandSeiko_white.png";
import GlamSeamless from "../../assets/Logos/glamSeamless.png";
import VaynerMedia from "../../assets/Logos/logo-white.png";
import RollsRoyce from "../../assets/Logos/Logo-Rolls-Royce.png";
import NBC from "../../assets/Logos/Lockup-NBCU.png";
import Taylor from "../../assets/Logos/taylor.png";
import CHI from "../../assets/Logos/CHI.png";
import Images from "./Images";

const Container = styled.div`
  width: 100%;
  background-color: black;

  margin: 0 auto;
`;

const PartnersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
`;

const H2Content = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-family: "Josefin Sans", sans-serif;
  margin-top: 100px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const ScreenTwo: React.FC = (): JSX.Element => {
  const images = [
    Titan,
    WatchesIcon,
    LaWeekly,
    JMFallon,
    KSwiss,
    BMW,
    InfusionSoft,
    Seiko,
    GlamSeamless,
    VaynerMedia,
    RollsRoyce,
    NBC,
    Taylor,
    CHI,
  ];
  return (
    <Container>
      <PartnersContainer>
        <H2Content>Who We Work With</H2Content>
        <ImagesContainer>
          {images.map((image) => {
            return <Images image={image} />;
          })}
        </ImagesContainer>
      </PartnersContainer>
    </Container>
  );
};

export default ScreenTwo;
