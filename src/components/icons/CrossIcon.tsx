import React from "react";

interface IconProps {
  height: number;
  color?: string;
  onClick: (event: React.SyntheticEvent) => void;
}

const CrossIcon: React.FC<IconProps> = ({ height, color, onClick }) => {
  return (
    <div onClick={onClick} style={{ height: height, width: height }}>
      <svg x="0px" y="0px" viewBox="0 0 298.667 298.667">
        <g>
          <g fill="#FFF">
            <polygon
              points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667 
			149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333 		"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default CrossIcon;
