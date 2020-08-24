import React from "react";
import styled from "styled-components";

import FbIcon from "../icons/FbIcon";
import InstaIcon from "../icons/InstaIcon";
import YouTubeIcon from "../icons/YouTubeIcon";
import AdAgeCollective from "../../assets/footer/AdAgeCollective.png";
import forbes from "../../assets/footer/forbes-agency-council.png";
import Veteran from "../../assets/footer/veteran-business.png";

const Container = styled.div`
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.primary};
  opacity: 0.85;
  padding: 30px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
  }
`;

const ColumnOne = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;

  & > div span {
    font-family: Poppins, sans-serif;
    padding: 2px;
  }

  & > div {
    font-family: "Josefin Sans", sans-serif;
  }
  @media (max-width: 680px) {
    margin-bottom: 20px;
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  width: fit-content;

  & > h3 {
    font-family: Poppins, sans-serif;
    font-weight: 100;
    margin: 2px 0px;
  }
  @media (max-width: 680px) {
    margin-bottom: 20px;
  }
`;

const ColumnThree = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;

  & > h3 {
    font-family: Poppins, sans-serif;
    font-weight: 100;
    margin: 2px 0px;
  }
  @media (max-width: 680px) {
    margin-bottom: 20px;
  }
`;

const Email = styled.div`
  font-family: "Josefin Sans", sans-serif;
  height: 25px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100px;
  & > img {
    margin: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  @media (max-width: 1126px) {
    flex-direction: column;
  }
`;

const Footer: React.FC = (): JSX.Element => {
  return (
    <Container>
      <ColumnOne>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>REDWOLF ENTERTAINMENT</span>
        </div>

        <div>Media Production Company</div>
        <div>Irvine, California</div>
      </ColumnOne>

      <ColumnTwo>
        <h3>Follow US</h3>
        <IconContainer>
          <FbIcon size={20} color="#FE0000" />
          <InstaIcon size={20} color="#FE0000" />
          <YouTubeIcon width={27} height={30} color="#FE0000" />
        </IconContainer>
      </ColumnTwo>
      <ColumnThree>
        <h3>Contact Info</h3>
        <Email>info@redwolfent.com</Email>
      </ColumnThree>
      <Row>
        <IconContainer>
          <img src={AdAgeCollective} alt="AdAgeCollective" />
        </IconContainer>
        <IconContainer>
          <img src={forbes} alt="AdAgeCollective" />
        </IconContainer>
        <IconContainer>
          <img src={Veteran} alt="AdAgeCollective" />
        </IconContainer>
      </Row>
    </Container>
  );
};

export default Footer;
