import { signIcons } from '@/shared/Icons/maps';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { ZodiacSignSlug } from '@zodic/shared/types/scopes/legacy';

interface SignItemProps {
  sign: ZodiacSignSlug;
  size?: number;
}

const SignItem = ({ sign, size = 30 }: SignItemProps) => {
  const Icon = signIcons[sign];
  return (
    <div className="flex flex-col items-center justify-center gap-1 w-[75px]">
      <Icon size={size} />
      <p className="text-whitesmoke text-sm font-medium text-center font-rajdhani">
        {AstroLabels[sign][lang]}
      </p>
    </div>
  );
};

export default SignItem;