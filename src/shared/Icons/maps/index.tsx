import { PointSlug, ZodiacSignSlug } from '@zodic/shared/types/scopes/legacy';
import { FunctionComponent } from 'react';
import AirIcon from '../elements/air';
import EarthIcon from '../elements/earth';
import FireIcon from '../elements/fire';
import WaterIcon from '../elements/water';
import CardinalIcon from '../modes/cardinal';
import FixedIcon from '../modes/fixed';
import MutableIcon from '../modes/mutable';
import {
  AntivertexIcon,
  AscendantIcon,
  ChironIcon,
  DescendantIcon,
  ImumCoeliIcon,
  JupiterIcon,
  LilithIcon,
  MarsIcon,
  MercuryIcon,
  MidheavenIcon,
  MoonIcon,
  NeptuneIcon,
  NorthNodeIcon,
  ParsAmorisIcon,
  ParsFortitudoIcon,
  ParsFortunaIcon,
  ParsNecessitatisIcon,
  ParsSpiritusIcon,
  ParsVictoriaIcon,
  PlutoIcon,
  SaturnIcon,
  SouthNodeIcon,
  SunIcon,
  UranusIcon,
  VenusIcon,
  VertexIcon,
} from '../placement';
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
} from '../sign';

interface IconProps {
  className?: string;
  color?: string;
  size?: number;
}

export const signIcons: Record<ZodiacSignSlug, FunctionComponent<IconProps>> = {
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

export const placementIcons: Record<PointSlug, FunctionComponent<IconProps>> = {
  sun: SunIcon,
  moon: MoonIcon,
  mercury: MercuryIcon,
  venus: VenusIcon,
  mars: MarsIcon,
  jupiter: JupiterIcon,
  saturn: SaturnIcon,
  neptune: NeptuneIcon,
  uranus: UranusIcon,
  pluto: PlutoIcon,
  ascendant: AscendantIcon,
  descendant: DescendantIcon,
  midheaven: MidheavenIcon,
  imum_coeli: ImumCoeliIcon,
  north_node: NorthNodeIcon,
  south_node: SouthNodeIcon,
  chiron: ChironIcon,
  pars_fortuna: ParsFortunaIcon,
  pars_spiritus: ParsSpiritusIcon,
  pars_amoris: ParsAmorisIcon,
  pars_victoria: ParsVictoriaIcon,
  pars_fortitudo: ParsFortitudoIcon,
  pars_necessitatis: ParsNecessitatisIcon,
  lilith: LilithIcon,
  vertex: VertexIcon,
  antivertex: AntivertexIcon,
};

export type ElementSlug = 'fire' | 'water' | 'earth' | 'air';

export const elementIcons: Record<ElementSlug, FunctionComponent> = {
  fire: FireIcon,
  water: WaterIcon,
  earth: EarthIcon,
  air: AirIcon,
};

export type ModeSlug = 'cardinal' | 'fixed' | 'mutable';

export const modeIcons: Record<ModeSlug, FunctionComponent> = {
  cardinal: CardinalIcon,
  fixed: FixedIcon,
  mutable: MutableIcon,
};
