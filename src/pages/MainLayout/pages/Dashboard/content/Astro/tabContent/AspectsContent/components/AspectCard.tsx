import { lang } from '@/utils/lang';
import { AspectData } from '../../../../types';
import Card from '../../../components/Card';
import AspectCardContent from '../../../components/card/AspectCardContent';
import AspectHeader from './AspectHeader';

interface AspectCardProps {
  aspect: AspectData;
  isExpanded: boolean;
  onExpand: (houseId: string) => void;
  isUnlocked: boolean;
}

const AspectCard = ({ aspect, isExpanded, onExpand, isUnlocked }: AspectCardProps) => {
  return (
    <Card
      data={aspect}
      isExpanded={isExpanded}
      onExpand={onExpand}
      renderHeader={() => <AspectHeader aspect={aspect} />}
      renderDetails={() => <AspectCardContent aspect={aspect} lang={lang} isUnlocked={isUnlocked} />}
    />
  );
};

export default AspectCard;
