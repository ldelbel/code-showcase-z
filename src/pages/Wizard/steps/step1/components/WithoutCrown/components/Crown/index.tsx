import ReturnButton from '@/shared/ReturnButton';
import Tabs from '@/shared/Tabs';
import { useState } from 'react';
import Details from './components/Details';
import Overview from './components/Overview';
import Share from './components/Share';

const TheCrown = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState('overview');
  console.log(activeTab);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[80%] flex flex-col justify-between items-center">
        <h3
          className="text-semibold"
          style={{ fontSize: '14px', fontFamily: 'Inter' }}
        >
          The Crown
        </h3>
        <h1 className="text-2xl font-bold bg-golden-gradient bg-clip-text text-transparent">
          The Crown of Focused Power
        </h1>
      </div>
      <div className="h-[1px] w-[75vw] bg-golden-gradient m-4"></div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-[85vw] h-[440px] m-6">
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'details' && <Details />}
        {activeTab === 'share' && <Share />}
      </div>
      <ReturnButton onClick={onClose} />
    </div>
  );
};

export default TheCrown;
