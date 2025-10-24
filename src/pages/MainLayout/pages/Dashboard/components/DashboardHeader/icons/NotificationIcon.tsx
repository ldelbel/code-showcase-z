import React from 'react';

interface NotificationIconProps {
  className?: string;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({ className }) => {
  return (
    <svg 
      width="53" 
      height="50" 
      viewBox="0 0 42 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_dd_2408_2202)">
        <path d="M32.2333 28.1499L30.5667 25.3833C30.2167 24.7666 29.9 23.5999 29.9 22.9166V18.6999C29.9 14.7833 27.6 11.3999 24.2833 9.81659C23.4167 8.28325 21.8167 7.33325 19.9833 7.33325C18.1667 7.33325 16.5333 8.31659 15.6667 9.86659C12.4167 11.4833 10.1667 14.8333 10.1667 18.6999V22.9166C10.1667 23.5999 9.84999 24.7666 9.49999 25.3666L7.81665 28.1499C7.14999 29.2666 6.99999 30.4999 7.41665 31.6333C7.81665 32.7499 8.76665 33.6166 9.99999 34.0333C13.2333 35.1333 16.6333 35.6666 20.0333 35.6666C23.4333 35.6666 26.8333 35.1333 30.0667 34.0499C31.2333 33.6666 32.1333 32.7833 32.5667 31.6333C33 30.4833 32.8833 29.2166 32.2333 28.1499Z" fill="#FFD87C"/>
        <path d="M24.7167 37.3499C24.0167 39.2833 22.1667 40.6666 20 40.6666C18.6834 40.6666 17.3834 40.1333 16.4667 39.1833C15.9334 38.6833 15.5334 38.0166 15.3 37.3333C15.5167 37.3666 15.7334 37.3833 15.9667 37.4166C16.35 37.4666 16.75 37.5166 17.15 37.5499C18.1 37.6333 19.0667 37.6833 20.0334 37.6833C20.9834 37.6833 21.9334 37.6333 22.8667 37.5499C23.2167 37.5166 23.5667 37.4999 23.9 37.4499C24.1667 37.4166 24.4334 37.3833 24.7167 37.3499Z" fill="#FFD87C"/>
      </g>
      <defs>
        <filter id="filter0_dd_2408_2202" x="-7" y="-3" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-1" dy="-1"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2408_2202"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="3" dy="3"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_2408_2202" result="effect2_dropShadow_2408_2202"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2408_2202" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
}; 