import React from "react";
import styled from "styled-components";

interface IconContainerProps {
  size: string;
}

const IconContainer = styled.div<IconContainerProps>`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  cursor: pointer;
`;

interface IconProps {
  size: string;
  onClick?: (event: React.SyntheticEvent) => void;
  color?: string;
}

const HamburgerIcon: React.FC<IconProps> = ({ size, onClick, color }) => {
  return (
    <IconContainer size={size} onClick={onClick}>
      <svg x="0px" y="0px" viewBox="0 0 341.333 341.333">
        <g fill={color || "white"}>
          <rect y="277.333" width="341.333" height="42.667" />
          <rect y="149.333" width="341.333" height="42.667" />
          <rect y="21.333" width="341.333" height="42.667" />
        </g>
      </svg>
    </IconContainer>
  );
};

export default HamburgerIcon;
