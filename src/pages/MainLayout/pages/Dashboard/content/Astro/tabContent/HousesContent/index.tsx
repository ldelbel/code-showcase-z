import Title from '@/shared/Title';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import React, { useState } from 'react';
import { HousesData } from '../../../types';
import HouseCard from './components/HouseCard';
import LockIconButton from '@/shared/Icons/LockIconButton';
import Button from '@/shared/Button';
import { useResponsiveFontSize } from '@/utils/buttonResponsiveFont';
import { useNavigate } from 'react-router-dom';

type HousesContentProps = {
  houses: HousesData;
  isUnlocked: boolean;
  buttonText: string;
};

const HousesContent: React.FC<HousesContentProps> = ({ houses, isUnlocked, buttonText }) => {
  const [expandedHouse, setExpandedHouse] = useState<string | null>(null);

  const handleExpand = (houseId: string) => {
    setExpandedHouse(expandedHouse === houseId ? null : houseId);
  };

  const { fontSize } = useResponsiveFontSize();
  const navigate = useNavigate();

  return (
    <div className="houses-container pb-40">
      <div className="title-container">
        <Title title={AstroLabels['house'][lang]} />
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
      {[...new Map(houses.map((house) => [house.house, house])).values()]
        .sort((a, b) => a.house - b.house)
        .map((house) => (
          <HouseCard
            key={house.id}
            house={house}
            isExpanded={expandedHouse === house.id}
            onExpand={handleExpand}
            isUnlocked={isUnlocked}
          />
        ))}
    </div>
  );
};

export default HousesContent;
