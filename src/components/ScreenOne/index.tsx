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

const ScreenOne: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Video autoPlay loop muted>
        <source src={RedWolfVideo} />
      </Video>
      <Overlay />
    </React.Fragment>
  );
};

export default ScreenOne;
