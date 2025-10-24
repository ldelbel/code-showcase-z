import React from 'react';

interface EyeIconProps {
  className?: string;
  size?: number;
}

const EyeIcon: React.FC<EyeIconProps> = ({ 
  className, 
  size = 28
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M15.8341 6.59717C8.36822 6.59717 4.35088 12.6321 3.08517 14.9455C2.86864 15.3412 2.76037 15.5391 2.77285 15.8184C2.78533 16.0978 2.91397 16.2899 3.17124 16.6742C4.69592 18.9517 9.39105 25.0694 15.8341 25.0694C22.2771 25.0694 26.9723 18.9517 28.4969 16.6742C28.7542 16.2899 28.8829 16.0978 28.8953 15.8184C28.9078 15.5391 28.7995 15.3412 28.583 14.9455C27.3173 12.6321 23.3 6.59717 15.8341 6.59717Z" 
        stroke="white" 
        strokeOpacity="0.5" 
        strokeWidth="2"
      />
      <ellipse 
        cx="15.8344" 
        cy="15.8334" 
        rx="5.27778" 
        ry="5.27778" 
        fill="white" 
        fillOpacity="0.5"
      />
    </svg>
  );
};

export default EyeIcon; 