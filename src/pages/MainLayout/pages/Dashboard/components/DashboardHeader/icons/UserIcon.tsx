interface UserIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const UserIcon: React.FC<UserIconProps> = ({ className = '', width = 74, height = 74 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 74 74" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_3128_2185)">
        <path 
          d="M9.25 37C9.25 21.6741 21.6741 9.25 37 9.25C52.3259 9.25 64.75 21.6741 64.75 37C64.75 52.3259 52.3259 64.75 37 64.75C21.6741 64.75 9.25 52.3259 9.25 37Z" 
          fill="white" 
          fillOpacity="0.8" 
          shapeRendering="crispEdges"
        />
        <path 
          d="M37 8.75C21.398 8.75 8.75 21.398 8.75 37C8.75 52.602 21.398 65.25 37 65.25C52.602 65.25 65.25 52.602 65.25 37C65.25 21.398 52.602 8.75 37 8.75Z" 
          stroke="url(#paint0_linear_3128_2185)" 
          shapeRendering="crispEdges"
        />
      </g>
      <circle cx="37.3333" cy="30.3333" r="12.3333" fill="#717171"/>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M53.543 56.8313C53.5562 56.9053 53.5345 56.9813 53.4846 57.0375C49.8569 61.1158 44.5852 63.6991 38.7073 63.7494C38.6217 63.7502 38.5206 63.7502 38.3183 63.7502H35.3384C35.1361 63.7502 35.035 63.7502 34.9494 63.7494C29.072 63.6992 23.8007 61.1163 20.173 57.0385C20.1231 56.9824 20.1014 56.9063 20.1146 56.8324C21.2808 50.2967 28.3197 45.2715 36.8289 45.2715C45.3376 45.2715 52.3763 50.2961 53.543 56.8313Z" 
        fill="#717171"
      />
      <defs>
        <filter 
          id="filter0_d_3128_2185" 
          x="4.25" 
          y="8.25" 
          width="65.5" 
          height="65.5" 
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
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3128_2185"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3128_2185" result="shape"/>
        </filter>
        <linearGradient 
          id="paint0_linear_3128_2185" 
          x1="9.25" 
          y1="37" 
          x2="64.75" 
          y2="37" 
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stopColor="#A47A1E"/>
          <stop offset="0.19" stopColor="#D3A84C"/>
          <stop offset="0.385" stopColor="#FFEC94"/>
          <stop offset="0.58" stopColor="#E6BE69"/>
          <stop offset="0.795" stopColor="#FFD87C"/>
          <stop offset="0.91" stopColor="#B58F3E"/>
          <stop offset="1" stopColor="#956D13"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default UserIcon; 