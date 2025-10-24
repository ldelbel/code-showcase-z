import React from 'react';

interface ArrowInBoxIconProps {
  size?: number;
  className?: string;
}

const ArrowInBoxIcon: React.FC<ArrowInBoxIconProps> = ({
  size = 27,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.6569 21.5497L11.9596 22.0773C8.73218 22.5379 7.11848 22.7681 6.08099 21.8553C5.0435 20.9424 5.06652 19.3125 5.11256 16.0527L5.15469 13.0695L11.0735 13.1531L8.32583 16.49L9.86977 17.7613L13.94 12.8183L14.4485 12.2007L13.9576 11.569L10.0286 6.513L8.4494 7.74021L11.1017 11.1533L5.18293 11.0697L5.22506 8.08651C5.27109 4.82673 5.29411 3.19684 6.35696 2.31364C7.41981 1.43044 9.02637 1.7062 12.2395 2.25772L15.9205 2.88954C17.5295 3.16572 18.3339 3.30381 18.806 3.87182C19.278 4.43983 19.2664 5.25601 19.2434 6.88837L19.0914 17.6463C19.0684 19.2786 19.0569 20.0948 18.569 20.6493C18.0812 21.2037 17.2731 21.319 15.6569 21.5497Z"
        fill="url(#paint0_linear_3180_2161)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3180_2161"
          x1="19.1674"
          y1="12.2673"
          x2="5.16881"
          y2="12.0696"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.785" stop-color="#FFEC94" />
          <stop offset="1" stop-color="#FFD87C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowInBoxIcon;
