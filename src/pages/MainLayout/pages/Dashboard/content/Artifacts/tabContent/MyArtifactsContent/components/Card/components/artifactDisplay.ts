import { Languages } from '@zodic/shared/types';

export const artifactDisplay: Record<
  string,
  Record<Languages, Record<'title' | 'subtitle', string>>
> = {
  'cosmic-mirror': {
    'pt-br': {
      title: 'Espelho Cósmico',
      subtitle: 'Contemple-se com os olhos do Universo.',
    },
    'en-us': {
      title: 'Cosmic Mirror',
      subtitle: 'See yourself as the Universe sees you',
    },
  },
};
