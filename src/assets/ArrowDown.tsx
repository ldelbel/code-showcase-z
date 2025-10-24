interface ArrowDownProps {
  className?: string;
  width?: number;
  height?: number;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ className, width = 30, height = 20 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 35 23" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_907_1022)">
        <path d="M17.6667 15L30.3684 0H4.96496L17.6667 15Z" fill="#D3A84C"/>
      </g>
      <defs>
        <filter id="filter0_d_907_1022" x="0.964844" y="0" width="33.4033" height="23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_907_1022"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_907_1022" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowDown; 