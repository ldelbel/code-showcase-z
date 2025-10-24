import React from 'react';

interface ClockIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ClockIcon: React.FC<ClockIconProps> = ({ size = 14, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.99992 14.0001C10.6818 14.0001 13.6666 11.0153 13.6666 7.33341C13.6666 3.65152 10.6818 0.666748 6.99992 0.666748C3.31802 0.666748 0.333252 3.65152 0.333252 7.33341C0.333252 11.0153 3.31802 14.0001 6.99992 14.0001ZM7.99992 2.33341C7.99992 1.78113 7.5522 1.33341 6.99992 1.33341C6.44763 1.33341 5.99992 1.78113 5.99992 2.33341V7.08342C5.99992 7.77377 6.55956 8.33342 7.24992 8.33342H11.1666C11.7189 8.33342 12.1666 7.8857 12.1666 7.33342C12.1666 6.78113 11.7189 6.33341 11.1666 6.33341H7.99992V2.33341Z"
        fill="url(#paint0_linear_2152_597)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2152_597"
          x1="0.333252"
          y1="7.33341"
          x2="13.6666"
          y2="7.33341"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stopColor="#A47A1E" />
          <stop offset="0.19" stopColor="#D3A84C" />
          <stop offset="0.385" stopColor="#FFEC94" />
          <stop offset="0.58" stopColor="#E6BE69" />
          <stop offset="0.795" stopColor="#FFD87C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ClockIcon; 