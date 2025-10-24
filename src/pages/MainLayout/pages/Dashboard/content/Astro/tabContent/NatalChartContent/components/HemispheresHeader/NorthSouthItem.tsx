import AstroLabels from '@/utils/AstroLabels';

interface NorthSouthItemProps {
  northEmphasized: boolean;
}

const NorthSouthItem: React.FC<NorthSouthItemProps> = ({ northEmphasized }) => {
  const slug = northEmphasized ? 'north' : 'south';

  return (
    <div className="flex flex-col items-center">
      {/* North (top half-circle) */}
      <div
        className={`w-10 h-5 mb-1 rounded-t-full overflow-hidden ${
          northEmphasized ? 'shallow-golden-glow' : 'opacity-50'
        }`}
      >
        <div
          className={`w-full h-full ${
            northEmphasized ? 'bg-customYellow2' : 'bg-gray-600'
          }`}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
          }}
        />
      </div>

      <div
        className={`w-10 h-5 rounded-b-full overflow-hidden ${
          northEmphasized ? 'opacity-50' : 'shallow-golden-glow'
        }`}
      >
        <div
          className={`w-full h-full  ${
            northEmphasized ? 'bg-gray-600' : 'bg-customYellow2'
          }`}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            borderRadius: '0 0 50% 50% / 0 0 100% 100%',
          }}
        />
      </div>
      <p className="text-whitesmoke text-sm font-medium text-center mt-2 golden-glow-text">
        {AstroLabels[slug]['pt-br']}
      </p>
    </div>
  );
};

export default NorthSouthItem;
