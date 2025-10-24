import Banner from '@/shared/Banner';
import Box from '@/shared/Box';
import Button from '@/shared/Button';
import Title from '@/shared/Title';
import { lang } from '@/utils/lang';
import { artifactsData } from '../mock';

const translations = {
  'pt-br': {
    title: 'Artefatos',
    subtitle: 'Conteúdo Exclusivo Zodic',
    conceptsReveal: 'Conceitos revelam as forças que te moldam...',
    artifactsBring: 'Artefatos as trazem para o seu mundo.',
    introText1:
      'Cada <span class="text-customYellow2">Artefato</span> é um reflexo vivo do seu design celestial, forjado a partir das energias dos seus Conceitos e tecido no tecido da sua vida. Eles se manifestam como símbolos, visões e talismãs pessoais, fundamentando a sabedoria cósmica em algo que você pode ver, sentir e experimentar.',
    introText2:
      'Mais do que representações, <span class="text-customYellow2">Artefatos</span> são companheiros na sua jornada. Eles ecoam seus pontos fortes, iluminam seus desafios e guiam você em direção a uma descoberta mais profunda de si mesmo. Seja como um espelho da sua essência, um farol do seu caminho ou um lembrete do que te chama para frente, cada um mantém uma presença única ligada a você - conectando a vastidão das estrelas com a realidade da sua vida cotidiana.',
    explanationText:
      'Cada Artefato é uma manifestação de um único Conceito, moldado por suas energias e trazido à vida como uma expressão tangível de sua sabedoria. Ele transforma insight em experiência, permitindo que você interaja com a essência do seu Conceito em uma forma que ressoa com sua jornada.',
    artifactsByConcept: 'Artefatos por Conceito:',
    comingSoon: 'Em Breve',
    seeMyArtifacts: 'VER MEUS ARTEFATOS',
  },
  'en-us': {
    title: 'Artifacts',
    subtitle: 'Zodic exclusive content',
    conceptsReveal: 'Concepts reveal the forces that shape you...',
    artifactsBring: 'Artifacts bring them into your world.',
    introText1:
      'Each <span class="text-customYellow2">Artifact</span> is a living reflection of your celestial design, forged from the energies of your Concepts and woven into the fabric of your life. They manifest as symbols, visions, and personal talismans, grounding cosmic wisdom into something you can see, feel, and experience.',
    introText2:
      'More than representations, <span class="text-customYellow2">Artifacts</span> are companions on your journey. They echo your strengths, illuminate your challenges, and guide you toward deeper self-discovery. Whether as a mirror of your essence, a beacon of your path, or a reminder of what calls you forward, each one holds a presence uniquely tied to you—bridging the vastness of the stars with the reality of your everyday life.',
    explanationText:
      'Each Artifact is a manifestation of a single Concept, shaped by its energies and brought to life as a tangible expression of its wisdom. It transforms insight into experience, allowing you to interact with the essence of your Concept in a form that resonates with your journey.',
    artifactsByConcept: 'Artifacts by Concept:',
    comingSoon: 'Coming Soon',
    seeMyArtifacts: 'SEE MY ARTIFACTS',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

interface ArtifactsIntroContentProps {
  onChangeTab: (tab: string) => void;
}

const ArtifactsIntroContent: React.FC<ArtifactsIntroContentProps> = ({
  onChangeTab,
}) => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-6 pb-6">
      <Title title={t.title} subtitle={t.subtitle} />
      <Banner />
      <p className="text-oldgolddark text-center text-sm font-medium">
        {t.conceptsReveal}
      </p>
      <span className="text-customYellow2 text-center text-base font-extrabold">
        {t.artifactsBring}
      </span>
      <Box classNameInner="w-[80vw] p-3 space-y-4 text-center">
        <p dangerouslySetInnerHTML={{ __html: t.introText1 }} />
        <p dangerouslySetInnerHTML={{ __html: t.introText2 }} />
      </Box>
      <div className="w-[80vw]">
        <p
          className="text-whitesmoke text-center text-sm font-normal"
          style={{ fontFamily: 'Roboto' }}
        >
          {t.explanationText}
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-oldgoldlight text-center text-sm font-bold">
          {t.artifactsByConcept}
        </h1>
        <div className="flex flex-col w-[70vw] mx-auto">
          {artifactsData.map((artifact, index) => (
            <div
              key={artifact.id}
              className={`bg-golden-gradient pt-[1px] px-[1px] ${
                index === 0 ? 'rounded-t-md' : ''
              } ${
                index === artifactsData.length - 1
                  ? 'rounded-b-md pb-[1px]'
                  : ''
              }`}
            >
              <div
                className={`bg-DarkGray ${index === 0 ? 'rounded-t-md' : ''} ${
                  index === artifactsData.length - 1 ? 'rounded-b-md' : ''
                } flex flex-col`}
              >
                <div
                  className={`pl-1 flex items-center justify-center bg-golden-gradient ${
                    index === 0 ? 'rounded-t-sm' : ''
                  }`}
                >
                  <h3 className="font-black text-sm text-center carved-text">
                    {artifact.name}
                  </h3>
                </div>
                <div className="p-4 flex flex-col gap-4">
                  {artifact.artifact.length > 0 ? (
                    artifact.artifact.map((item, index) => (
                      <div
                        key={index}
                        className="w-48 h-11 input-field flex flex-col"
                      >
                        <div className="flex items-center justify-center">
                          <h3 className="font-medium text-whitesmoke text-sm">
                            {item.name}
                          </h3>
                        </div>
                        <div className="flex items-center justify-center w-full">
                          <p
                            className="text-oldgoldlight italic"
                            style={{ fontSize: '8px' }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center justify-center w-full">
                      <p className="text-customGray text-xs font-semibold font-rajdhani">
                        {t.comingSoon}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 mb-20">
          <Button
            variant="main"
            base="golden"
            text={t.seeMyArtifacts}
            onClick={() => {
              onChangeTab('my_artifacts');
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
    </div>
  );
};

export default ArtifactsIntroContent;
