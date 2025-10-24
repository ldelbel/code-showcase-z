import { lang } from '@/utils/lang';
import { HouseData } from '../../../../types';
import Card from '../../../components/Card';
import HouseCardContent from '../../../components/card/HouseCardContent';
import HouseHeader from './HouseHeader';

interface HouseCardProps {
  house: HouseData;
  isExpanded: boolean;
  onExpand: (houseId: string) => void;
  isUnlocked: boolean;
}

const HouseCard = ({ house, isExpanded, onExpand, isUnlocked }: HouseCardProps) => {
  return (
    <Card
      data={house}
      isExpanded={isExpanded}
      onExpand={onExpand}
      renderHeader={() => <HouseHeader house={house} />}
      renderDetails={() => <HouseCardContent house={house} lang={lang} isUnlocked={isUnlocked} />}
    />
  );
};

export default HouseCard;
