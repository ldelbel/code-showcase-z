import React from 'react';

interface GoldenBorderCheckProps {
  width?: number;
  height?: number;
  className?: string;
}

const GoldenBorderCheck: React.FC<GoldenBorderCheckProps> = ({
  width = 15,
  height = 12,
  className = ''
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 15 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M5.27281 10.441L1.159 6.32152C0.946999 6.10922 0.946999 5.76527 1.159 5.55297L2.25984 4.45063C2.47184 4.23833 2.81532 4.23833 3.02732 4.45063L7.14113 8.57009C7.35314 8.78239 7.35314 9.12634 7.14113 9.33864L6.0403 10.441C5.8283 10.653 5.48482 10.653 5.27281 10.441Z" 
        fill="url(#paint0_linear_1122_2142)"
      />
      <path 
        d="M4.17198 8.57009L11.5727 1.15922C11.7847 0.946926 12.1282 0.946926 12.3402 1.15922L13.441 2.26157C13.653 2.47386 13.653 2.81782 13.441 3.03011L6.0403 10.441C5.8283 10.653 5.48482 10.653 5.27281 10.441L4.17198 9.33864C3.96025 9.12634 3.96025 8.78239 4.17198 8.57009Z" 
        fill="url(#paint1_linear_1122_2142)"
      />
      <path 
        d="M11.2979 0.734375C11.7075 0.399592 12.3124 0.423205 12.6943 0.805664L13.7949 1.9082L13.8662 1.9873C14.1779 2.36971 14.1776 2.92119 13.8662 3.30371L13.7949 3.38379L7.49414 9.69141L7.49512 9.69238L6.39453 10.7939L6.39355 10.7949C6.01166 11.1765 5.40751 11.2004 4.99805 10.8662L4.91895 10.7949V10.7939L3.81836 9.69238V9.69141L0.805664 6.6748C0.398722 6.2673 0.398722 5.60672 0.805664 5.19922L1.90625 4.09766L1.98535 4.02539C2.39502 3.69095 2.99905 3.71532 3.38086 4.09766L5.65625 6.37598L11.2188 0.805664L11.2979 0.734375Z" 
        stroke="url(#paint2_linear_1122_2142)"
      />
      <defs>
        <linearGradient id="paint0_linear_1122_2142" x1="12.0883" y1="9.44853" x2="4.96552" y2="0.100133" gradientUnits="userSpaceOnUse">
          <stop offset="0.108" stopColor="#0D7044"/>
          <stop offset="0.433" stopColor="#11945A"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1122_2142" x1="12.8904" y1="1.7105" x2="4.71122" y2="9.87877" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2AC782"/>
          <stop offset="1" stopColor="#21B876"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1122_2142" x1="1" y1="5.8" x2="13.6" y2="5.8" gradientUnits="userSpaceOnUse">
          <stop offset="0.23" stopColor="#E6BE69"/>
          <stop offset="0.51" stopColor="#FFEC94"/>
          <stop offset="0.795" stopColor="#FFD87C"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GoldenBorderCheck; 