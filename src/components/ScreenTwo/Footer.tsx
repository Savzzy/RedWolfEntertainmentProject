import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 40%;
  overflow-y: scroll;
  bottom: 0;
  background-color: black;
  opacity: 0.85;
`;

const Footer: React.FC = (): JSX.Element => {
  return <Container></Container>;
};

export default Footer;
