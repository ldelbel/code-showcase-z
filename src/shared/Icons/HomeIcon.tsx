import React from 'react';

interface HouseIconProps {
  size?: number;
  variant?: 'gold' | 'shadow' | 'gray';
  className?: string;
}

const HouseIcon: React.FC<HouseIconProps> = ({
  size = 35,
  variant = 'gold',
  className = '',
}) => {
  const isShadowVersion = variant === 'shadow';

  return (
    <svg
      width={size * (25 / 46)}
      height={size * (26 / 46)}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gold Gradient */}
        <linearGradient
          id="gold-gradient"
          x1="0.776367"
          y1="12.7789"
          x2="24.0628"
          y2="12.7789"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.785" stop-color="#FFEC94" />
          <stop offset="1" stop-color="#FFD87C" />
        </linearGradient>

        <filter
          id="inset-shadow"
          x="0.867432"
          y="-1.62012"
          width="23.2864"
          height="28.3435"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_2458_2180"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.50 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_2458_2180"
            result="effect2_innerShadow_2458_2180"
          />
        </filter>
      </defs>

      {/* House Path with Inset Shadow */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.23337 8.52641C0.776855 9.43156 0.776855 10.4613 0.776855 12.5208V18.9528C0.776855 21.813 0.776855 23.2431 1.7512 24.1316C2.70795 25.0041 4.23726 25.0199 7.26162 25.0202V17.4361C7.26162 15.9613 8.54279 14.9192 9.92494 14.9192H14.9149C16.2971 14.9192 17.5782 15.9613 17.5782 17.4361V25.0202C20.6028 25.0199 22.1322 25.0041 23.089 24.1316C24.0633 23.2431 24.0633 21.813 24.0633 18.9528V12.5208C24.0633 10.4613 24.0633 9.43156 23.6068 8.52641C23.1503 7.62125 22.2929 6.9511 20.5782 5.61079L18.9149 4.31064C15.8156 1.88805 14.266 0.676758 12.4201 0.676758C10.5742 0.676758 9.02454 1.88805 5.92525 4.31064L5.92525 4.31064L4.26193 5.61079C2.54723 6.9511 1.68989 7.62125 1.23337 8.52641ZM15.5782 25.0202V17.4361C15.5782 17.2354 15.37 16.9192 14.9149 16.9192H9.92494C9.46984 16.9192 9.26162 17.2354 9.26162 17.4361V25.0202H15.5782Z"
        fill={
          variant === 'shadow'
            ? '#D3A84C'
            : variant === 'gray'
            ? '#6C6C6C'
            : 'url(#gold-gradient)'
        }
        filter={isShadowVersion ? 'url(#inset-shadow)' : ''}
      />
    </svg>
  );
};

export default HouseIcon;
