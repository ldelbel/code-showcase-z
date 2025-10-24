import { Languages } from '@zodic/shared/types';

type ConceptModalTexts = {
  [conceptSlug: string]: Record<
    Languages,
    {
      intro: string;
      question: string;
      cta: string;
    }
  >;
};

export const conceptModalTexts: ConceptModalTexts = {
  crown: {
    'en-us': {
      intro:
        'Your Crown is the essence of your astrological identity, crafted from the energies of the Sun, the Ascendant, and the Moon. Each sign adds its unique influence to the foundation of who you are.',
      question:
        'Are you ready to uncover the core of your personality and see the power of your Crown?',
      cta: "Let's unveil the essence of your Core Personality",
    },
    'pt-br': {
      intro:
        'Sua Coroa é a essência da sua identidade astrológica, formada pelas energias do Sol, do Ascendente e da Lua. Cada signo adiciona uma influência única à base de quem você é.',
      question:
        'Pronto para descobrir o centro da sua personalidade e sentir o poder da sua Coroa?',
      cta: 'Vamos revelar a essência do seu Eu Central',
    },
  },

  scepter: {
    'en-us': {
      intro:
        'Your Scepter reflects how you act, express yourself, and connect with others. It draws strength from Mercury, Mars, and the Descendant, shaping your external drive and communication.',
      question:
        'Do you want to understand your approach to life and how you move through the world?',
      cta: "Let's reveal your Path of Expression and Action",
    },
    'pt-br': {
      intro:
        'Seu Cetro reflete como você age, se expressa e se conecta com os outros. Ele se apoia em Mercúrio, Marte e no Descendente, moldando sua ação externa e comunicação.',
      question:
        'Quer compreender sua abordagem à vida e como você se movimenta no mundo?',
      cta: 'Vamos revelar seu Caminho de Expressão e Ação',
    },
  },

  amulet: {
    'en-us': {
      intro:
        'Your Amulet represents your inner resilience, wisdom, and ability to grow through challenges. It is formed by the forces of Jupiter, Saturn, and Chiron.',
      question:
        'Are you ready to explore your inner strength and the lessons that shape your soul?',
      cta: 'Let’s uncover your Source of Healing and Growth',
    },
    'pt-br': {
      intro:
        'Seu Amuleto representa sua resiliência interior, sabedoria e capacidade de crescer diante dos desafios. Ele é formado pelas forças de Júpiter, Saturno e Quíron.',
      question:
        'Pronto para explorar sua força interior e as lições que moldam sua alma?',
      cta: 'Vamos descobrir sua Fonte de Cura e Crescimento',
    },
  },

  orb: {
    'en-us': {
      intro:
        "Your Orb illuminates the path of your destiny and the purpose you're meant to fulfill. It draws from the Midheaven, North Node, and Part of Fortune, guiding your way forward.",
      question:
        "Do you want to understand where you're going and the legacy you’re here to create?",
      cta: 'Let’s unveil the Light of your Purpose and Path',
    },
    'pt-br': {
      intro:
        'Seu Orbe ilumina o caminho do seu destino e o propósito que você veio realizar. Ele se baseia no Meio do Céu, Nodo Norte e Parte da Fortuna, guiando sua jornada.',
      question: 'Quer entender para onde está indo e o legado que veio deixar?',
      cta: 'Vamos revelar a Luz do seu Propósito e Caminho',
    },
  },

  lantern: {
    'en-us': {
      intro:
        'Your Lantern holds the spark of your inner awakening and spiritual truth. It is formed by the Part of Spirit, the Imum Coeli, and the Antivertex.',
      question:
        'Do you want to connect with your soul’s light and the guidance that lives within?',
      cta: 'Let’s reveal the Flame of your Spiritual Journey',
    },
    'pt-br': {
      intro:
        'Sua Lanterna carrega a centelha do seu despertar interior e da sua verdade espiritual. Ela é formada pela Parte do Espírito, o Fundo do Céu e o Antivértex.',
      question:
        'Deseja se conectar com a luz da sua alma e com a sabedoria que habita dentro de você?',
      cta: 'Vamos revelar a Chama da sua Jornada Espiritual',
    },
  },

  ring: {
    'en-us': {
      intro:
        'Your Ring reveals how you love, connect, and what bonds feel destined. It is formed by the energies of Pars Amoris, the Vertex, and Venus, illuminating your heart’s natural rhythm.',
      question:
        'Are you ready to discover what draws you close and the love stories written in your stars?',
      cta: 'Let’s unveil the Harmony of your Love and Connection',
    },
    'pt-br': {
      intro:
        'Seu Anel revela como você ama, se conecta e quais laços parecem destinados. Ele é formado pelas energias da Pars Amoris, do Vértice e de Vênus, iluminando o ritmo natural do seu coração.',
      question:
        'Pronto para descobrir o que te aproxima dos outros e as histórias de amor escritas nas suas estrelas?',
      cta: 'Vamos revelar a Harmonia do seu Amor e Conexão',
    },
  },
};
