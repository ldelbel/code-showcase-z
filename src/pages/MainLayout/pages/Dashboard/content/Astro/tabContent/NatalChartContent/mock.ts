import { PlacementObject } from "@zodic/shared/types";

export const testDescription =
  'Os Modos na astrologia—Cardinal, Fixo e Mutável—descrevem as principais formas pelas quais os signos do zodíaco expressam energia e lidam com a mudança. Os signos Cardinais (Áries, Câncer, Libra, Capricórnio) são iniciadores, impulsionados a começar novos projetos e tomar ação. Eles são dinâmicos e orientados para a liderança, frequentemente buscando progresso e inovação. Os signos Fixos (Touro, Leão, Escorpião, Aquário) são estabilizadores, focados em manter e sustentar o que foi estabelecido. Eles são determinados, persistentes e resistentes à mudança, destacando-se em consistência e resistência. Os signos Mutáveis (Gêmeos, Virgem, Sagitário, Peixes) são adaptadores, flexíveis e versáteis, capazes de se ajustar a circunstâncias variáveis. Eles prosperam em transições e são habilidosos em trazer ciclos ao fim. Os Modos oferecem insights sobre como os indivíduos lidam com desafios, gerenciam mudanças e interagem com o mundo. Compreender essas qualidades ajuda a identificar forças, navegar pelas fases da vida e promover equilíbrio nas dinâmicas pessoais e coletivas.';

export const testReport = JSON.stringify({
  'Overview of Sun in Virgo': [
    {
      type: 'p',
      content:
        'The Sun represents the core of your identity, your ego, and your life purpose. When the Sun is placed in Virgo, it emphasizes qualities of practicality, precision, and service. Virgo is an earth sign ruled by Mercury, which brings a focus on intellect, analysis, and attention to detail. Individuals with this placement are often meticulous, hardworking, and dedicated to self-improvement.',
    },
  ],
  'Personality Traits': [
    {
      type: 'p',
      content:
        'People with the Sun in Virgo are known for their analytical minds and strong sense of duty. They are naturally inclined to seek perfection in everything they do, which can sometimes lead to self-criticism or a tendency to overthink. However, their attention to detail and organizational skills make them highly efficient and reliable. They are often humble and prefer to work behind the scenes rather than seeking the spotlight.',
    },
  ],
  Strengths: [
    {
      type: 'bullet-point',
      title: 'Detail-Oriented:',
      content:
        'Virgo Suns excel at noticing and correcting even the smallest imperfections.',
    },
    {
      type: 'bullet-point',
      title: 'Practical and Grounded:',
      content:
        'They have a realistic approach to life and are skilled at problem-solving.',
    },
    {
      type: 'bullet-point',
      title: 'Helpful and Service-Oriented:',
      content:
        'They derive satisfaction from assisting others and contributing to a greater cause.',
    },
    {
      type: 'bullet-point',
      title: 'Reliable:',
      content:
        'Their dedication and work ethic make them dependable in both personal and professional relationships.',
    },
  ],
  Challenges: [
    {
      type: 'bullet-point',
      title: 'Perfectionism:',
      content:
        'The desire for perfection can lead to frustration or burnout if expectations are too high.',
    },
    {
      type: 'bullet-point',
      title: 'Overthinking:',
      content:
        'Their analytical nature can sometimes cause them to overanalyze situations or second-guess themselves.',
    },
    {
      type: 'bullet-point',
      title: 'Self-Criticism:',
      content:
        'They may struggle with being overly critical of themselves and others.',
    },
    {
      type: 'bullet-point',
      title: 'Difficulty Relaxing:',
      content:
        'Their focus on productivity can make it hard for them to unwind and enjoy leisure time.',
    },
  ],
  'Relationship Dynamics': [
    {
      type: 'p',
      content:
        'In relationships, Sun in Virgo individuals are loyal, supportive, and attentive partners. They express their love through acts of service and practical gestures rather than grand romantic displays. However, their critical nature can sometimes create tension if they expect the same level of perfection from their partners. They thrive in relationships where they feel valued and appreciated for their efforts.',
    },
  ],
  'Career and Life Purpose': [
    {
      type: 'p',
      content:
        'Virgo Suns are naturally drawn to careers that allow them to utilize their organizational skills and attention to detail. Fields such as healthcare, education, administration, and editing are well-suited to their talents. Their life purpose often revolves around making a tangible contribution to the world, whether through their work or by helping others in meaningful ways.',
    },
  ],
  'Tips for Growth': [
    {
      type: 'bullet-point',
      title: 'Embrace Imperfection:',
      content:
        'Learn to accept that perfection is unattainable and that mistakes are part of growth.',
    },
    {
      type: 'bullet-point',
      title: 'Practice Self-Compassion:',
      content:
        'Be kinder to yourself and recognize your own worth beyond your achievements.',
    },
    {
      type: 'bullet-point',
      title: 'Balance Work and Play:',
      content: 'Make time for relaxation and hobbies to avoid burnout.',
    },
    {
      type: 'bullet-point',
      title: 'Communicate Needs:',
      content:
        'Express your feelings and needs openly in relationships to foster deeper connections.',
    },
  ],
});

export const mockApiResponse: PlacementObject[] = [
  { name: 'sun', sign: 'leo', house: 11, type: 'planet' },
  { name: 'moon', sign: 'cancer', house: 8, type: 'planet' },
  { name: 'mercury', sign: 'gemini', house: 3, type: 'planet' },
  { name: 'venus', sign: 'taurus', house: 2, type: 'planet' },
  { name: 'mars', sign: 'aries', house: 1, type: 'planet' },
  { name: 'jupiter', sign: 'sagittarius', house: 9, type: 'planet' },
  { name: 'saturn', sign: 'capricorn', house: 10, type: 'planet' },
  { name: 'neptune', sign: 'pisces', house: 4, type: 'planet' },
  { name: 'uranus', sign: 'aquarius', house: 3, type: 'planet' },
  { name: 'pluto', sign: 'scorpio', house: 8, type: 'planet' },
  { name: 'ascendant', sign: 'libra', house: 1, type: 'key_point' },
  { name: 'descendant', sign: 'libra', house: 7, type: 'key_point' },
  { name: 'midheaven', sign: 'libra', house: 10, type: 'key_point' },
  { name: 'imum_coeli', sign: 'libra', house: 4, type: 'key_point' },
  { name: 'north_node', sign: 'libra', house: 5, type: 'karmic_point' },
  { name: 'south_node', sign: 'libra', house: 6, type: 'karmic_point' },
  { name: 'chiron', sign: 'libra', house: 5, type: 'karmic_point' },
  { name: 'lilith', sign: 'libra', house: 6, type: 'karmic_point' },
  { name: 'vertex', sign: 'libra', house: 8, type: 'karmic_point' },
  { name: 'antivertex', sign: 'libra', house: 11, type: 'karmic_point' },
  { name: 'pars_fortuna', sign: 'libra', house: 12, type: 'arabic_part' },
  { name: 'pars_spiritus', sign: 'libra', house: 12, type: 'arabic_part' },
  { name: 'pars_amoris', sign: 'libra', house: 12, type: 'arabic_part' },
  { name: 'pars_victoria', sign: 'libra', house: 12, type: 'arabic_part' },
  { name: 'pars_fortitudo', sign: 'libra', house: 12, type: 'arabic_part' },
  { name: 'pars_necessitatis', sign: 'libra', house: 12, type: 'arabic_part' },
];