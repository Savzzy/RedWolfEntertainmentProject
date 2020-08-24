import React from "react";
import styled from "styled-components";

interface ImageProps {
  image: string;
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 130px;
`;

const Images: React.FC<ImageProps> = ({ image }): JSX.Element => {
  return (
    <ImageContainer>
      <Image src={image} alt="icon" />
    </ImageContainer>
  );
};

export default Images;
