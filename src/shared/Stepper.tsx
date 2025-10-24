import React from 'react';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-between w-full h-[61px]" style={{ zIndex: 1 }}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          {/* Circle */}
          <div className="w-[35px] h-[35px] rounded-full bg-[#292929] relative shadow-[3px_3px_6px_rgba(0,0,0,0.9),-1px_-1px_6px_rgba(255,255,255,0.3)] transition-all duration-500 ease-in-out"
            style={{ zIndex: 1 }}
          >
            <div className={`absolute w-[26px] h-[26px] justify-center items-center flex rounded-full top-[4.5px] left-[4.5px] text-lg font-bold 
              transition-all duration-500 ease-in-out transform ${currentStep >= index + 1 ? 'shadow-custom-inset bg-golden-gradient-2 text-customBrown scale-110' : 'text-customGray scale-100'}`}>
              {index + 1}
            </div>
          </div>

          {/* Line (only if not last circle) */}
          {index < totalSteps - 1 && (
            <div className="relative flex-grow -mt-1">
              <div className="absolute inset-0 h-[5px] bg-[#292929] shadow-[3px_3px_6px_rgba(0,0,0,0.9),0px_-1px_6px_rgba(255,255,255,0.3)]" />
              <div className="absolute inset-0 h-[5px] bg-[#292929] z-[2]" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;