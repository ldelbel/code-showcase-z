import Button from '@/shared/Button';
import LockIconButton from '@/shared/Icons/LockIconButton';
import Title from '@/shared/Title';
import { useResponsiveFontSize } from '@/utils/buttonResponsiveFont';
import { lang } from '@/utils/lang';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdvancedPlacementsData } from '../../../types';
import PlanetCard from './components/AdvancedCard';

const translations = {
  'pt-br': {
    advancedPositions: 'Posições Avançadas',
  },
  'en-us': {
    advancedPositions: 'Advanced Positions',
  }
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

interface AdvancedContentProps {
  placements: AdvancedPlacementsData;
  isUnlocked: boolean;
  buttonText: string;
}

const AdvancedContent = ({ placements, isUnlocked, buttonText }: AdvancedContentProps) => {
  const [expandedPlanet, setExpandedPlanet] = useState<string | null>(null);
  const { fontSize } = useResponsiveFontSize();

  const handleExpand = (planetId: string) => {
    setExpandedPlanet(expandedPlanet === planetId ? null : planetId);
  };

  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById(expandedPlanet || '')?.scrollIntoView({ behavior: 'smooth' });
  }, [expandedPlanet]);

  return (
    <div className="planets-content pb-40">
      <div className="title-container">
        <Title
          title={t.advancedPositions}
        />
        {isUnlocked ? null : (
          <Button
            variant="free"
            text={buttonText}
            base="golden"
            icon={<LockIconButton />}
            iconPosition='left'
            onClick={() => navigate('/main/payment')}
            fontSize={fontSize}
          />
        )}
      </div>
      {placements.map((placement) => (
        <PlanetCard
          key={placement.id}
          planet={placement}
          isExpanded={expandedPlanet === placement.id}
          onExpand={handleExpand}
          isUnlocked={isUnlocked}
        />
      ))}
    </div>
  );
};

export default AdvancedContent;
