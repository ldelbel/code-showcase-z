import React from 'react';

interface ShareIconProps {
  className?: string;
  size?: number;
}

const ShareIcon: React.FC<ShareIconProps> = ({ 
  className, 
  size = 26 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 26 26" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_ii_1139_3720)">
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M10.8562 13.7298L7.85892 12.7307C5.50571 11.9463 4.3291 11.5541 4.3291 10.8333C4.3291 10.1126 5.50571 9.72039 7.85892 8.93598L7.85892 8.93598L17.8721 5.59826C19.5279 5.04633 20.3558 4.77036 20.7928 5.20738C21.2298 5.6444 20.9538 6.47229 20.4019 8.12808L17.0642 18.1412C16.2798 20.4945 15.8876 21.6711 15.1668 21.6711C14.4461 21.6711 14.0539 20.4945 13.2695 18.1412L12.2704 15.144L16.9573 10.4571C17.3478 10.0666 17.3478 9.43343 16.9573 9.04291C16.5667 8.65238 15.9336 8.65238 15.5431 9.04291L10.8562 13.7298Z" 
          fill="#D3A84C"
        />
      </g>
      <defs>
        <filter 
          id="filter0_ii_1139_3720" 
          x="0" 
          y="-4" 
          width="26" 
          height="34" 
          filterUnits="userSpaceOnUse" 
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix 
            in="SourceAlpha" 
            type="matrix" 
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
            result="hardAlpha"
          />
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix 
            type="matrix" 
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1139_3720"/>
          <feColorMatrix 
            in="SourceAlpha" 
            type="matrix" 
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
            result="hardAlpha"
          />
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix 
            type="matrix" 
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="effect1_innerShadow_1139_3720" result="effect2_innerShadow_1139_3720"/>
        </filter>
      </defs>
    </svg>
  );
};

export default ShareIcon; 