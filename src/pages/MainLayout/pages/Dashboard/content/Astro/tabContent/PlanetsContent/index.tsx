import Title from '@/shared/Title';
import { lang } from '@/utils/lang';
import { useState } from 'react';
import { PlanetsData } from '../../../types';
import PlanetCard from './components/PlanetCard';

interface PlanetsContentProps {
  planets: PlanetsData;
}

const PlanetsContent = ({ planets }: PlanetsContentProps) => {
  const [expandedPlanet, setExpandedPlanet] = useState<string | null>(null);

  const handleExpand = (planetId: string) => {
    setExpandedPlanet(expandedPlanet === planetId ? null : planetId);
  };

  return (
    <div className="planets-content pb-40">
      <div className="mt-10 mb-8">
        <Title
          title={lang === 'en-us' ? 'Core Positions' : 'Posições Principais'}
        />
      </div>
      {planets.map((planet) => (
        <PlanetCard
          key={planet.id}
          planet={planet}
          isExpanded={expandedPlanet === planet.id}
          onExpand={handleExpand}
        />
      ))}
    </div>
  );
};

export default PlanetsContent;
