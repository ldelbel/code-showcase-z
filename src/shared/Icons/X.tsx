import React from 'react';

interface CloseButtonProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const X = ({      
  size = 26,
  color = '#33363F',
  strokeWidth = 4,
  onClick,
  className,
  ...props
}: CloseButtonProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      {...props}
    >
      <path
        d="M30 4L5 29"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 4L30 29"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default X;