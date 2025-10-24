import { lang } from '@/utils/lang';

const guidelineTranslations = {
  'pt-br': {
    CLEAR_AND_WELL_LIT_FACE: {
      title: 'Rosto Claro e Bem Iluminado',
      description:
        'Certifique-se de que sua foto esteja bem iluminada com luz natural ou artificial equilibrada. Evite sombras fortes ou áreas superexpostas.',
    },
    STRAIGHT_ON_ANGLE: {
      title: 'Ângulo Frontal',
      description:
        'Use uma foto em que você esteja enfrentando a câmera diretamente. Evite perfis laterais ou ângulos inclinados.',
    },
    NEUTRAL_EXPRESSION: {
      title: 'Expressão Neutra',
      description:
        'Uma expressão relaxada e neutra funciona melhor. Evite sorrisos exagerados, franzir a testa ou outras expressões faciais extremas.',
    },
    HIGH_RESOLUTION: {
      title: 'Alta Resolução',
      description:
        'Faça upload de uma imagem de alta qualidade para capturar detalhes finos para uma melhor representação.',
    },
    AVOID_ACCESSORIES: {
      title: 'Evite Acessórios',
      description:
        'Remova óculos, chapéus ou qualquer coisa que cubra seu rosto para garantir uma renderização precisa. Brincos simples ou acessórios sutis são aceitáveis.',
    },
    NO_FILTERS: {
      title: 'Sem Filtros ou Efeitos',
      description:
        'Evite usar fotos com filtros, edições pesadas ou ajustes extremos de cor.',
    },
    SINGLE_SUBJECT: {
      title: 'Sujeito Único',
      description:
        'A foto deve incluir apenas você. Evite fotos em grupo ou imagens com outros rostos no quadro.',
    },
    PLAIN_BACKGROUND: {
      title: 'Fundo Simples',
      description:
        'Um fundo neutro ou simples funciona melhor para manter o foco em suas características.',
    },
    RECENT_PHOTO: {
      title: 'Foto Recente',
      description:
        'Escolha uma foto que represente sua aparência atual para tornar o personagem o mais preciso possível.',
    },
    PROPER_FRAMING: {
      title: 'Enquadramento Adequado',
      description:
        'Certifique-se de que sua cabeça e ombros estejam totalmente visíveis, sem partes cortadas.',
    },
  },
  en: {
    CLEAR_AND_WELL_LIT_FACE: {
      title: 'Clear and Well-Lit Face',
      description:
        'Ensure your photo is well-lit with natural or balanced artificial lighting. Avoid harsh shadows or overexposed areas.',
    },
    STRAIGHT_ON_ANGLE: {
      title: 'Straight-On Angle',
      description:
        'Use a photo where you are facing the camera directly. Avoid side profiles or tilted angles.',
    },
    NEUTRAL_EXPRESSION: {
      title: 'Neutral Expression',
      description:
        'A relaxed, neutral expression works best. Avoid exaggerated smiles, frowns, or other extreme facial expressions.',
    },
    HIGH_RESOLUTION: {
      title: 'High Resolution',
      description:
        'Upload a high-quality image to capture fine details for a better representation.',
    },
    AVOID_ACCESSORIES: {
      title: 'Avoid Accessories',
      description:
        'Remove glasses, hats, or anything covering your face to ensure accurate rendering. Simple earrings or subtle accessories are fine.',
    },
    NO_FILTERS: {
      title: 'No Filters or Effects',
      description:
        'Avoid using photos with filters, heavy edits, or extreme color adjustments.',
    },
    SINGLE_SUBJECT: {
      title: 'Single Subject',
      description:
        'The photo should include only you. Avoid group photos or images with other faces in the frame.',
    },
    PLAIN_BACKGROUND: {
      title: 'Plain Background',
      description:
        'A neutral or plain background works best to keep the focus on your features.',
    },
    RECENT_PHOTO: {
      title: 'Recent Photo',
      description:
        'Choose a photo that represents your current appearance to make the character as accurate as possible.',
    },
    PROPER_FRAMING: {
      title: 'Proper Framing',
      description:
        'Ensure your full head and shoulders are visible, with no parts cropped out.',
    },
  },
};

const t = guidelineTranslations[lang === 'pt-br' ? 'pt-br' : 'en'];

const GuidelineItem = {
  CLEAR_AND_WELL_LIT_FACE: {
    title: t.CLEAR_AND_WELL_LIT_FACE.title,
    description: t.CLEAR_AND_WELL_LIT_FACE.description,
    wrongImage: '/guidelines/image2.png',
    rightImage: '/guidelines/image1.png',
  },
  STRAIGHT_ON_ANGLE: {
    title: t.STRAIGHT_ON_ANGLE.title,
    description: t.STRAIGHT_ON_ANGLE.description,
    wrongImage: '/guidelines/image3.png',
    rightImage: '/guidelines/image1.png',
  },
  NEUTRAL_EXPRESSION: {
    title: t.NEUTRAL_EXPRESSION.title,
    description: t.NEUTRAL_EXPRESSION.description,
    wrongImage: '/guidelines/image4.png',
    rightImage: '/guidelines/image1.png',
  },
  HIGH_RESOLUTION: {
    title: t.HIGH_RESOLUTION.title,
    description: t.HIGH_RESOLUTION.description,
    wrongImage: '/guidelines/image5.png',
    rightImage: '/guidelines/image1.png',
  },
  AVOID_ACCESSORIES: {
    title: t.AVOID_ACCESSORIES.title,
    description: t.AVOID_ACCESSORIES.description,
    wrongImage: '/guidelines/image7.png',
    rightImage: '/guidelines/image6.png',
  },
  NO_FILTERS: {
    title: t.NO_FILTERS.title,
    description: t.NO_FILTERS.description,
    wrongImage: '/guidelines/image8.png',
    rightImage: '/guidelines/image6.png',
  },
  SINGLE_SUBJECT: {
    title: t.SINGLE_SUBJECT.title,
    description: t.SINGLE_SUBJECT.description,
    wrongImage: '/guidelines/image9.png',
    rightImage: '/guidelines/image6.png',
  },
  PLAIN_BACKGROUND: {
    title: t.PLAIN_BACKGROUND.title,
    description: t.PLAIN_BACKGROUND.description,
    wrongImage: '/guidelines/image10.png',
    rightImage: '/guidelines/image6.png',
  },
  RECENT_PHOTO: {
    title: t.RECENT_PHOTO.title,
    description: t.RECENT_PHOTO.description,
    wrongImage: '/guidelines/image11.png',
    rightImage: '/guidelines/image6.png',
  },
  PROPER_FRAMING: {
    title: t.PROPER_FRAMING.title,
    description: t.PROPER_FRAMING.description,
    wrongImage: '/guidelines/image12.png',
    rightImage: '/guidelines/image6.png',
  },
} as const;

export default GuidelineItem;
