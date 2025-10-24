interface ProfileIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ size = 98, color = "#222222", className }) => {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 98 99" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="49.0006" cy="39.3581" rx="21.6667" ry="21.6667" fill={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M87.1163 98.0882C87.1175 98.2262 87.0055 98.3394 86.8674 98.3394H11.5341C11.396 98.3394 11.2839 98.2262 11.2852 98.0882C11.4427 80.2545 28.3577 65.8394 49.2007 65.8394C70.0437 65.8394 86.9588 80.2545 87.1163 98.0882Z" fill={color} />
    </svg>
  );
};

export default ProfileIcon; 