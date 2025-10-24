interface CrossIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export const CrossIcon: React.FC<CrossIconProps> = ({
  className,
  width = 24,
  height = 24,
  color = '#55472A',
}) => {
  const fillColor = color === 'gradient' ? 'url(#crossGradient)' : color;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="2.5%" stopColor="#A47A1E" />
          <stop offset="19%" stopColor="#D3A84C" />
          <stop offset="38.5%" stopColor="#FFEC94" />
          <stop offset="58%" stopColor="#E6BE69" />
          <stop offset="79.5%" stopColor="#FFD87C" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5V10.5H4.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5H10.5V19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5V13.5H19.5C20.3284 13.5 21 12.8284 21 12C21 11.1716 20.3284 10.5 19.5 10.5H13.5V4.5Z"
        fill={fillColor}
        filter="url(#shadow)"
      />
      <defs>
        <filter
          id="shadow"
          x="-1"
          y="-1"
          width="26"
          height="26"
          filterUnits="userSpaceOnUse"
        >
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="0.5"
            floodColor="black"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
    </svg>
  );
};
