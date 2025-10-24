interface ParsSpiritusIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const ParsSpiritusIcon: React.FC<ParsSpiritusIconProps> = ({
  className,
  size = 20,
  color = '#E6BE69',
}) => {
  return (
    <svg
      width={size * (18 / 26)}
      height={size}
      viewBox="0 0 18 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17 13C17 17.4183 13.4183 21 9 21C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C13.4183 5 17 8.58172 17 13Z"
        fill="#242424"
      />
      <path
        d="M9 26V0M17 13C17 17.4183 13.4183 21 9 21C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C13.4183 5 17 8.58172 17 13Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default ParsSpiritusIcon;
