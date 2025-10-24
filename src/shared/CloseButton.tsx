import X from './Icons/X';

interface CloseButtonProps {
  size?: number;
}

const CloseButton = ({ size = 28 }: CloseButtonProps) => {
  return (
    <div
      className={`h-[${size}px] bg-customBrown rounded-full flex items-center justify-center shadow-box`}
      style={{ width: size, height: size }}
    >
      <div
        className={`h-[${
          size - 2
        }px] bg-golden-conic rounded-full flex items-center justify-center shadow-box`}
        style={{ width: size - 2, height: size - 2 }}
      >
        <X size={size * (4 / 7)} />
      </div>
    </div>
  );
};

export default CloseButton;
