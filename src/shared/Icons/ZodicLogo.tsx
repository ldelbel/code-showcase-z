interface ZodicLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const ZodicLogo: React.FC<ZodicLogoProps> = ({ 
  className = '',
  width = 100,
  height = 100
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* ... existing path elements ... */}
      
      <defs>
        <linearGradient 
          id="paint13_linear_2122_4313" 
          x1="49.6858" 
          y1="63.5096" 
          x2="54.8562" 
          y2="63.5096" 
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stopColor="#A47A1E"/>
          <stop offset="0.19" stopColor="#D3A84C"/>
          <stop offset="0.385" stopColor="#FFEC94"/>
          <stop offset="0.58" stopColor="#E6BE69"/>
          <stop offset="0.795" stopColor="#FFD87C"/>
          <stop offset="0.91" stopColor="#B58F3E"/>
          <stop offset="1" stopColor="#956D13"/>
        </linearGradient>
        <linearGradient 
          id="paint14_linear_2122_4313" 
          x1="64.4585" 
          y1="39.5043" 
          x2="68.1517" 
          y2="39.5043" 
          gradientUnits="userSpaceOnUse"
        >
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