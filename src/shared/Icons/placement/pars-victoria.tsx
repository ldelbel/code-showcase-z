type IconProps = {
  size?: number;
};

const ParsVictoriaIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="#E6BE69" />
    <circle cx="10" cy="10" r="8" fill="#242424" />
    <line
      x1="2.86824"
      y1="4.50386"
      x2="10.8682"
      y2="18.5039"
      stroke="#E6BE69"
      strokeWidth="2"
    />
    <line x1="3" y1="16" x2="17" y2="16" stroke="#E6BE69" strokeWidth="2" />
    <path d="M16.9999 5L8.99992 19" stroke="#E6BE69" strokeWidth="2" />
  </svg>
);
export default ParsVictoriaIcon;
