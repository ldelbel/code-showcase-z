import GradientText from '@/shared/GradientText';
import AstroLabels from '@/utils/AstroLabels';
import { getConceptThemes } from '@/utils/conceptThemes';
import { lang } from '@/utils/lang';
import { MyConceptData } from '../../../../../../types';

const CardTitle = ({ concept }: { concept: MyConceptData }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <GradientText
        fontSize="24px"
        lineHeight="29px"
        text={AstroLabels[concept.slug][lang]}
      />
      <span className="text-whitesmoke text-base font-normal">
        {getConceptThemes(concept.slug)[lang]}
      </span>
    </div>
  );
};

export default CardTitle;
