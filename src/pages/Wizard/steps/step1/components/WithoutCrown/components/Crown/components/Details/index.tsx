import React, { useState } from 'react';

const Details = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - e.currentTarget.clientHeight) < 1;
    setIsScrolledToBottom(bottom);
  };

  return (
    <div 
      className="text-slate-200 overflow-y-auto h-[55vh] flex flex-col gap-6 px-4 py-2 relative"
      style={{ 
        backgroundColor: '#D9D9D91A',
        scrollbarWidth: 'thin',
        scrollbarColor: '#E6BE69 #171717',
        boxShadow: 'inset 0px -4px 10px rgba(0, 0, 0, 0.5)',
        maskImage: isScrolledToBottom 
          ? 'linear-gradient(to bottom, transparent 0%, black 15%)' 
          : 'linear-gradient(to bottom, black 85%, transparent 100%)',
        WebkitMaskImage: isScrolledToBottom 
          ? 'linear-gradient(to bottom, transparent 0%, black 15%)' 
          : 'linear-gradient(to bottom, black 85%, transparent 100%)'
      }}
      onScroll={handleScroll}
    >
      <h3 className="bg-golden-gradient text-transparent bg-clip-text font-semibold text-lg">Description</h3>
      <p className="text-justify text-base">The Crown of Focused Power reflects your unique ability to harness emotional depth, bold initiative, and practical focus. Scorpio's transformative energy allows you to navigate life's complexities and emerge stronger from every challenge. Aries adds fearless drive, propelling you to act decisively and pursue your ambitions with passion. Virgo grounds these fiery and emotional forces, ensuring your approach is methodical and calculated, allowing you to achieve your goals with efficiency and purpose. </p>
      <p className="text-justify text-sm">The Crown of Focused Power reflects your unique ability to harness emotional depth, bold initiative, and practical focus. Scorpio's transformative energy allows you to navigate life's complexities and emerge stronger from every challenge. Aries adds fearless drive, propelling you to act decisively and pursue your ambitions with passion. Virgo grounds these fiery and emotional forces, ensuring your approach is methodical and calculated, allowing you to achieve your goals with efficiency and purpose. </p>
    </div>
  );
};

export default Details;