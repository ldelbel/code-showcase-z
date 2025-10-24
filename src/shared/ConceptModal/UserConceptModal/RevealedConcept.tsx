import ReturnButton from '@/shared/ReturnButton';
import Tabs from '@/shared/Tabs';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { UserConceptData } from '@zodic/shared/types';
import { useState } from 'react';
import Details from './tabs/Details';
import Overview from './tabs/Overview';
import Share from './tabs/Share';

interface RevealedConceptProps {
  userConcept: UserConceptData;
  onClose: () => void;
}

const RevealedConcept = ({ userConcept, onClose }: RevealedConceptProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex flex-col items-center h-full relative pb-3">
      <div className="w-[80%] flex flex-col justify-between items-center">
        <h3 className="font-rajdhani text-semibold text-lg font-medium text-slate-400">
          {AstroLabels[userConcept.conceptSlug][lang]}
        </h3>
        <h1
          className={`${
            userConcept.name.length > 32
              ? userConcept.name.length > 56
                ? 'text-base'
                : 'text-xl'
              : 'text-2xl'
          } font-bold bg-golden-gradient leading-tight bg-clip-text text-transparent text-center w-[125%] mb-1 md:mb-2`}
        >
          {userConcept.name.split(' ').slice(1).join(' ')}
        </h1>
      </div>
      <div className="h-[1px] w-[75vw] bg-golden-gradient mb-2" />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Área scrollável com altura controlada */}
      <div className="w-[85vw] flex flex-col flex-1 min-h-0 mt-3 md:mt-5 tall:mt-6 overflow-hidden">
        {activeTab === 'overview' && <Overview userConcept={userConcept} />}
        {activeTab === 'details' && <Details userConcept={userConcept} />}
        {activeTab === 'share' && <Share userConcept={userConcept} />}
      </div>

      {/* Botão fora da área scrollável */}
      <div className="mt-4 mb-2 md:mb-3">
        <ReturnButton onClick={onClose} />
      </div>
    </div>
  );
};

export default RevealedConcept;