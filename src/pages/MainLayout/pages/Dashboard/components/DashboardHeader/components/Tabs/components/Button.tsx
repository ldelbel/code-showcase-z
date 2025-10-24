import { FC } from 'react';

type IconType = 'home' | 'astro' | 'concepts' | 'artifacts' | null;

type IconProps = {
  isSelected: boolean;
  size?: number;
  variant?: 'gold' | 'shadow';
  className?: string;
};

type Props = {
  active: string;
  setActive: (section: string) => void;
  icon: FC<IconProps>;
  iconType: Exclude<IconType, null>;
  label: string;
};

const Button = ({ active, setActive, icon: Icon, iconType, label }: Props) => {
  const size = 46;

  return (
    <div className="relative">
      <span
        className={`flex justify-center items-center icon-span ${
          active === iconType ? 'active' : ''
        }`}
        onClick={() => {
          setActive(iconType);
        }}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <Icon
          isSelected={active === iconType}
          size={size}
          variant={active === iconType ? 'gold' : 'shadow'}
          className={`${active === iconType ? 'drop-shadow-custom ' : ''}`}
        />
      </span>
      <span
        className="tab-name bg-golden-gradient-3"
        style={{
          visibility: active === iconType ? 'visible' : 'hidden',
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default Button;
