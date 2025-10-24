import GradientText from '@/shared/GradientText';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { Concept as ConceptType } from '@zodic/shared/types';
import { MyConceptData } from '../../../../../types';
import { conceptDescriptions } from '../../content';
import CardTitle from './components/CardTitle';
import Concept from './components/Concept';
import SignComposition from './components/SignComposition';
import SignHeader from './components/SignHeader';

const conceptCompositionText = (conceptSlug: ConceptType) => ({
  'en-us': `Your ${AstroLabels[conceptSlug]['en-us']} Composition:`,
  'pt-br': `Sua Composição para ${AstroLabels[conceptSlug]['pt-br']}:`,
});

const Card = ({ concept }: { concept: MyConceptData }) => {
  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="flex flex-col items-center w-full">
        <CardTitle concept={concept} />

        <div className="mt-4">
          <SignHeader conceptSlug={concept.slug} />
        </div>

        <div className="mt-6 w-[80vw] max-w-[600px] h-[200px] flex items-center">
          <p
            className="text-whitesmoke text-sm font-normal text-center"
            style={{ fontFamily: 'Inter' }}
          >
            {conceptDescriptions[concept.slug][lang]}
          </p>
        </div>

        <div className="mt-2 mb-3 flex flex-col items-center justify-center gap-1 pb-20">
          <GradientText
            fontSize="16px"
            fontWeight="600"
            text={conceptCompositionText(concept.slug)[lang]}
          />
          <SignComposition conceptSlug={concept.slug} />
        </div>
      </div>
      <Concept concept={concept} />
    </div>
  );
};

export default Card;
