import React from 'react';

interface ExpandIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const ExpandIcon: React.FC<ExpandIconProps> = ({ className, style }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M18 12L12 18L6 12" stroke="#716958" strokeWidth="2"/>
      <path d="M18 6L12 12L6 6" stroke="#716958" strokeWidth="2"/>
    </svg>
  );
};

export default ExpandIcon;
