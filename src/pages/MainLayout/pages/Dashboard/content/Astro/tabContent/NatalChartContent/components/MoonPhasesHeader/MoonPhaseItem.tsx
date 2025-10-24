interface MoonPhaseItemProps {
  name: string;
  image: string;
  isActive: boolean;
}

const MoonPhaseItem: React.FC<MoonPhaseItemProps> = ({ image, isActive }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full ${isActive ? 'golden-glow' : 'shadow-bottom-dark'}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
};

export default MoonPhaseItem;