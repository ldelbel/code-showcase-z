interface MenuIconProps {
  className?: string;
}

export const MenuIcon = ({ className }: MenuIconProps) => {
  return (
    <svg
      width="53"
      height="50"
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_dd_2413_2243)">
        <path
          d="M30.3088 7.25H16.6913C10.7762 7.25 7.25 10.7762 7.25 16.6912V30.2925C7.25 36.2238 10.7762 39.75 16.6913 39.75H30.2925C36.2075 39.75 39.7338 36.2238 39.7338 30.3088V16.6912C39.75 10.7762 36.2238 7.25 30.3088 7.25ZM31.625 32.0312H15.375C14.7088 32.0312 14.1563 31.4788 14.1563 30.8125C14.1563 30.1462 14.7088 29.5938 15.375 29.5938H31.625C32.2913 29.5938 32.8438 30.1462 32.8438 30.8125C32.8438 31.4788 32.2913 32.0312 31.625 32.0312ZM31.625 24.7188H15.375C14.7088 24.7188 14.1563 24.1663 14.1563 23.5C14.1563 22.8337 14.7088 22.2812 15.375 22.2812H31.625C32.2913 22.2812 32.8438 22.8337 32.8438 23.5C32.8438 24.1663 32.2913 24.7188 31.625 24.7188ZM31.625 17.4062H15.375C14.7088 17.4062 14.1563 16.8538 14.1563 16.1875C14.1563 15.5212 14.7088 14.9688 15.375 14.9688H31.625C32.2913 14.9688 32.8438 15.5212 32.8438 16.1875C32.8438 16.8538 32.2913 17.4062 31.625 17.4062Z"
          fill="#FFD87C"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_2413_2243"
          x="-3"
          y="-3"
          width="59"
          height="59"
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
          <feOffset dx="-1" dy="-1" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2413_2243"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3" dy="3" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_2413_2243"
            result="effect2_dropShadow_2413_2243"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2413_2243"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}; 