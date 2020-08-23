import React from "react";
import styled from "styled-components";
import RedWolfVideo from "../../video/redWolfEntertainment.mp4";

const Video = styled.video`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const Overlay = styled.div`
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

const MainContent = styled.div`
  display: flex;
  position: absolute;
  top: 30%;
  left: 10%;
  height: fit-content;
  color: ${(props) => props.theme.colors.primaryText};
  max-width: 800px;
  flex-direction: column;
`;
const BoldContent = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 40px;
  font-weight: 100;
  margin-bottom: 1px;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 20px;
`;

const H2Content = styled.h2`
  color: ${(props) => props.theme.colors.primaryText};
  margin-bottom: 1px;
`;

const ScreenOne: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Video autoPlay loop muted>
        <source src={RedWolfVideo} />
      </Video>
      <Overlay />
      <MainContent>
        <BoldContent>REDWOLF ENTERTAINMENT</BoldContent>
        <H2Content>We Help You Build Brands That Grow your Business</H2Content>
        <Paragraph>
          We are a digital marketing agency that specializes in getting our
          clients results – from boosting online traffic and brand awareness, to
          generating qualified leads – ultimately increasing sales. Let our
          online marketing company help your business grow with successful
          marketing, advertising, design, and website services.
        </Paragraph>
      </MainContent>
    </React.Fragment>
  );
};

export default ScreenOne;
