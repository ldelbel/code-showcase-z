import Title from '@/shared/Title';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import React, { useState } from 'react';
import { AspectsData } from '../../../types';
import { default as AspectCard } from './components/AspectCard';
import LockIconButton from '@/shared/Icons/LockIconButton';
import Button from '@/shared/Button';
import { useResponsiveFontSize } from '@/utils/buttonResponsiveFont';
import { useNavigate } from 'react-router-dom';

type AspectsContentProps = {
  aspects: AspectsData;
  isUnlocked: boolean;
  buttonText: string;
};

const AspectsContent: React.FC<AspectsContentProps> = ({ aspects, isUnlocked, buttonText }) => {
  const [expandedAspect, setExpandedAspect] = useState<string | null>(null);

  const handleExpand = (houseId: string) => {
    setExpandedAspect(expandedAspect === houseId ? null : houseId);
  };

  const { fontSize } = useResponsiveFontSize();
  const navigate = useNavigate();
  return (
    <div className="houses-container pb-40">
      <div className="title-container">
        <Title title={AstroLabels['aspect'][lang]} />
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

      {aspects.map((aspect) => (
        <AspectCard
          key={aspect.id}
          aspect={aspect}
          isExpanded={expandedAspect === aspect.id}
          onExpand={handleExpand}
          isUnlocked={isUnlocked}
        />
      ))}
    </div>
  );
};

export default AspectsContent;
