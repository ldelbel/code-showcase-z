import React from 'react';

interface AstroIconProps {
  size?: number;
  variant?: 'gold' | 'shadow';
  className?: string;
}

const AstroIcon: React.FC<AstroIconProps> = ({
  size = 27,
  variant = 'gold',
  className = '',
}) => {
  const isShadowVersion = variant === 'shadow';

  return (
    <svg
      width={size}
      height={size * 1.04}
      viewBox="-4 -4 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id="gold-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stopColor="#A47A1E" />
          <stop offset="0.19" stopColor="#D3A84C" />
          <stop offset="0.785" stopColor="#FFEC94" />
          <stop offset="1" stopColor="#FFD87C" />
        </linearGradient>

        <filter
          id="inset-shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
        >
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>

          <feGaussianBlur stdDeviation="2.5" result="blur" />

          <feMorphology operator="dilate" radius="0.8" result="expanded" />

          <feOffset dx="0" dy="2" result="offset-blur" />

          <feComposite in="offset-blur" in2="SourceAlpha" operator="out" />
          <feFlood floodColor="black" floodOpacity="0.5" />
          <feComposite operator="in" in2="offset-blur" />

          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {isShadowVersion ? (
        <g filter="url(#inset-shadow)">
          <path
            d="M18.4431 12.2103L17.4289 13.2245C17.1724 13.481 17.0441 13.6093 16.9201 13.7001C16.2166 14.2152 15.2605 14.2152 14.557 13.7001C14.433 13.6093 14.3047 13.481 14.0482 13.2245V13.2245C13.7917 12.968 13.6634 12.8397 13.5395 12.749C12.836 12.2338 11.8798 12.2338 11.1763 12.749C11.0523 12.8397 10.924 12.968 10.6675 13.2245L9.65332 14.2387"
            stroke="#D3A84C"
          />
          <rect
            x="17.7671"
            y="12.8862"
            width="2.70455"
            height="2.70455"
            rx="1.35227"
            transform="rotate(-90 17.7671 12.8862)"
            stroke="#D3A84C"
            strokeWidth="2"
          />
          <rect
            x="10.3296"
            y="13.5625"
            width="2.70455"
            height="2.70455"
            rx="1.35227"
            transform="rotate(90 10.3296 13.5625)"
            stroke="#D3A84C"
            strokeWidth="2"
          />
          <path
            d="M24.5567 12.8863C24.5567 18.8767 19.7005 23.7329 13.7101 23.7329C7.71971 23.7329 2.86353 18.8767 2.86353 12.8863C2.86353 6.89591 7.71971 2.03973 13.7101 2.03973C19.7005 2.03973 24.5567 6.89592 24.5567 12.8863Z"
            stroke="#D3A84C"
            strokeWidth="4"
          />
        </g>
      ) : (
        <>
          <path
            d="M18.4431 12.2103L17.4289 13.2245C17.1724 13.481 17.0441 13.6093 16.9201 13.7001C16.2166 14.2152 15.2605 14.2152 14.557 13.7001C14.433 13.6093 14.3047 13.481 14.0482 13.2245V13.2245C13.7917 12.968 13.6634 12.8397 13.5395 12.749C12.836 12.2338 11.8798 12.2338 11.1763 12.749C11.0523 12.8397 10.924 12.968 10.6675 13.2245L9.65332 14.2387"
            stroke="url(#gold-gradient)"
          />
          <rect
            x="17.7671"
            y="12.8862"
            width="2.70455"
            height="2.70455"
            rx="1.35227"
            transform="rotate(-90 17.7671 12.8862)"
            stroke="url(#gold-gradient)"
            strokeWidth="2"
          />
          <rect
            x="10.3296"
            y="13.5625"
            width="2.70455"
            height="2.70455"
            rx="1.35227"
            transform="rotate(90 10.3296 13.5625)"
            stroke="url(#gold-gradient)"
            strokeWidth="2"
          />
          <path
            d="M24.5567 12.8863C24.5567 18.8767 19.7005 23.7329 13.7101 23.7329C7.71971 23.7329 2.86353 18.8767 2.86353 12.8863C2.86353 6.89591 7.71971 2.03973 13.7101 2.03973C19.7005 2.03973 24.5567 6.89592 24.5567 12.8863Z"
            stroke="url(#gold-gradient)"
            strokeWidth="4"
          />
        </>
      )}
    </svg>
  );
};

export default AstroIcon;
