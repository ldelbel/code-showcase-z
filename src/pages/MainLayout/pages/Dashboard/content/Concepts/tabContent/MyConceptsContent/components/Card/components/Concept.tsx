import ConceptBox from '@/shared/ConceptBox';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { MyConceptData } from '../../../../../../types';

const Concept = ({ concept }: { concept: MyConceptData }) => {
  return (
    <div className="w-full h-[380px] bg-DarkGray shadow-inset flex flex-col items-center justify-center relative mt-2 mb-40">
      <div>
        <h3
          className={`text-oldgoldlight text-shadow text-base font-semibold text-center absolute -top-3 -translate-x-1/2 left-1/2`}
          style={{ fontFamily: 'Inter' }}
        >
          {AstroLabels[`your_${concept.slug}`][lang]}
        </h3>
      </div>
      <div className="m-5">
        <ConceptBox
          hasBorder
          conceptSlug={concept.slug}
          type="list"
          width={200}
        />
      </div>
    </div>
  );
};

export default Concept;
