import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};

  width: fit-content;
  padding: 10px 20px;
`;

const ButtonText = styled.div`
  font-family: Poppins, sans-serif;
`;

const ButtonIcon = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`;

interface ButtonProps {
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, icon }) => {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
    </Container>
  );
};

export default Button;
