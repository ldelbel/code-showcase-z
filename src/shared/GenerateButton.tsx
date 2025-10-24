import Button from './Button';

import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import GoldenBorderCheck from './Icons/GoldenBorderCheck';
import GoldenLock from './Icons/GoldenLock';

type ButtonVariant = 'small';

interface GenerateButtonProps {
  size?: ButtonVariant;
  handleClick: () => void;
  isUnlocked?: boolean;
}

const GenerateButton = ({
  handleClick,
  size,
  isUnlocked,
}: GenerateButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Button
        variant={size === 'small' ? 'rounded-sm' : 'rounded'}
        base="golden"
        text={AstroLabels['generate'][lang].toUpperCase()}
        onClick={handleClick}
      />
      <div
        className={`bg-golden-gradient rounded-md p-[1px] -mt-1 absolute -bottom-6 z-[-1]`}
      >
        <div className="bg-DarkGray w-full h-full rounded-md px-2 pt-3 pb-1">
          {isUnlocked ? (
            <GoldenBorderCheck height={16} width={16} />
          ) : (
            <GoldenLock height={16} width={16} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateButton;
