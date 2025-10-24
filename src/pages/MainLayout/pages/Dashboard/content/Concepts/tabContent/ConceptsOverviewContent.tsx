import ConceptBox from '@/shared/ConceptBox';
import GradientText from '@/shared/GradientText';
import { lang } from '@/utils/lang';

const translations = {
  'pt-br': {
    treeOf: 'Árvore de',
    concepts: 'Conceitos',
  },
  'en-us': {
    treeOf: 'Tree of',
    concepts: 'Concepts',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const ConceptsOverviewContent = () => {
  return (
    <div className="flex flex-col items-center gap-8 relative mb-24 mt-4">
      {/* Header */}
      <div className="mb-4 flex items-center">
        <h1 className="text-xl text-whitesmoke font-bold text-shadow mr-1">
          {t.treeOf}
        </h1>
        <GradientText
          fontSize="20px"
          lineHeight="24px"
          fontWeight="700"
          text={t.concepts}
        />
      </div>
      <div className="w-[60vw] h-[1px] -mt-10 bg-golden-gradient" />

      {/* Vertical connecting line */}
      <div className="absolute top-[140px] bottom-14 w-1 bg-gray-600 z-0" />

      {/* Concepts Layout */}
      <div className="flex flex-col items-center gap-12 relative">
        {/* Crown */}
        <ConceptBox
          width={120}
          height={150}
          hasBorder
          type="tree"
          conceptSlug="crown"
        />
        {/* Amulet */}
        <ConceptBox
          width={120}
          height={150}
          hasBorder
          type="tree"
          conceptSlug="amulet"
        />

        {/* Scepter and Ring (Horizontal Pair) */}
        <div className="flex gap-24 relative">
          <div className="absolute top-1/2 left-20 right-20 h-1 bg-gray-600 z-0" />
          <ConceptBox
            width={120}
            height={150}
            hasBorder
            type="tree"
            conceptSlug="scepter"
          />

          <ConceptBox
            width={120}
            height={150}
            hasBorder
            type="tree"
            conceptSlug="ring"
          />
        </div>

        {/* Lantern */}
        <ConceptBox
          width={120}
          height={150}
          hasBorder
          type="tree"
          conceptSlug="lantern"
        />

        {/* Orb */}
        <ConceptBox
          width={120}
          height={150}
          hasBorder
          type="tree"
          conceptSlug="orb"
        />
      </div>
    </div>
  );
};

export default ConceptsOverviewContent;
