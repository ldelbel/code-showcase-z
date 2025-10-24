import {
  AquariusIcon,
  AriesIcon,
  CancerIcon,
  CapricornIcon,
  GeminiIcon,
  LeoIcon,
  LibraIcon,
  PiscesIcon,
  SagittariusIcon,
  ScorpioIcon,
  TaurusIcon,
  VirgoIcon,
} from '@/assets/sign-icon';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { HouseData } from '../../../../types';

const signIcons: Record<string, string> = {
  aries: AriesIcon,
  taurus: TaurusIcon,
  gemini: GeminiIcon,
  cancer: CancerIcon,
  leo: LeoIcon,
  virgo: VirgoIcon,
  libra: LibraIcon,
  scorpio: ScorpioIcon,
  sagittarius: SagittariusIcon,
  capricorn: CapricornIcon,
  aquarius: AquariusIcon,
  pisces: PiscesIcon,
};

const HouseHeader = ({ house }: { house: HouseData }) => {
  return (
    <div className="house-card-header">
      <div className="flex flex-col items-center gap-[1px] pb-1 w-2/12">
        <h3>{lang === 'pt-br' ? 'Casa' : 'House'}</h3>
        <div className="bg-golden-gradient w-12 h-12 p-[1px] rounded-full">
          <div className="house-number">{house.house}</div>
        </div>
      </div>
      <div className="flex items-center max-w-56">
        <p className="house-title">{house.title}</p>
      </div>
      <div className="flex items-center flex-col w-2/12 gap-2">
        <img
          src={signIcons[house.sign]}
          alt={house.sign}
          className="w-12 h-12"
        />
        <span className="text-sm text-whitesmoke">
          {AstroLabels[house.sign][lang]}
        </span>
      </div>
      <span className="house-degree">{house.degree.toFixed(2)}°</span>
    </div>
  );
};

export default HouseHeader;
