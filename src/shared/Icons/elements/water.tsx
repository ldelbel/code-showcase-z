interface WaterIconProps {
  className?: string;
  size?: number;
}

const WaterIcon: React.FC<WaterIconProps> = ({ className, size = 20 }) => {
  return (
    <svg
      width={size * (3 / 2)}
      height={size}
      viewBox="0 0 41 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32.69 4L20 23.63L7.34 4H32.69ZM40.04 0H0L20 31L40.04 0Z"
        fill="white"
      />
    </svg>
  );
};

export default WaterIcon;
