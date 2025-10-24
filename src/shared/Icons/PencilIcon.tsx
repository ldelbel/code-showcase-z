import React from 'react';

interface PencilIconProps {
  className?: string;
  size?: number;
}

export const PencilIcon: React.FC<PencilIconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_i_3750_2704)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1208 9.96758L18.9168 8.17157C19.462 7.62632 19.7346 7.3537 19.8804 7.0596C20.1577 6.50005 20.1577 5.8431 19.8804 5.28354C19.7346 4.98945 19.462 4.71682 18.9168 4.17157C18.3715 3.62632 18.0989 3.3537 17.8048 3.20796C17.2452 2.93068 16.5883 2.93068 16.0287 3.20796C15.7346 3.3537 15.462 3.62632 14.9168 4.17157L13.0981 5.99023C14.062 7.64083 15.4481 9.01639 17.1208 9.96758ZM11.6437 7.44469L4.77314 14.3152C4.34808 14.7403 4.13555 14.9528 3.99582 15.2139C3.85608 15.475 3.79714 15.7697 3.67925 16.3592L3.06385 19.4361C2.99733 19.7687 2.96407 19.9351 3.05868 20.0297C3.15328 20.1243 3.31959 20.091 3.6522 20.0245L6.72918 19.4091C7.31863 19.2912 7.61336 19.2323 7.87446 19.0925C8.13555 18.9528 8.34808 18.7403 8.77315 18.3152L15.6625 11.4258C14.0409 10.4101 12.6692 9.04785 11.6437 7.44469Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter id="filter0_i_3750_2704" x="3" y="3" width="17.0884" height="21.0884" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3750_2704"/>
        </filter>
      </defs>
    </svg>
  );
}; 