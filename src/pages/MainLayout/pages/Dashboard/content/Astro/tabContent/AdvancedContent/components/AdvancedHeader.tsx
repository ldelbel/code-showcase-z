import { placementIcons } from '@/shared/Icons/maps';
import getFormattedPlacementName from '@/utils/getFormattedPlacementName';
import getFormattedSignName from '@/utils/getFormattedSignName';
import { lang } from '@/utils/lang';
import { planetImages, signIcons } from '@/utils/planetsImages';
import { AdvancedPlacementData, PlanetData } from '../../../../types';

const AdvancedHeader = ({
  planet,
}: {
  planet: PlanetData | AdvancedPlacementData;
}) => {
  const isPlanet = planet.type === 'planet';
  return (
    <div className="planet-card-header">
      <div className="flex flex-col gap-2 items-center min-w-16 mx-2 w-32">
        {isPlanet ? (
          <div
            className="planet-icon"
            style={{
              backgroundImage: `url(${planetImages[planet.name]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ) : (
          placementIcons[planet.name]({ size: 40 })
        )}

        <h3 className="text-oldgoldlight text-sm font-normal text-center">
          {getFormattedPlacementName(lang, planet.name)}
        </h3>
      </div>
      <div className="h-[80px] w-[2px] bg-golden-gradient-vertical opacity-70"></div>
      <div className="planet-info">
        <p className="planet-title">{planet.title}</p>
        <div className="planet-stats">
          <div className="flex items-center gap-2">
            <img
              src={signIcons[planet.sign]}
              alt={planet.sign}
              className="w-6 h-6"
            />
            <span style={{ fontSize: '16px' }}>
              {getFormattedSignName(lang, planet.sign)}
            </span>
          </div>
          <div className="flex gap-2 items-center" style={{ fontSize: '16px' }}>
            {lang === 'pt-br' ? 'Casa' : 'House'}{' '}
            <div
              className={`text-center w-[20%] ${
                planet.house === null
                  ? 'bg-golden-gradient bg-clip-text text-transparent text-bold text-lg'
                  : 'text-whitesmoke'
              }`}
            >
              {planet.house !== null && (
                <span className="house-circle">{planet.house}</span>
              )}
            </div>
          </div>

          {/* <span style={{ fontSize: '12px' }}>
            Retro?{' '}
            <span className="text-oldgoldlight font-bold">
              {planet.isRetro ? 'YES' : 'NO'}
            </span>
          </span> */}
        </div>
        <p className="planet-degree">{planet.fullDegree.toFixed(2)}°</p>
        {(planet as PlanetData).isRetro && (
          <div className="absolute bottom-[-12px] bg-customBrown text-sm px-2 text-whitesmoke rounded-t-md font-bold">
            {lang === 'pt-br' ? 'Retrógrado' : 'Retrograde'}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedHeader;
