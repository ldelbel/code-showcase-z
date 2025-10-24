interface AstroIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const AstroIcon: React.FC<AstroIconProps> = ({ 
  className, 
  width = 33, 
  height = 41, 
  color = "#D3A84C" 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="1 0 31 38" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_dd_1039_1811)">
        <rect 
          x="15.75" 
          y="20.125" 
          width="2.5" 
          height="2.5" 
          rx="1.25" 
          transform="rotate(90 15.75 20.125)" 
          stroke={color} 
          strokeWidth="2"
        />
        <path 
          d="M18.875 30.375C12.8689 30.375 8 25.5061 8 19.5C8 13.4939 12.8689 8.625 18.875 8.625C24.8811 8.625 29.75 13.4939 29.75 19.5C29.75 25.5061 24.8811 30.375 18.875 30.375Z" 
          stroke={color} 
          strokeWidth="2"
        />
        <rect 
          x="22.625" 
          y="19.5" 
          width="2.5" 
          height="2.5" 
          rx="1.25" 
          transform="rotate(-90 22.625 19.5)" 
          stroke={color} 
          strokeWidth="2"
        />
        <path 
          d="M23.25 18.875L22.3125 19.8125C22.1748 19.9502 22.1059 20.0191 22.0431 20.0723C21.297 20.7047 20.203 20.7047 19.4569 20.0723C19.3941 20.0191 19.3252 19.9502 19.1875 19.8125V19.8125C19.0498 19.6748 18.9809 19.6059 18.9181 19.5527C18.172 18.9203 17.078 18.9203 16.3319 19.5527C16.2691 19.6059 16.2002 19.6748 16.0625 19.8125L15.125 20.75" 
          stroke={color}
        />
      </g>
      <defs>
        <filter 
          id="filter0_dd_1039_1811" 
          x="0" 
          y="0.625" 
          width="35.75" 
          height="38.75" 
          filterUnits="userSpaceOnUse" 
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix 
            in="SourceAlpha" 
            type="matrix" 
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
            result="hardAlpha"
          />
          <feOffset dx="-1" dy="-1"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_1811"/>
          <feColorMatrix 
            in="SourceAlpha" 
            type="matrix" 
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
            result="hardAlpha"
          />
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_1039_1811" result="effect2_dropShadow_1039_1811"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_1811" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
};

export default AstroIcon; 