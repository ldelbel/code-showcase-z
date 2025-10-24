import { Languages } from "@zodic/shared/types";

const signNames: Record<Languages, Record<string, string>> = {
  'en-us': {
    aries: 'Aries',
    taurus: 'Taurus',
    gemini: 'Gemini',
    cancer: 'Cancer',
    leo: 'Leo',
    virgo: 'Virgo',
    libra: 'Libra',
    scorpio: 'Scorpio',
    sagittarius: 'Sagittarius',
    capricorn: 'Capricorn',
    aquarius: 'Aquarius',
    pisces: 'Pisces',
  },
  'pt-br': {
    aries: 'Áries',
    taurus: 'Touro',
    gemini: 'Gêmeos',
    cancer: 'Câncer',
    leo: 'Leão',
    virgo: 'Virgem',
    libra: 'Libra',
    scorpio: 'Escorpião',
    sagittarius: 'Sagitário',
    capricorn: 'Capricórnio',
    aquarius: 'Aquário',
    pisces: 'Peixes',
  },
};

const getFormattedSignName = (language: Languages, sign: string) => {
  return signNames[language]?.[sign] || sign;
};

export default getFormattedSignName;
