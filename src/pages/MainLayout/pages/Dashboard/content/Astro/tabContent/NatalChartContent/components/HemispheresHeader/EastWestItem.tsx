import AstroLabels from '@/utils/AstroLabels';

interface EastWestItemProps {
  eastEmphasized: boolean;
}

const EastWestItem: React.FC<EastWestItemProps> = ({ eastEmphasized }) => {
  const slug = eastEmphasized ? 'east' : 'west';

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-end gap-1">
        <div
          className={`w-5 h-10 rounded-l-full overflow-hidden ${
            eastEmphasized ? 'shallow-golden-glow' : 'opacity-50'
          }`}
        >
          <div
            className={`w-full h-full ${
              eastEmphasized ? 'bg-customYellow2' : 'bg-gray-600'
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              borderRadius: '50% 0 0 50% / 100% 0 0 100%',
            }}
          />
        </div>

        <div
          className={`w-5 h-10 rounded-r-full overflow-hidden ${
            eastEmphasized ? 'opacity-50' : 'shallow-golden-glow'
          }`}
        >
          <div
            className={`w-full h-full ${
              eastEmphasized ? 'bg-gray-600' : 'bg-customYellow2'
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              borderRadius: '0 50% 50% 0 / 0 100% 100% 0',
            }}
          />
        </div>
      </div>
      <p className="text-whitesmoke text-sm font-medium text-center mt-3 golden-glow-text">
        {AstroLabels[slug]['pt-br']}
      </p>
    </div>
  );
};

export default EastWestItem;
