import { placementIcons, signIcons } from '@/shared/Icons/maps';
import { lang } from '@/utils/lang';
import { PlacementObject } from '@zodic/shared/types';
import PlacementsTableSection from './PlanetsTableSection';

interface AstroDataGridProps {
  planets: PlacementObject[];
  keyPoints: PlacementObject[];
  karmicPoints: PlacementObject[];
  arabicParts: PlacementObject[];
}

const AstroDataGrid = ({
  planets,
  keyPoints,
  karmicPoints,
  arabicParts,
}: AstroDataGridProps) => {
  return (
    <div className="astro-data-grid px-1">
      <PlacementsTableSection
        placements={planets}
        placementIcons={placementIcons}
        signIcons={signIcons}
        lang={lang}
      />
      <PlacementsTableSection
        placements={keyPoints}
        placementIcons={placementIcons}
        signIcons={signIcons}
        lang={lang}
      />
      <PlacementsTableSection
        placements={karmicPoints}
        placementIcons={placementIcons}
        signIcons={signIcons}
        lang={lang}
      />
      <PlacementsTableSection
        placements={arabicParts}
        placementIcons={placementIcons}
        signIcons={signIcons}
        lang={lang}
      />
    </div>
  );
};

export default AstroDataGrid;
