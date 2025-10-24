import { lang } from '@/utils/lang';
import { AdvancedPlacementData, PlanetData } from '../../../../types';
import Card from '../../../components/Card';
import PlacementCardContent from '../../../components/card/PlacementCardContent';
import PlanetHeader from './AdvancedHeader';

interface AdvancedCardProps {
  planet: PlanetData | AdvancedPlacementData;
  isExpanded: boolean;
  onExpand: (planetId: string) => void;
  isUnlocked: boolean;
}

const AdvancedCard = ({ planet, isExpanded, onExpand, isUnlocked }: AdvancedCardProps) => {
  return (
    <div>
      <Card
        data={planet}
        isExpanded={isExpanded}
        onExpand={onExpand}
        renderHeader={() => <PlanetHeader planet={planet} />}
        renderDetails={() => (
          <PlacementCardContent placement={planet} lang={lang} isUnlocked={isUnlocked} />
        )}
      />
    </div>
  );
};

export default AdvancedCard;
