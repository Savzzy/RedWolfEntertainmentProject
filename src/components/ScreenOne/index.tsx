import React from "react";
import styled from "styled-components";
import RedWolfVideo from "../../video/redWolfEntertainment.mp4";
import Button from "../common/Button";
import { RocketIcon } from "../icons";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* background-color: black; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  height: 100vh;
  opacity: 0.8;
  z-index: -1;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primaryText};
  max-width: 800px;
  padding: 20px;
`;

const BrandName = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 100;
  margin-bottom: 1px;

  & > h1 {
    font-family: Poppins, sans-serif;
    font-weight: 800;
    margin: 0;
    padding: 0;
    font-size: 105px;
    line-height: 40px;

    @media (max-width: 680px) {
      font-size: 10vw;
    }
  }

  & > h2 {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    font-size: 80px;

    @media (max-width: 680px) {
      font-size: 8vw;
    }
  }
`;

const Introduction = styled.p`
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 25px;
  line-height: 33px;
  font-family: "Josefin Sans", sans-serif;
`;

const ScreenOne: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Video autoPlay loop muted>
        <source src={RedWolfVideo} />
      </Video>
      <Overlay />
      <MainContent>
        <BrandName>
          <h1>REDWOLF</h1>
          <h2>ENTERTAINMENT</h2>
        </BrandName>
        <Introduction>
          Red Wolf Entertainment is a data-driven, customer-oriented brand
          agency that offers a wide array of digital services. Our goal is to
          deliver the best marketing techniques to help entrepreneurs like you
          with all your digital needs.
        </Introduction>
        <Button icon={<RocketIcon height={20} color={"white"} />}>
          START A PROJECT
        </Button>
      </MainContent>
    </Container>
  );
};

export default ScreenOne;
