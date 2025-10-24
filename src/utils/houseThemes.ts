import AstroLabels from './AstroLabels';

interface HouseTheme {
  'en-us': string;
  'pt-br': string;
}

const houseThemes: { [key: number]: HouseTheme } = {
  1: { 'en-us': 'Self and Identity', 'pt-br': 'Eu e Identidade' },
  2: { 'en-us': 'Values and Possessions', 'pt-br': 'Valores e Posses' },
  3: {
    'en-us': 'Communication and Learning',
    'pt-br': 'Comunicação e Aprendizado',
  },
  4: { 'en-us': 'Home and Family', 'pt-br': 'Lar e Família' },
  5: {
    'en-us': 'Creativity and Romance',
    'pt-br': 'Criatividade e Romance',
  },
  6: { 'en-us': 'Work and Health', 'pt-br': 'Trabalho e Saúde' },
  7: {
    'en-us': 'Partnerships and Relationships',
    'pt-br': 'Parcerias e Relacionamentos',
  },
  8: {
    'en-us': 'Transformation and Intimacy',
    'pt-br': 'Transformação e Intimidade',
  },
  9: { 'en-us': 'Philosophy and Travel', 'pt-br': 'Filosofia e Viagens' },
  10: {
    'en-us': 'Career and Public Image',
    'pt-br': 'Carreira e Imagem Pública',
  },
  11: {
    'en-us': 'Community and Aspirations',
    'pt-br': 'Comunidade e Aspirações',
  },
  12: {
    'en-us': 'Spirituality and Subconscious',
    'pt-br': 'Espiritualidade e Subconsciente',
  },
};

export const getHouseTheme = (house: number | string): HouseTheme => {
  const houseNumber = typeof house === 'string' ? parseInt(house) : house;
  const slug = `house_${houseNumber}`;

  const theme = houseThemes[houseNumber] || {
    'en-us':
      AstroLabels[slug]?.['en-us'] ||
      slug.charAt(0).toUpperCase() + slug.slice(1),
    'pt-br':
      AstroLabels[slug]?.['pt-br'] ||
      slug.charAt(0).toUpperCase() + slug.slice(1),
  };

  return theme;
};

export default houseThemes;
