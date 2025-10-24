interface ArrowIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ 
  width = 54, 
  height = 53, 
  className 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 54 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_2659_927)">
        <mask
          id="path-1-outside-1_2659_927"
          maskUnits="userSpaceOnUse"
          x="4"
          y="0"
          width="46"
          height="45"
          fill="black"
        >
          <rect fill="white" x="4" width="46" height="45" />
          <path d="M45.913 4.68983C45.857 4.55801 45.774 4.43451 45.664 4.32735L44.8529 4H26.5C25.8665 4 25.3529 4.50039 25.3529 5.11765C25.3529 5.73491 25.8665 6.23529 26.5 6.23529H42.0837L20.7647 27.0076L13.5464 19.9744C13.0984 19.5379 12.3722 19.5379 11.9242 19.9744C11.4762 20.4109 11.4762 21.1185 11.9242 21.555L19.1425 28.5882L7.33597 40.0921C6.88801 40.5285 6.88801 41.2362 7.33597 41.6726C7.78392 42.1091 8.5102 42.1091 8.95815 41.6726L20.7647 30.1688L27.983 37.2021C28.431 37.6385 29.1573 37.6385 29.6052 37.2021C30.0532 36.7656 30.0532 36.0579 29.6052 35.6215L22.3869 28.5882L43.7059 7.81589V21.8824C43.7059 22.4996 44.2194 23 44.8529 23C45.4864 23 46 22.4996 46 21.8824V5.11765C46 4.96611 45.969 4.82161 45.913 4.68983Z" />
        </mask>
        <g clipPath="url(#paint0_angular_2659_927_clip_path)">
          <foreignObject x="26.5" y="23" width="100%" height="100%" transform="matrix(0.0195 0 0 0.019 0 0)">
            <div
              style={{
                background: "conic-gradient(from 90deg, rgba(149, 109, 19, 1) 0deg, rgba(164, 122, 30, 1) 9deg, rgba(211, 168, 76, 1) 68.4deg, rgba(255, 236, 148, 1) 138.6deg, rgba(230, 190, 105, 1) 208.8deg, rgba(255, 216, 124, 1) 286.2deg, rgba(181, 143, 62, 1) 327.6deg, rgba(149, 109, 19, 1) 360deg)",
                height: "100%",
                width: "100%",
                opacity: 1
              }}
            />
          </foreignObject>
        </g>
        <path
          d="M45.913 4.68983C45.857 4.55801 45.774 4.43451 45.664 4.32735L44.8529 4H26.5C25.8665 4 25.3529 4.50039 25.3529 5.11765C25.3529 5.73491 25.8665 6.23529 26.5 6.23529H42.0837L20.7647 27.0076L13.5464 19.9744C13.0984 19.5379 12.3722 19.5379 11.9242 19.9744C11.4762 20.4109 11.4762 21.1185 11.9242 21.555L19.1425 28.5882L7.33597 40.0921C6.88801 40.5285 6.88801 41.2362 7.33597 41.6726C7.78392 42.1091 8.5102 42.1091 8.95815 41.6726L20.7647 30.1688L27.983 37.2021C28.431 37.6385 29.1573 37.6385 29.6052 37.2021C30.0532 36.7656 30.0532 36.0579 29.6052 35.6215L22.3869 28.5882L43.7059 7.81589V21.8824C43.7059 22.4996 44.2194 23 44.8529 23C45.4864 23 46 22.4996 46 21.8824V5.11765C46 4.96611 45.969 4.82161 45.913 4.68983Z"
          fill="url(#paint1_angular)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2659_927"
          x="0"
          y="0.704102"
          width="53.4614"
          height="52.2959"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2659_927" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2659_927" result="shape" />
        </filter>
        <linearGradient id="paint1_angular" x1="26.5" y1="4" x2="26.5" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#956D13" />
          <stop offset="0.09" stopColor="#A47A1E" />
          <stop offset="0.19" stopColor="#D3A84C" />
          <stop offset="0.385" stopColor="#FFEC94" />
          <stop offset="0.58" stopColor="#E6BE69" />
          <stop offset="0.795" stopColor="#FFD87C" />
          <stop offset="0.91" stopColor="#B58F3E" />
          <stop offset="1" stopColor="#956D13" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowIcon;