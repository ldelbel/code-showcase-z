import React from 'react';

interface CalendarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({ size = 16, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_i_882_2206)">
        <rect x="2" y="4" width="12" height="10" rx="2" stroke="url(#paint0_linear_882_2206)" strokeWidth="2"/>
        <path d="M2 6.66667C2 6.04669 2 5.7367 2.06815 5.48236C2.25308 4.79218 2.79218 4.25308 3.48236 4.06815C3.7367 4 4.04669 4 4.66667 4H11.3333C11.9533 4 12.2633 4 12.5176 4.06815C13.2078 4.25308 13.7469 4.79218 13.9319 5.48236C14 5.7367 14 6.04669 14 6.66667H2Z" fill="url(#paint1_linear_882_2206)"/>
        <path d="M4.66675 2L4.66675 4" stroke="url(#paint2_linear_882_2206)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11.3333 2L11.3333 4" stroke="url(#paint3_linear_882_2206)" strokeWidth="2" strokeLinecap="round"/>
        <rect x="4.66675" y="8" width="2.66667" height="1.33333" rx="0.5" fill="url(#paint4_linear_882_2206)"/>
        <rect x="4.66675" y="10.6667" width="2.66667" height="1.33333" rx="0.5" fill="url(#paint5_linear_882_2206)"/>
        <rect x="8.66675" y="8" width="2.66667" height="1.33333" rx="0.5" fill="url(#paint6_linear_882_2206)"/>
        <rect x="8.66675" y="10.6667" width="2.66667" height="1.33333" rx="0.5" fill="url(#paint7_linear_882_2206)"/>
      </g>
      <defs>
        <filter id="filter0_i_882_2206" x="0" y="0" width="16" height="17" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_882_2206"/>
        </filter>
        <linearGradient id="paint0_linear_882_2206" x1="2" y1="9" x2="14" y2="9" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stopColor="#A47A1E"/>
          <stop offset="0.19" stopColor="#D3A84C"/>
          <stop offset="0.385" stopColor="#FFEC94"/>
          <stop offset="0.58" stopColor="#E6BE69"/>
          <stop offset="0.795" stopColor="#FFD87C"/>
        </linearGradient>
        <linearGradient id="paint1_linear_882_2206" x1="2" y1="5.33333" x2="14" y2="5.33333" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stopColor="#A47A1E"/>
          <stop offset="0.19" stopColor="#D3A84C"/>
          <stop offset="0.385" stopColor="#FFEC94"/>
          <stop offset="0.58" stopColor="#E6BE69"/>
          <stop offset="0.795" stopColor="#FFD87C"/>
          <stop offset="0.91" stopColor="#B58F3E"/>
          <stop offset="1" stopColor="#956D13"/>
        </linearGradient>
        <linearGradient id="paint2_linear_882_2206" x1="4.16675" y1="2" x2="4.16675" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stopColor="#A47A1E"/>
          <stop offset="0.19" stopColor="#D3A84C"/>
          <stop offset="0.385" stopColor="#FFEC94"/>
          <stop offset="0.58" stopColor="#E6BE69"/>
          <stop offset="0.795" stopColor="#FFD87C"/>
        </linearGradient>
        <linearGradient id="paint3_linear_882_2206" x1="10.8333" y1="2" x2="10.8333" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stopColor="#A47A1E"/>
          <stop offset="0.19" stopColor="#D3A84C"/>
          <stop offset="0.385" stopColor="#FFEC94"/>
          <stop offset="0.58" stopColor="#E6BE69"/>
          <stop offset="0.795" stopColor="#FFD87C"/>
        </linearGradient>
        <linearGradient id="paint4_linear_882_2206" x1="4.66675" y1="8.66667" x2="7.33341" y2="8.66667" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stopColor="#A47A1E"/>
          <stop offset="0.19" stopColor="#D3A84C"/>
          <stop offset="0.385" stopColor="#FFEC94"/>
          <stop offset="0.58" stopColor="#E6BE69"/>
          <stop offset="0.795" stopColor="#FFD87C"/>
          <stop offset="0.91" stopColor="#B58F3E"/>
          <stop offset="1" stopColor="#956D13"/>
        </linearGradient>
        <linearGradient id="paint5_linear_882_2206" x1="4.66675" y1="11.3334" x2="7.33341" y2="11.3334" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stopColor="#A47A1E"/>
          <stop offset="0.19" stopColor="#D3A84C"/>
          <stop offset="0.385" stopColor="#FFEC94"/>
          <stop offset="0.58" stopColor="#E6BE69"/>
          <stop offset="0.795" stopColor="#FFD87C"/>
          <stop offset="0.91" stopColor="#B58F3E"/>
          <stop offset="1" stopColor="#956D13"/>
        </linearGradient>
        <linearGradient id="paint6_linear_882_2206" x1="8.66675" y1="8.66667" x2="11.3334" y2="8.66667" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stopColor="#A47A1E"/>
          <stop offset="0.19" stopColor="#D3A84C"/>
          <stop offset="0.385" stopColor="#FFEC94"/>
          <stop offset="0.58" stopColor="#E6BE69"/>
          <stop offset="0.795" stopColor="#FFD87C"/>
          <stop offset="0.91" stopColor="#B58F3E"/>
          <stop offset="1" stopColor="#956D13"/>
        </linearGradient>
        <linearGradient id="paint7_linear_882_2206" x1="8.66675" y1="11.3334" x2="11.3334" y2="11.3334" gradientUnits="userSpaceOnUse">
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

export default CalendarIcon; 