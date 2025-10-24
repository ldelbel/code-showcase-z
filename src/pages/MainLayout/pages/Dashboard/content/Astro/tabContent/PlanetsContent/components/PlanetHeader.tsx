import { placementIcons } from '@/shared/Icons/maps';
import getFormattedPlacementName from '@/utils/getFormattedPlacementName';
import getFormattedSignName from '@/utils/getFormattedSignName';
import { lang } from '@/utils/lang';
import { planetImages, signIcons } from '@/utils/planetsImages';
import { PlanetData } from '../../../../types';

const translations = {
  'pt-br': {
    house: 'Casa',
    retrograde: 'Retrógrado',
  },
  'en-us': {
    house: 'House',
    retrograde: 'Retrograde',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const PlanetHeader = ({ planet }: { planet: PlanetData }) => {
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
          placementIcons[planet.name]({ size: 30 })
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
            {t.house}{' '}
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
        </div>
        <p className="planet-degree">{planet.fullDegree.toFixed(2)}°</p>
        {planet.isRetro && (
          <div className="absolute bottom-[-12px] bg-customBrown text-sm px-2 text-whitesmoke rounded-t-md font-bold">
            {t.retrograde}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanetHeader;
