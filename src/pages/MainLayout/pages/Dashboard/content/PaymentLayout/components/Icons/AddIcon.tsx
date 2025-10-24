import React from 'react';

interface AddIconProps {
  className?: string;
  size?: number;
  fill?: string;
}

const AddIcon: React.FC<AddIconProps> = ({
  className,
  size = 19,
  fill = 'white'
}) => {
  return (
    <svg 
      width={size} 
      height={size * (20/19)} 
      viewBox="0 0 19 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M7.90732 19.0114V0.261363H11.0891V19.0114H7.90732ZM0.123225 11.2273V8.04545H18.8732V11.2273H0.123225Z" 
        fill={fill}
      />
    </svg>
  );
};

export default AddIcon;