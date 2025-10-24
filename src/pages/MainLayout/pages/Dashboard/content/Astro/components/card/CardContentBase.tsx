import Button from '@/shared/Button';
import LockIconButton from '@/shared/Icons/LockIconButton';
import { useNavigate } from 'react-router-dom';

interface CardContentBaseProps {
  description: string;
  isUnlocked?: boolean;
  onOpenModal: () => void;
}

const CardContentBase = ({
  description,
  onOpenModal,
  isUnlocked,
}: CardContentBaseProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isUnlocked) {
      onOpenModal();
    } else {
      navigate('/main/payment');
    }
  };

  console.log('isUnlocked', isUnlocked);

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-4 mb-4 rounded-bl-[5px] rounded-b-[5px]">
      <div className="flex flex-col items-center justify-center rounded-b-[5px]">
        <p className="text-slate-200 text-justify text-base font-normal">
          {description}
        </p>
      </div>
      <Button
        variant="free"
        base="golden"
        text="VER LEITURA"
        onClick={handleClick}
        icon={isUnlocked ? '' : <LockIconButton />}
        iconPosition="left"
      />
    </div>
  );
};

export default CardContentBase;
