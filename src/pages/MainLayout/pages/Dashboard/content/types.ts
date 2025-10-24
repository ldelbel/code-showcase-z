import {
  AdvancedPlacementKVData,
  AspectKVData,
  Concept,
  CorePlanetKVData,
  ElementsKVData,
  HemisphereKVData,
  HouseKVData,
  ModesKVData,
  MoonPhaseKVData,
  NatalChartKVData,
  UserConceptData,
} from '@zodic/shared/types';
import {
  PlacementSlug,
  ZodiacSignSlug,
} from '@zodic/shared/types/scopes/legacy';

export type ConceptOverviewData = {
  id: string;
  name: string;
  generated: boolean;
  cost: string;
  image?: string;
};

export type PlacementDisplay = CorePlanetKVData | HouseKVData | AspectKVData;

export type ConceptsOverviewData = ConceptOverviewData[];

export type ElementData = {
  id: string;
  element1: string;
  element2: string;
  element3: string;
  element4: string;
};

export interface ElementsData {
  id: string;
  elements: PercentageItems;
  description?: string;
  dominant_element_id?: number;
  report?: string;
}

export interface ModesData {
  id: string;
  modes: PercentageItems;
  dominant_mode_id?: number;
  description?: string;
  report?: string;
}

export type HemisphereData = {
  id: string;
  east_west: {
    id: number;
    description: string | null;
    report: string | null;
  };
  north_south: {
    id: number;
    description: string | null;
    report: string | null;
  };
};

export type PercentageItem = {
  name: string;
  percentage: number;
};

export type PercentageItems = Array<PercentageItem>;

export type PlanetData = CorePlanetKVData & {
  id: string;
  title: string;
  image: string;
};

export type PlanetsData = PlanetData[];

export type AdvancedPlacementData = AdvancedPlacementKVData & {
  id: string;
  title: string;
};

export type AdvancedPlacementsData = AdvancedPlacementData[];

export type CelestialBody =
  | 'Sun'
  | 'Moon'
  | 'Mercury'
  | 'Venus'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Neptune'
  | 'Uranus'
  | 'Pluto'
  | 'Ascendant'
  | 'Descendant'
  | 'Midheaven'
  | 'Imum Coeli'
  | 'North Node'
  | 'South Node'
  | 'Chiron'
  | 'Pars Fortuna'
  | 'Lilith'
  | 'Vertex'
  | 'Antivertex';

export type HouseData = HouseKVData & {
  id: string;
  title: string;
};

export type HousesData = HouseData[];

export type AspectData = AspectKVData & {
  id: string;
};

export type FeaturesData = {
  moon_phase: MoonPhaseKVData & { id: string };
  elements: ElementsKVData & { id: string };
  modes: ModesKVData & { id: string };
  hemisphere: HemisphereKVData & { id: string };
};

export type NatalChartData = NatalChartKVData & {
  features: FeaturesData;
};

export type AspectsData = AspectData[];

export interface CompositionItem {
  placement: PlacementSlug;
  sign: ZodiacSignSlug;
}

export type MyConceptData = {
  slug: Concept;
  placements: string[];
  userConcept: UserConceptData | null;
  image?: string;
  composition: CompositionItem[];
};

export type MyConceptsData = MyConceptData[];

export type ArtifactItem = {
  name: string;
  description: string;
  image: string;
  isLimitedTime: boolean;
  isLimited: boolean;
  cost: string;
  carnaval: boolean;
};

export type MyArtifactData = {
  id: string;
  name: string;
  artifact: ArtifactItem[];
};

export type MyArtifactsData = MyArtifactData[];
