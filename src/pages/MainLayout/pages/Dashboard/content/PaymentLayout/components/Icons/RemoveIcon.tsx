import React from 'react';

interface RemoveIconProps {
  className?: string;
  size?: number;
  fill?: string;
}

const RemoveIcon: React.FC<RemoveIconProps> = ({
  className,
  size = 13,
  fill = 'white'
}) => {
  return (
    <svg 
      width={size} 
      height={size * (5/13)} 
      viewBox="0 0 13 5" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M12.8189 0.965909V4.09091H0.0915928V0.965909H12.8189Z" 
        fill={fill}
      />
    </svg>
  );
};

export default RemoveIcon; 