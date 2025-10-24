type IconProps = {
  size?: number;
};

const ParsNecessitatisIcon = ({ size = 20  }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#E6BE69"/>
    <circle cx="10" cy="10" r="8" fill="#242424"/>
    <line x1="10" y1="18.4642" x2="10" y2="0.999981" stroke="#E6BE69" strokeWidth="2"/>
    <line x1="1" y1="7" x2="18.4643" y2="7" stroke="#E6BE69" strokeWidth="2"/>
    <circle cx="10" cy="7" r="2" fill="#E6BE69"/>
  </svg>
);

export default ParsNecessitatisIcon;