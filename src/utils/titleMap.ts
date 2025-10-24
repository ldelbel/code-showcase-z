import { Languages, PlacementType } from '@zodic/shared/types';

export const placementTitleMap: Record<PlacementType, Record<Languages, string>> = {
  planet: {
    'en-us': 'Planets',
    'pt-br': 'Planetas',
  },
  key_point: {
    'en-us': 'Cardinal Points',
    'pt-br': 'Pontos Cardinais',
  },
  karmic_point: {
    'en-us': 'Karmic Points',
    'pt-br': 'Pontos Cármicos',
  },
  arabic_part: {
    'en-us': 'Arabic Parts',
    'pt-br': 'Partes Árabes',
  },
};

export const genericTitleMap: Record<string, Record<Languages, string>> = {
  house: {
    'en-us': 'Houses',
    'pt-br': 'Casas',
  },
  aspect: {
    'en-us': 'Aspects',
    'pt-br': 'Aspectos',
  },
  mode: {
    'en-us': 'Modes',
    'pt-br': 'Modos',
  },
  element: {
    'en-us': 'Arabic Parts',
    'pt-br': 'Partes Árabes',
  },
};
