import AstroLabels from './AstroLabels';

type Lang = 'pt-br' | 'en-us';

interface GetShareTextParams {
  archetypeName: string;
  combination: string; // formato: signo1-signo2-signo3
  virtues: string[];
  lang: Lang;
}

function listVirtues(virtues: string[], lang: Lang) {
  const cap = (word: string) =>
    word[0].toUpperCase() + word.slice(1).toLowerCase();
  const v = virtues.map(cap);
  if (v.length === 1) return v[0];
  const sep = lang === 'pt-br' ? ' e ' : ' and ';
  return v.slice(0, -1).join(', ') + sep + v[v.length - 1];
}

export function getShareText({
  archetypeName,
  combination,
  virtues,
  lang,
}: GetShareTextParams): string {
  const [signoSol, signoAsc, signoLua] = combination
    .split('-')
    .map((s) => s.trim());

  const virtuesStr = listVirtues(virtues, lang);

  if (lang === 'pt-br') {
    return (
      `Acabei de desvendar meu Espelho Cósmico no aplicativo Zodic!\n` +
      `Meu arquétipo é ${archetypeName}, inspirado pela combinação:\n` +
      `☉ Sol em ${AstroLabels[signoSol][lang]}\n` +
      `⬆️ Ascendente em ${AstroLabels[signoAsc][lang]}\n` +
      `☽ Lua em ${AstroLabels[signoLua][lang]}\n\n` +
      `Essas energias revelam as virtudes de ${virtuesStr} no meu caminho.\n\n` +
      `Qual arquétipo será o seu?\nDescubra também em:`
    );
  }

  return (
    `I just unveiled my Cosmic Mirror at Zodic!\n` +
    `My archetype is ${archetypeName}, inspired by this combination:\n` +
    `☉ Sun in ${signoSol}\n` +
    `⬆️ Ascendant in ${signoAsc}\n` +
    `☽ Moon in ${signoLua}\n\n` +
    `These energies reveal the virtues of ${virtuesStr} along my path.\n\n` +
    `Which archetype will be yours?\nFind out at:`
  );
}
