import { PlacementObject } from '@zodic/shared/types'; 
import AstroLabels from './AstroLabels';

interface PlacementTheme {
  'en-us': string;
  'pt-br': string;
}


const placementThemes: { [key: string]: PlacementTheme } = {
  sun: { 'en-us': 'Identity and Self', 'pt-br': 'Identidade e Eu Interior' },
  moon: {
    'en-us': 'Emotions and Inner World',
    'pt-br': 'Emoções e Mundo Interior',
  },
  mercury: {
    'en-us': 'Communication and Intellect',
    'pt-br': 'Comunicação e Intelecto',
  },
  venus: { 'en-us': 'Love and Beauty', 'pt-br': 'Amor e Beleza' },
  mars: { 'en-us': 'Action and Drive', 'pt-br': 'Ação e Motivação' },
  jupiter: {
    'en-us': 'Expansion and Growth',
    'pt-br': 'Expansão e Crescimento',
  },
  saturn: {
    'en-us': 'Discipline and Structure',
    'pt-br': 'Disciplina e Estrutura',
  },
  uranus: { 'en-us': 'Innovation and Change', 'pt-br': 'Inovação e Mudança' },
  neptune: { 'en-us': 'Dreams and Illusions', 'pt-br': 'Sonhos e Ilusões' },
  pluto: {
    'en-us': 'Transformation and Power',
    'pt-br': 'Transformação e Poder',
  },
  
  ascendant: {
    'en-us': 'Rising Sign and Appearance',
    'pt-br': 'Ascendente e Aparência',
  },
  descendant: {
    'en-us': 'Partnerships and Others',
    'pt-br': 'Parcerias e Outros',
  },
  midheaven: {
    'en-us': 'Career and Public Life',
    'pt-br': 'Carreira e Vida Pública',
  },
  imum_coeli: { 'en-us': 'Home and Roots', 'pt-br': 'Lar e Raízes' },
  north_node: {
    'en-us': 'Life Purpose and Growth',
    'pt-br': 'Propósito de Vida e Crescimento',
  },
  south_node: {
    'en-us': 'Past Life and Comfort',
    'pt-br': 'Vida Passada e Conforto',
  },
  chiron: { 'en-us': 'Wounds and Healing', 'pt-br': 'Feridas e Cura' },
  lilith: {
    'en-us': 'Shadow and Wild Nature',
    'pt-br': 'Sombra e Natureza Selvagem',
  },
  vertex: { 'en-us': 'Fate and Connections', 'pt-br': 'Destino e Conexões' },
  antivertex: {
    'en-us': 'Counterbalance and Opposition',
    'pt-br': 'Contrapeso e Oposição',
  },
  pars_fortuna: { 'en-us': 'Fortune and Luck', 'pt-br': 'Fortuna e Sorte' },
  pars_spiritus: { 'en-us': 'Spirit and Soul', 'pt-br': 'Espírito e Alma' },
  pars_amoris: { 'en-us': 'Love and Affection', 'pt-br': 'Amor e Afeto' },
  pars_victoria: {
    'en-us': 'Victory and Success',
    'pt-br': 'Vitória e Sucesso',
  },
  pars_fortitudo: {
    'en-us': 'Strength and Courage',
    'pt-br': 'Força e Coragem',
  },
  pars_necessitatis: {
    'en-us': 'Necessity and Duty',
    'pt-br': 'Necessidade e Dever',
  },
};

export const getPlacementTheme = (
  placement: PlacementObject | string
): PlacementTheme => {
  const slug =
    typeof placement === 'string'
      ? placement.toLowerCase()
      : placement.name.toLowerCase();

  const theme = placementThemes[slug] || {
    'en-us':
      AstroLabels[slug]?.['en-us'] ||
      slug.charAt(0).toUpperCase() + slug.slice(1),
    'pt-br':
      AstroLabels[slug]?.['pt-br'] ||
      slug.charAt(0).toUpperCase() + slug.slice(1),
  };

  return theme;
};
