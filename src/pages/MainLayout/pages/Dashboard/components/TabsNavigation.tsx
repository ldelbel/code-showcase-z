import LockIcon from '@/shared/Icons/LockIconTab';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import React from 'react';
import './index.css';

type TabsNavigationProps = {
  tabs: string[];
  activeTab: string;
  onChangeTab: (tab: string) => void;
  isUnlocked?: boolean;
};

const TabsNavigation: React.FC<TabsNavigationProps> = ({
  tabs,
  activeTab,
  onChangeTab,
  isUnlocked,
}) => {
  const premiumTabs = ['advanced', 'houses', 'aspects'];
  const regularTabs = tabs.filter(tab => !premiumTabs.includes(tab));
  const filteredPremiumTabs = tabs.filter(tab => premiumTabs.includes(tab));

  return (
    <div className={`tabs-navigation flex justify-center items-center ${tabs.length > 3 ? 'gap-[2px]' : 'gap-2'} mt-2 flex-shrink`}>
      {/* Regular tabs */}
      {regularTabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onChangeTab(tab)}
        >
          {AstroLabels[tab][lang].toUpperCase()}
        </button>
      ))}

      {/* Premium tabs wrapper */}
      {filteredPremiumTabs.length > 0 && (
        <div className="premium-tabs-wrapper flex-shrink w-[60%]">
          <div className='w-[75%] h-[34px] bg-golden-gradient rounded-md px-[1px] pt-[1px] absolute bottom-2 right-1/2 translate-x-1/2'>
            <div className='w-full h-full bg-DarkGray rounded-md' />
          </div>
          {filteredPremiumTabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button premium flex-shrink px-0 ${activeTab === tab ? 'active' : ''}`}
              onClick={() => onChangeTab(tab)}
            >
              {AstroLabels[tab][lang].toUpperCase()}
              {!isUnlocked && (
                <div className="lock-icon">
                  <LockIcon width={14} height={14} />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabsNavigation;
