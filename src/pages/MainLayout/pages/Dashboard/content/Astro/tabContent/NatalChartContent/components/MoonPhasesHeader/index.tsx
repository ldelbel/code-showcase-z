import moonFirstQuarter from '@/assets/moon/first-quarter.png';
import moonFull from '@/assets/moon/full-moon.png';
import moonLastQuarter from '@/assets/moon/last-quarter.png';
import moonNew from '@/assets/moon/new-moon.png';
import moonWaningCrescent from '@/assets/moon/waning-crescent.png';
import moonWaningGibbous from '@/assets/moon/waning-gibbous.png';
import moonWaxingCrescent from '@/assets/moon/waxing-crescent.png';
import moonWaxingGibbous from '@/assets/moon/waxing-gibbous.png';
import AstroLabels from '@/utils/AstroLabels';
import { MoonPhaseKVData } from '@zodic/shared/types';
import MoonPhaseItem from './MoonPhaseItem';

const moonPhases = [
  { id: 1, name: 'new_moon', image: moonNew },
  { id: 2, name: 'waxing_crescent', image: moonWaxingCrescent },
  { id: 3, name: 'first_quarter', image: moonFirstQuarter },
  { id: 4, name: 'waxing_gibbous', image: moonWaxingGibbous },
  { id: 5, name: 'full_moon', image: moonFull },
  { id: 6, name: 'waning_gibbous', image: moonWaningGibbous },
  { id: 7, name: 'last_quarter', image: moonLastQuarter },
  { id: 8, name: 'waning_crescent', image: moonWaningCrescent },
];

const MoonPhaseHeader = ({ moonPhase }: { moonPhase: MoonPhaseKVData }) => {
  const userMoonPhase = moonPhases.find(
    (phase) =>
      phase.name === moonPhase.name || phase.id === moonPhase.moon_phase_id
  );
  const userMoonPhaseName = userMoonPhase?.name || 'last_quarter';
  const displayName =
    AstroLabels[userMoonPhaseName]['pt-br'] || userMoonPhaseName;

  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        {moonPhases.map((phase) => (
          <MoonPhaseItem
            key={phase.name}
            name={phase.name}
            image={phase.image}
            isActive={phase.name === userMoonPhaseName}
          />
        ))}
      </div>
      <div className="mt-2 text-whitesmoke text-lg font-medium text-center golden-glow-text">
        {displayName}
      </div>
    </div>
  );
};

export default MoonPhaseHeader;
