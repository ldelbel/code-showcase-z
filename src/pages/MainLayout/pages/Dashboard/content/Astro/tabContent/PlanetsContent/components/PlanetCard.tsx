import { lang } from '@/utils/lang';
import { PlanetData } from '../../../../types';
import Card from '../../../components/Card';
import PlacementCardContent from '../../../components/card/PlacementCardContent';
import PlanetHeader from './PlanetHeader';

interface PlanetCardProps {
  planet: PlanetData;
  isExpanded: boolean;
  onExpand: (planetId: string) => void;
}

const PlanetCard = ({ planet, isExpanded, onExpand }: PlanetCardProps) => {
  return (
    <div>
      <Card
        data={planet}
        isExpanded={isExpanded}
        onExpand={onExpand}
        renderHeader={() => <PlanetHeader planet={planet} />}
        renderDetails={() => (
          <PlacementCardContent isUnlocked={true} placement={planet} lang={lang} />
        )}
      />
    </div>
  );
};

export default PlanetCard;
