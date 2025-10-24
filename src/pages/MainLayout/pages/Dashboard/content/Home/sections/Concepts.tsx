import ConceptBox from '@/shared/ConceptBox';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { Concept } from '@zodic/shared/types';
import { useState } from 'react';
import HomeSection from '../components/HomeSection';
import ConceptsIcon from '../icons/ConceptsIcon';

interface ConceptsSectionProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const ConceptsSection = ({ setActiveSection }: ConceptsSectionProps) => {
  const [generatedConcepts] = useState<{
    [key: number]: boolean;
  }>({});

  const concepts = [
    {
      name: 'crown',
      concept: 'The Crown',
      price: 'grátis',
      limited: true,
      image: '/artifacts/cosmic-mirror.png',
    },
    {
      name: 'amulet',
      concept: 'The Scepter',
      price: 'grátis',
      limited: true,
      image: '/artifacts/soul-mask.png',
    },
    {
      name: 'scepter',
      concept: 'The Crown',
      price: 'grátis',
      limited: true,
      image: '/artifacts/soul-mask.png',
    },
    {
      name: 'ring',
      concept: 'The Crown',
      price: 'grátis',
      limited: true,
      image: '/artifacts/soul-mask.png',
    },
    {
      name: 'lantern',
      concept: 'The Crown',
      price: 'grátis',
      limited: true,
      image: '/artifacts/soul-mask.png',
    },
    {
      name: 'orb',
      concept: 'The Crown',
      price: 'grátis',
      limited: true,
      image: '/artifacts/soul-mask.png',
    },
  ];

  const itemsPerView = 2;
  const totalPages = Math.ceil(concepts.length / itemsPerView);

  return (
    <HomeSection
      icon={<ConceptsIcon />}
      title={AstroLabels['concepts'][lang]}
      link="/concepts"
      isCarousel
      total={totalPages}
      setActiveSection={setActiveSection}
      section="concepts"
    >
      {concepts.map((concept, index) => {
        return (
          <div
            key={index}
            className={`relative pb-3 px-2.5 flex flex-col items-center gap-1 ${
              generatedConcepts[index] ? '' : 'pt-5'
            }`}
          >
            <ConceptBox conceptSlug={concept.name as Concept} />
          </div>
        );
      })}
    </HomeSection>
  );
};

export default ConceptsSection;
