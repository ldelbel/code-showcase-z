import { placementIcons } from '@/shared/Icons/maps';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { planetImages } from '@/utils/planetsImages';
import { PlacementSlug } from '@zodic/shared/types/scopes/legacy';
import { AspectData } from '../../../../types';

const AspectHeader = ({ aspect }: { aspect: AspectData }) => {
  const isAspectingPlanet = !!planetImages[aspect.aspectingPlanet];
  const isAspectedPlanet = !!planetImages[aspect.aspectedPlanet];

  return (
    <div className="house-card-header">
      <div className="flex flex-col gap-2 items-center min-w-16 mx-2 w-32">
        {isAspectingPlanet ? (
          <div
            className="planet-icon"
            style={{
              backgroundImage: `url(${planetImages[aspect.aspectingPlanet]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ) : (
          placementIcons[aspect.aspectingPlanet as PlacementSlug]({ size: 30 })
        )}

        <h3 className="text-oldgoldlight text-sm font-normal text-center">
          {AstroLabels[aspect.aspectingPlanet][lang]}
        </h3>
      </div>
      <div className="flex items-center max-w-56">
        <p className="house-title">{AstroLabels[aspect.type][lang]}</p>
      </div>
      <div className="flex flex-col gap-2 items-center min-w-16 mx-2 w-32">
        {isAspectedPlanet ? (
          <div
            className="planet-icon"
            style={{
              backgroundImage: `url(${planetImages[aspect.aspectedPlanet]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ) : (
          placementIcons[aspect.aspectedPlanet as PlacementSlug]({ size: 30 })
        )}

        <h3 className="text-oldgoldlight text-sm font-normal text-center">
          {AstroLabels[aspect.aspectedPlanet][lang]}
        </h3>
      </div>
      <span className="house-degree">{aspect.diff.toFixed(2)}°</span>
    </div>
  );
};

export default AspectHeader;
