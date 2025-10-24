import GradientText from "@/shared/GradientText";
import Logo from "/zodic-logo-blur.png";


interface CreditsHeaderProps {
  title: string;
}

export const CreditsHeader = ({ title }: CreditsHeaderProps) => {
  return (
    <div className="bg-golden-gradient p-[1px] w-full h-[70px] relative z-0 shadow-box" >
      <div className="bg-DarkGray w-full h-full flex items-center justify-center">
        <div className="flex items-center justify-center absolute z-[2]">
          <GradientText text={title} fontSize="24px" />
        </div>
        <div
          className="w-[66px] h-[66px] bg-cover bg-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundImage: `url(${Logo})`, zIndex: 1 }}
        />
      </div>
    </div >
  );
};