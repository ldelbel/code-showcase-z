import Crown from "@/assets/Crown2.png";

const Overview = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div 
        className="w-[313px] h-[313px] bg-golden-gradient rounded-md relative golden-glow"
      >
        <div className="w-[310px] h-[310px] bg-DarkGray rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[308px] h-[308px] bg-cover bg-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: `url(${Crown})` }}></div>
        </div>
      </div>
      <div className="mt-3 p-1">
        <p className="text-center text-sm text-whitesmoke">
          This Crown represents the dynamic blend of Scorpio's depth, Aries's courage, and Virgo's precision. It embodies your ability to transform challenges into opportunities, take bold actions, and execute plans with methodical focus and clarity.
        </p>
      </div>
    </div>
  );
};

export default Overview;
