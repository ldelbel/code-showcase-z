interface SuccessfullProps {
  width?: number | string;
  height?: number | string;
  size?: number | string;
}

const Successfull = ({ width, height, size = 154 }: SuccessfullProps) => {
  const finalWidth = width || size;
  const finalHeight = height || size;

  return (
    <svg width={finalWidth} height={finalHeight} viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_552_478)">
        <path fillRule="evenodd" clipRule="evenodd" d="M149.4 72.7C149.4 112.9 116.9 145.4 76.7 145.4C36.5 145.4 4 112.9 4 72.7C4 32.5 36.5 0 76.7 0C116.9 0 149.4 32.5 149.4 72.7ZM144.6 72.7C144.6 35.3 114.1 4.79999 76.7 4.79999C39.2999 4.79999 8.80005 35.3 8.80005 72.7C8.80005 110.1 39.2999 140.6 76.7 140.6C114.1 140.6 144.6 110.1 144.6 72.7ZM112.3 46.8C113.3 47.7 113.3 49.2 112.3 50.2L68.7 93.8C68.2 94.3 67.6 94.5 67 94.5C66.4 94.5 65.8 94.3 65.3 93.8L41.0999 69.6C40.0999 68.6 40.0999 67.1 41.0999 66.1C41.9999 65.2 43.5 65.2 44.5 66.1L67 88.7L108.9 46.8C109.9 45.8 111.4 45.8 112.3 46.8Z" fill="url(#paint0_linear_552_478)" />
      </g>
      <defs>
        <filter id="filter0_d_552_478" x="0" y="0" width="153.4" height="153.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_478" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_478" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_552_478" x1="4" y1="72.7" x2="149.4" y2="72.7" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stopColor="#A47A1E" />
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

export default Successfull; 