import { ModesKVData } from '@zodic/shared/types';
import ModeItem from './ModeItem';

const ModesHeader = ({ mode }: { mode: ModesKVData }) => {
  const dominantIndex = mode.dominant_mode_id ? mode.dominant_mode_id - 1 : 0;

  return (
    <div className="flex items-center justify-center gap-10">
      {mode.modes.map((item, index) => (
        <ModeItem
          key={item.name}
          name={item.name}
          percentage={item.percentage}
          isDominant={index === dominantIndex}
        />
      ))}
    </div>
  );
};

export default ModesHeader;
