import { Concept } from '@zodic/shared/types';
import { PlacementSlug } from '@zodic/shared/types/scopes/legacy';
import AstroLabels from './AstroLabels';

type Lang = 'pt-br' | 'en-us';

interface GetConceptShareTextParams {
  conceptSlug: Concept;
  conceptName: string;
  placements: [PlacementSlug, string][];
  lang: Lang;
}

const ConceptThemes: Record<Concept, { 'pt-br': string; 'en-us': string }> = {
  crown: { 'pt-br': 'Identidade Central', 'en-us': 'Core Identity' },
  scepter: {
    'pt-br': 'Influência Externa e Ação',
    'en-us': 'External Influence and Action',
  },
  ring: { 'pt-br': 'Amor e Laços', 'en-us': 'Love and Bonds' },
  amulet: {
    'pt-br': 'Crescimento e Responsabilidade',
    'en-us': 'Growth and Responsibility',
  },
  lantern: {
    'pt-br': 'Transformação Espiritual',
    'en-us': 'Spiritual Transformation',
  },
  orb: { 'pt-br': 'Destino e Propósito', 'en-us': 'Destiny and Purpose' },
};

function formatPlacementList(
  placements: [string, string][],
  lang: Lang
): string {
  const parts = placements.map(([placement, sign]) => {
    const placementLabel = AstroLabels[placement][lang];
    const signLabel = AstroLabels[sign][lang];
    return `${placementLabel} ${lang === 'pt-br' ? 'em' : 'in'} ${signLabel}`;
  });
  return parts.join(', ');
}

export function getConceptShareText({
  conceptSlug,
  conceptName,
  placements,
  lang,
}: GetConceptShareTextParams): string {
  const conceptLabel = AstroLabels[`my_${conceptSlug}`][lang];
  const theme = ConceptThemes[conceptSlug][lang];
  const placementInfo = formatPlacementList(placements, lang);

  const intro = {
    'pt-br': `Acabei de revelar ${conceptLabel} no aplicativo Zodic!`,
    'en-us': `I just revealed ${conceptLabel} at Zodic!`,
  }[lang];

  const context = {
    'pt-br': `Este Conceito foi formado a partir do meu mapa astral, nas posições de ${placementInfo}.`,
    'en-us': `This Concept was formed from my birth chart, based on the placements of ${placementInfo}.`,
  }[lang];

  const closing = {
    'pt-br': `Descubra o seu também em:`,
    'en-us': `Discover yours at:`,
  }[lang];

  const conceptMessages: Record<Concept, string> = {
    crown:
      lang === 'pt-br'
        ? `${intro}\n\nEla se chama "${conceptName}" e revela o tema ${theme} na minha vida!\n\n${context}\n\n${closing}`
        : `${intro}\n\nIts name is "${conceptName}" and it reveals the theme ${theme} in my life!\n\n${context}\n\n${closing}`,
    scepter:
      lang === 'pt-br'
        ? `${intro}\n\nChamo meu Cetro de "${conceptName}". Ele expressa minha forma de agir no mundo!\n\n${context}\n\n${closing}`
        : `${intro}\n\nI call my Scepter "${conceptName}". It reflects how I act in the world!\n\n${context}\n\n${closing}`,
    ring:
      lang === 'pt-br'
        ? `${intro}\n\nMeu Anel se chama "${conceptName}" e traduz como expresso o amor e conexão!\n\n${context}\n\n${closing}`
        : `${intro}\n\nMy Ring is called "${conceptName}", revealing how I love and connect!\n\n${context}\n\n${closing}`,
    amulet:
      lang === 'pt-br'
        ? `${intro}\n\nMeu Amuleto recebeu o nome de "${conceptName}". Ele guia minha jornada de crescimento!\n\n${context}\n\n${closing}`
        : `${intro}\n\nMy Amulet is named "${conceptName}". It guides my path of growth!\n\n${context}\n\n${closing}`,
    lantern:
      lang === 'pt-br'
        ? `${intro}\n\nMinha Candeia se acendeu com o nome "${conceptName}", iluminando minha transformação interior!\n\n${context}\n\n${closing}`
        : `${intro}\n\nMy Lantern is called "${conceptName}", lighting the way to my inner transformation!\n\n${context}\n\n${closing}`,
    orb:
      lang === 'pt-br'
        ? `${intro}\n\nO nome do meu Orbe é "${conceptName}", revelando meu chamado mais profundo!\n\n${context}\n\n${closing}`
        : `${intro}\n\nMy Orb is named "${conceptName}", revealing my deepest calling!\n\n${context}\n\n${closing}`,
  };

  return conceptMessages[conceptSlug];
}
