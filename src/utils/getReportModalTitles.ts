import AstroLabels from './AstroLabels';

interface PlacementData {
  name: string;
  sign: string;
  house: number | string | null | undefined;
}

export const getReportModalPlacementTitles = (
  lang: 'en-us' | 'pt-br',
  placement: PlacementData
): string[] => {
  const { name, sign, house } = placement;
  const planetName =
    AstroLabels[name]?.[lang] || name.charAt(0).toUpperCase() + name.slice(1);
  const signName =
    AstroLabels[sign]?.[lang] || sign.charAt(0).toUpperCase() + sign.slice(1);

  const titles: string[] = [];

  const signTitle = `${planetName} ${
    lang === 'en-us' ? 'in' : 'em'
  } ${signName}`;
  titles.push(signTitle);

  if (house && (typeof house === 'number' || typeof house === 'string')) {
    const houseNumber = typeof house === 'number' ? house.toString() : house;
    const houseTitle = `${planetName} ${
      lang === 'en-us' ? 'in House' : 'na Casa'
    } ${houseNumber}`;
    titles.push(houseTitle);
  }

  return titles;
};

interface HouseData {
  house: number | string | null | undefined;
  sign: string;
}

interface HouseData {
  house: number | string | null | undefined;
}

export const getReportModalHouseTitle = (
  lang: 'en-us' | 'pt-br',
  houseData: HouseData
): string => {
  const { house, sign } = houseData;
  const houseNumber =
    typeof house === 'number' ? house.toString() : house || '1';

  const houseName =
    lang === 'en-us'
      ? `House ${houseNumber} in ${AstroLabels[sign]['en-us']}`
      : `Casa ${houseNumber} em ${AstroLabels[sign]['pt-br']}`;

  return houseName;
};

interface AspectData {
  aspectingPlanet: string;
  aspectedPlanet: string;
  type: string;
}

export const getReportModalAspectTitle = (
  lang: 'en-us' | 'pt-br',
  aspectData: AspectData
): string => {
  const { aspectingPlanet, aspectedPlanet, type } = aspectData;
  const normalizedAspectingPlanet = aspectingPlanet.toLowerCase();
  const normalizedAspectedPlanet = aspectedPlanet.toLowerCase();

  const aspectingName =
    AstroLabels[normalizedAspectingPlanet]?.[lang] ||
    aspectingPlanet.charAt(0).toUpperCase() + aspectingPlanet.slice(1);
  const aspectedName =
    AstroLabels[normalizedAspectedPlanet]?.[lang] ||
    aspectedPlanet.charAt(0).toUpperCase() + aspectedPlanet.slice(1);

  const aspectType = AstroLabels[type.toLowerCase()][lang];

  const title = `${aspectingName} ${aspectType} ${aspectedName}`;

  return title;
};

interface FeatureData {
  type: 'modes' | 'elements' | 'moon_phase' | 'hemisphere';
  id?: string;
  name?: string;
  elements?: { name: string; percentage: number }[];
  dominant_element_id?: number;
  modeName?: string;
  hemisphere?: 'north_south' | 'east_west';
}

export const getReportModalFeatureTitles = (
  lang: 'en-us' | 'pt-br',
  featureData: FeatureData
): string[] => {
  const {
    type,
    id,
    name,
    elements,
    dominant_element_id,
    modeName,
    hemisphere,
  } = featureData;

  const titles: string[] = [];

  switch (type) {
    case 'modes':
      if (modeName) {
        const modeLabel =
          AstroLabels[modeName.toLowerCase()]?.[lang] ||
          modeName.charAt(0).toUpperCase() + modeName.slice(1);
        titles.push(modeLabel);
        ('Mutável');
      }
      break;

    case 'elements':
      if (elements && dominant_element_id) {
        const dominantIndex = dominant_element_id - 1;
        const dominantElement =
          elements[dominantIndex]?.name.toLowerCase() || 'unknown';
        const elementName =
          AstroLabels[dominantElement]?.[lang] ||
          dominantElement.charAt(0).toUpperCase() + dominantElement.slice(1);

        titles.push(
          lang === 'en-us'
            ? `Abundance of ${elementName}`
            : `Acúmulo de ${elementName}`
        );
      }
      break;

    case 'moon_phase':
      if (name) {
        const phaseName =
          AstroLabels[name.toLowerCase()]?.[lang] ||
          name.charAt(0).toUpperCase() + name.slice(1);
        titles.push(phaseName);
      }
      break;

    case 'hemisphere':
      if (hemisphere && id !== undefined) {
        const hemisphereName = AstroLabels[id][lang];

        const title =
          lang === 'en-us'
            ? `${hemisphereName} Hemisphere`
            : `Hemisfério ${hemisphereName}`;
        titles.push(title);
      }
      break;

    default:
      titles.push('Unknown Feature');
  }

  return titles;
};
