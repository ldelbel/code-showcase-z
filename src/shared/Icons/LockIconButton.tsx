import React from 'react';

interface LockButtonProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const LockIconButton: React.FC<LockButtonProps> = ({
  width = 18,
  height = 18,
  color = '#55472A',
  className = '',
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <g filter="url(#filter0_ii_2245_2145)">
        <path
          d="M12 6V5.25C12 3.59315 10.6569 2.25 9 2.25V2.25C7.34315 2.25 6 3.59315 6 5.25V6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.58466 6.87305C2.25 7.52086 2.25 8.37105 2.25 10.0714C2.25 12.3386 2.25 13.4722 2.69622 14.3359C3.07689 15.0728 3.67721 15.6731 4.41407 16.0538C5.27781 16.5 6.4114 16.5 8.67857 16.5H9.32143C11.5886 16.5 12.7222 16.5 13.5859 16.0538C14.3228 15.6731 14.9231 15.0728 15.3038 14.3359C15.75 13.4722 15.75 12.3386 15.75 10.0714C15.75 8.37105 15.75 7.52086 15.4153 6.87305C15.1298 6.3204 14.6796 5.87017 14.1269 5.58466C13.4791 5.25 12.629 5.25 10.9286 5.25H7.07143C5.37105 5.25 4.52086 5.25 3.87305 5.58466C3.3204 5.87017 2.87017 6.3204 2.58466 6.87305ZM9 10.75C9.13807 10.75 9.25 10.6381 9.25 10.5C9.25 10.3619 9.13807 10.25 9 10.25C8.86193 10.25 8.75 10.3619 8.75 10.5C8.75 10.6381 8.86193 10.75 9 10.75ZM11.25 10.5C11.25 11.3834 10.7409 12.1479 10 12.5161V14.25H8V12.5161C7.25914 12.1479 6.75 11.3834 6.75 10.5C6.75 9.25736 7.75736 8.25 9 8.25C10.2426 8.25 11.25 9.25736 11.25 10.5Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_2245_2145"
          x="0"
          y="-4"
          width="18"
          height="26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2245_2145" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="effect1_innerShadow_2245_2145" result="effect2_innerShadow_2245_2145" />
        </filter>
      </defs>
    </svg>
  );
}; 

export default LockIconButton;