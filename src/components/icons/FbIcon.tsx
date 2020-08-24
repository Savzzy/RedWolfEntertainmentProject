import React from "react";

interface FbIconProps {
  size: number;
  color?: string;
}

const FbIcon: React.FC<FbIconProps> = ({ size, color }): JSX.Element => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 512 512" height={size} width={size}>
      <g>
        <path
          fill="#FFF"
          d="M53.333,0h405.333C488.122,0,512,23.878,512,53.333v405.333C512,488.122,488.122,512,458.667,512
	H53.333C23.878,512,0,488.122,0,458.667V53.333C0,23.878,23.878,0,53.333,0z"
        >
          <animate
            attributeType="TSX"
            attributeName="fill"
            from="#FFF"
            to="#000"
            begin="mouseover"
            dur="0.5s"
          ></animate>
        </path>
      </g>
      <g>
        <path
          fill={color}
          d="M394.667,149.333h42.667c5.891,0,10.667-4.776,10.667-10.667v-64C448,68.776,443.224,64,437.333,64
	h-42.667c-64.801,0-117.333,52.532-117.333,117.333v53.333H224c-5.891,0-10.667,4.776-10.667,10.667v64
	c0,5.891,4.776,10.667,10.667,10.667h53.333v192h85.333V320H416c4.589-0.003,8.662-2.942,10.112-7.296l21.333-64
	c1.862-5.589-1.16-11.629-6.749-13.491c-1.084-0.361-2.22-0.546-3.363-0.547h-74.667v-53.333
	C362.667,163.66,376.994,149.333,394.667,149.333z"
        />
      </g>
    </svg>
  );
};

export default FbIcon;
