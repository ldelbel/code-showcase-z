import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { MyConceptData } from '../../../../../types';
import ArtifactFrame from './components/ArtifactFrame';
import Title from './components/Title';

const translations = {
  'en-us': 'Coming Soon',
  'pt-br': 'Em Breve',
};

const t = translations[lang];

interface CardProps {
  concept: MyConceptData;
}

const Card = ({ concept }: CardProps) => {
  const artifacts = [
    {
      concept: 'crown',
      artifactName: 'cosmic-mirror',
    },
  ];

  const hasMatchingArtifact = artifacts.some(
    (artifact) => artifact.concept === concept.slug
  );

  return (
    <div
      className={`flex flex-col items-center gap-6 w-full ${
        concept.slug.length > 0 ? '' : 'mb-20 min-h-[calc(100vh-200px)]'
      }`}
    >
      <Title conceptName={AstroLabels[concept.slug as string][lang]} />

      {concept.slug.length > 0 && (
        <div
          className="flex flex-col gap-12 justify-center mb-20 py-10 w-full h-full bg-CustomBlack mx-auto"
          style={{
            boxShadow: `
              0px -3px 4px 0px #00000080 inset,
              0px 3px 5px 1px #00000040 inset
            `,
          }}
        >
          {hasMatchingArtifact ? (
            artifacts.map((artifact) => (
              <ArtifactFrame
                key={artifact.artifactName}
                artifactInfo={artifact}
              />
            ))
          ) : (
            <p className="text-center text-whitesmoke text-lg font-rajdhani">
              {t}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
