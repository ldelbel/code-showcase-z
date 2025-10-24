import { twMerge } from "tailwind-merge";
interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  classNameInner?: string;
}

const Box = ({ children, className, classNameInner }: BoxProps) => {

  return (
    <div className={twMerge(`bg-golden-gradient rounded-md input-field w-fit h-auto p-[1px]`, className)}>
      <div className={twMerge(`bg-DarkGray rounded-md w-full h-full p-1`, classNameInner)}>
        {children}
      </div>
    </div>
  )
};

export default Box;
