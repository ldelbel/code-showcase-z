import AstroLabels from './AstroLabels';

interface ConceptThemes {
  'en-us': string;
  'pt-br': string;
}

const conceptThemes: { [key: string]: ConceptThemes } = {
  crown: { 'en-us': 'Core Identity', 'pt-br': 'Identidade Central' },
  amulet: {
    'en-us': 'Growth and Responsibility',
    'pt-br': 'Crescimento e Responsabilidade',
  },
  scepter: {
    'en-us': 'External Influence and Action',
    'pt-br': 'Influência Externa e Ação',
  },
  ring: { 'en-us': 'Love and Bonds', 'pt-br': 'Amor e Laços' },
  lantern: { 'en-us': 'Spiritual Transformation', 'pt-br': 'Transformação Espiritual' },
  orb: {
    'en-us': 'Destiny and Purpose',
    'pt-br': 'Destino e Propósito',
  },
};


export const getConceptThemes = (slug: string): ConceptThemes => {
  const theme = conceptThemes[slug] || {
    'en-us':
      AstroLabels[slug]?.['en-us'] ||
      slug.charAt(0).toUpperCase() + slug.slice(1),
    'pt-br':
      AstroLabels[slug]?.['pt-br'] ||
      slug.charAt(0).toUpperCase() + slug.slice(1),
  };

  return theme;
};
