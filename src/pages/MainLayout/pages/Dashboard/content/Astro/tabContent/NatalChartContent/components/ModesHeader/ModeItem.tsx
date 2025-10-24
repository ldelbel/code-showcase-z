import { modeIcons, ModeSlug } from '@/shared/Icons/maps';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';

interface ModeItemProps {
  name: string;
  percentage: number;
  isDominant: boolean;
}

const ModeItem: React.FC<ModeItemProps> = ({
  name,
  percentage,
  isDominant,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p
        className={`text-sm text-center ${
          isDominant
            ? 'text-customYellow2 golden-glow-text font-bold'
            : 'text-oldgoldbrown font-medium'
        }`}
        style={{ fontFamily: 'Rajdhani' }}
      >
        {AstroLabels[name][lang].charAt(0).toUpperCase() + AstroLabels[name][lang].slice(1)}{' '}
        {/* Capitalize mode name */}
      </p>
      {modeIcons[name as ModeSlug]({
        size: 40,
        className: `w-8 h-8 rounded-md my-2 ${
          isDominant ? 'svg-glow' : 'svg-shadow'
        }`,
      })}

      <p
        className={`text-whitesmoke text-base text-center mt-1 text-shadow ${isDominant ? "golden-glow-text font-bold" : "font-medium "}`}
        style={{ fontFamily: 'Inter' }}
      >
        {`${Math.round(percentage)}%`}
      </p>
    </div>
  );
};

export default ModeItem;
