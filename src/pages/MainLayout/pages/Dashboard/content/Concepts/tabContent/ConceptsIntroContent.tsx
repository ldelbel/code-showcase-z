import Box from '@/shared/Box';
import Button from '@/shared/Button';
import ConceptsBanner from '@/shared/ConceptsBanner';
import Title from '@/shared/Title';
import AstroLabels from '@/utils/AstroLabels';
import { getConceptThemes } from '@/utils/conceptThemes';
import { lang } from '@/utils/lang';
import { conceptsData } from '../mock';

const translations = {
  'pt-br': {
    subtitle: 'Conteúdo Exclusivo Zodic',
    introText:
      'Dentro do seu mapa astral reside uma constelação de verdades. São energias distintas que definem sua identidade, influência e propósito. Estes são seus <span class="text-oldgoldlight font-bold">Conceitos</span>: reflexos das forças mais profundas que moldam sua jornada pela vida. Cada conceito revela uma parte essencial da sua história: sua natureza interior, sua expressão externa e seu caminho adiante.',
    explanationText:
      'Cada Conceito está enraizado em uma combinação única de energias planetárias, trabalhando em harmonia para revelar uma faceta distinta da sua alma e jornada de vida.',
    planets: 'Planetas',
    theme: 'Tema',
    seeConcepts: 'VER MEUS CONCEITOS',
  },
  'en-us': {
    subtitle: 'Zodic exclusive content',
    introText:
      'Within your birth chart lies a constellation of truths. They are distinct energies that define your identity, influence, and purpose. These are your <span class="text-oldgoldlight font-bold">Concepts</span>: reflections of the deeper forces that shape your journey through life. Each concept reveals an essential part of your story: your inner nature, your external expression, and your path forward.',
    explanationText:
      "Each Concept is rooted in a unique combination of planetary energies, working together in harmony to reveal a distinct facet of your soul and life's journey.",
    planets: 'Planets',
    theme: 'Theme',
    seeConcepts: 'SEE MY CONCEPTS',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

interface ConceptsIntroContentProps {
  onChangeTab: (tab: string) => void;
}

const ConceptsIntroContent: React.FC<ConceptsIntroContentProps> = ({
  onChangeTab,
}) => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-6 pb-6">
      <Title title={AstroLabels['concepts'][lang]} subtitle={t.subtitle} />
      <ConceptsBanner />
      <Box classNameInner="w-[85vw] p-3 text-center">
        <p
          className="text-rajdhani text-base"
          dangerouslySetInnerHTML={{ __html: t.introText }}
        />
      </Box>

      <div className="w-[80vw] mx-auto text-center p-1 mt-2 text-whitesmoke text-sm">
        <p>{t.explanationText}</p>
      </div>

      <div className="flex flex-col w-[80vw] mx-auto">
        {conceptsData.map((concept, index) => (
          <div
            key={concept.id}
            className={`bg-golden-gradient pt-[1px] px-[1px] ${
              index === 0 ? 'rounded-t-md' : ''
            } ${
              index === conceptsData.length - 1 ? 'rounded-b-md pb-[1px]' : ''
            }`}
          >
            <div
              className={`bg-DarkGray ${index === 0 ? 'rounded-t-md' : ''} ${
                index === conceptsData.length - 1 ? 'rounded-b-md' : ''
              } flex flex-col`}
            >
              <div className="pl-1 flex items-center justify-center bg-golden-gradient">
                <h3 className="font-bold font-rajdhani text-base leading-4 text-center carved-text">
                  {AstroLabels[concept.id][lang]}
                </h3>
              </div>
              <div className="bg-golden-gradient h-[1px] w-full" />
              <div className="p-1.5">
                <div className="flex">
                  <div className="w-[27%]">
                    <span className="font-semibold text-oldgoldlight text-sm">
                      {t.planets}:
                    </span>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <p
                      className="text-whitesmoke font-rajdhani font-medium"
                      style={{ fontSize: '14px' }}
                    >
                      {concept.planets
                        .map((p) => AstroLabels[p][lang])
                        .join(', ')}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[27%]">
                    <span className="font-semibold text-oldgoldlight text-sm">
                      {t.theme}:
                    </span>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <p className="text-sm text-whitesmoke">
                      {getConceptThemes(concept.id)[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 mb-20">
        <Button
          variant="free"
          base="golden"
          text={t.seeConcepts}
          onClick={() => {
            onChangeTab('my_concepts');
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });

              const mainContainer =
                document.querySelector('main') ||
                document.querySelector('[data-scroll-container]') ||
                document.querySelector('.overflow-auto') ||
                document.querySelector('.overflow-y-auto');
              if (mainContainer) {
                mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
              }

              const scrollableElements = document.querySelectorAll(
                '[style*="overflow"], .overflow-auto, .overflow-y-auto, .overflow-scroll'
              );
              scrollableElements.forEach((element) => {
                if (element instanceof HTMLElement) {
                  element.scrollTo({ top: 0, behavior: 'smooth' });
                }
              });
            }, 50);
          }}
        />
      </div>
    </div>
  );
};

export default ConceptsIntroContent;
