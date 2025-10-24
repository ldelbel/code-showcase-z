type IconProps = {
  size?: number;
};

const ParsFortitudoIcon = ({ size = 20  }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#E6BE69"/>
    <circle cx="10" cy="10" r="8" fill="#242424"/>
    <line x1="6" y1="18.1245" x2="6" y2="2" stroke="#E6BE69" strokeWidth="2"/>
    <line x1="14" y1="18.1245" x2="14" y2="2" stroke="#E6BE69" strokeWidth="2"/>
    <line y1="-1" x2="16.1245" y2="-1" transform="matrix(1 0 0 -1 2 5)" stroke="#E6BE69" strokeWidth="2"/>
  </svg>
);


export default ParsFortitudoIcon;