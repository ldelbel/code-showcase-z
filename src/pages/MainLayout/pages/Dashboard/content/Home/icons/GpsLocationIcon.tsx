import React from 'react';

interface GpsLocationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const GpsLocationIcon: React.FC<GpsLocationIconProps> = ({ size = 16, ...props }) => {
  const width = (size * 14) / 16;

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.40005 15.9C8.8856 15.1244 14 12.0879 14 7.04299C14 3.15325 10.866 0 7 0C3.13401 0 0 3.15325 0 7.04299C0 12.0879 5.1144 15.1244 6.59995 15.9C6.85387 16.0326 7.14613 16.0326 7.40005 15.9ZM7 10.0614C8.65685 10.0614 10 8.71002 10 7.04299C10 5.37596 8.65685 4.02457 7 4.02457C5.34315 4.02457 4 5.37596 4 7.04299C4 8.71002 5.34315 10.0614 7 10.0614Z"
        fill="url(#paint0_linear_2152_364)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2152_364"
          x1="0"
          y1="7.9997"
          x2="14"
          y2="7.9997"
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

export default GpsLocationIcon; 