import { Languages, ProductLabels } from "@zodic/shared/types";

export const productLabels: ProductLabels = {
  'premium-astrology-reports': {
    'pt-br': {
      name: 'Seção Premium do Mapa Astral',
      description: 'Desbloqueie relatórios de posições avançadas, casas e aspectos.',
    },
    'en-us': {
      name: 'Premium Astrology Section',
      description: 'Unlock advanced reports, houses, and aspects.',
    },
  },
  concepts: {
    'pt-br': {
      name: 'Conceitos',
      description:
        'Desbloqueie todos os Conceitos.',
    },
    'en-us': {
      name: 'Concepts',
      description: 'Unlock all Concepts.',
    },
  },
  'cosmic-mirror': {
    'pt-br': {
      name: 'Espelho Cósmico',
      description: 'Contemple-se com os olhos do Universo.',
    },
    'en-us': {
      name: 'Cosmic Mirror',
      description: 'See yourself as the Universe sees you.',
    },
  },
};

export const getProductLabel = (slug: string, lang: Languages) => {
  console.log('getProductLabel -> Slug: ', slug)
  console.log('getProductLabel -> Lang: ', lang)
  const labels = productLabels[slug] || {
    'pt-br': { name: slug, description: '' },
    'en-us': { name: slug, description: '' },
  };
  console.log('getProductLabel -> Labels: ', labels)
  return labels[lang];
};