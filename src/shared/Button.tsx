type ButtonVariant =
  | 'main'
  | 'medium'
  | 'small'
  | 'rounded'
  | 'rounded-sm'
  | 'silver-medium'
  | 'free';
type ButtonBase = 'golden' | 'silver';
type IconPosition = 'left' | 'right';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  base?: ButtonBase;
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  fontSize?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  text,
  icon,
  base,
  iconPosition = 'right',
  fontSize = 'text-lg',
  ...props
}) => {
  let variantClass = '';

  switch (variant) {
    case 'main':
      variantClass = 'golden-button-main';
      break;
    case 'medium':
      variantClass = 'golden-button-medium';
      break;
    case 'silver-medium':
      variantClass = 'silver-button-medium';
      break;
    case 'small':
      variantClass = 'golden-button-small';
      break;
    case 'rounded':
      variantClass = 'golden-button-rounded';
      break;
    case 'rounded-sm':
      variantClass = 'golden-button-rounded-sm';
      break;
    case 'free':
      variantClass = 'golden-button-free';
      break;
    default:
      break;
  }

  const content = (
    <>
      {iconPosition === 'left' && icon && <span>{icon}</span>}
      {text && (
        <span
          className={`${base === 'golden' ? 'carved-text' : ''} ${fontSize}`}
          style={
            base === 'silver'
              ? { textShadow: '0px 2px 2px rgba(0, 0, 0, 0.5)' }
              : undefined
          }
        >
          {text}
        </span>
      )}
      {iconPosition === 'right' && icon && <span>{icon}</span>}
    </>
  );

  return base === 'golden' ? (
    <button
      className={`golden-button-base ${variantClass} flex items-center justify-center gap-1`}
      {...props}
    >
      {content}
    </button>
  ) : (
    <div
      className={`${variant === 'free' ? 'w-fit' : 'silver-button-wrapper'} `}
    >
      <button className={` silver-button-base ${variantClass} `} {...props}>
        {content}
      </button>
    </div>
  );
};

export default Button;
