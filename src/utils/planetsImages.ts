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
import jupiterIcon from '/jupiter.png';
import marsIcon from '/mars.png';
import mercuryIcon from '/mercury.png';
import moonIcon from '/moon.png';
import neptuneIcon from '/neptune.png';
import plutoIcon from '/pluto.png';
import saturnIcon from '/saturn.png';
import sunIcon from '/sun.png';
import uranusIcon from '/uranus.png';
import venusIcon from '/venus.png';

export const signIcons: Record<string, string> = {
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

export const planetImages: Record<string, string> = {
  sun: sunIcon,
  moon: moonIcon,
  mercury: mercuryIcon,
  venus: venusIcon,
  mars: marsIcon,
  jupiter: jupiterIcon,
  saturn: saturnIcon,
  uranus: uranusIcon,
  neptune: neptuneIcon,
  pluto: plutoIcon,
};
