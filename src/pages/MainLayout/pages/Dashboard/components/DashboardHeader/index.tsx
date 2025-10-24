import { lang } from '@/utils/lang';
import { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Tabs from './components/Tabs';
import UserInfo from './components/UserInfo';
import ExpandIcon from './icons/ExpandIcon';
import { MenuIcon } from './icons/MenuIcon';
import { NotificationIcon } from './icons/NotificationIcon';

const translations = {
  'pt-br': {
    noNotifications: 'Não há notificações.',
  },
  'en-us': {
    noNotifications: "There aren't any notifications.",
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

type Props = {
  active: string;
  setActive: (section: string) => void;
};

const DashboardHeader = ({ active, setActive }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWiderThan390, setIsWiderThan390] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(min-width: 390px)');

      setIsWiderThan390(mediaQuery.matches);

      const handleResize = (e: MediaQueryListEvent) => {
        setIsWiderThan390(e.matches);
      };

      mediaQuery.addEventListener('change', handleResize);

      return () => {
        mediaQuery.removeEventListener('change', handleResize);
      };
    }
  }, []);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center relative pt-7 pb-14 dashboard-header z-50">
      <div
        className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${
          isExpanded
            ? 'max-h-[500px] opacity-100 transition-timing-function-[cubic-bezier(0.4,0,0.2,1)]'
            : 'max-h-0 opacity-0 transition-timing-function-[cubic-bezier(0.4,0,0.2,1)] delay-100'
        }
      `}
      >
        <UserInfo />
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
        <Tabs active={active} setActive={setActive} />
      </div>
      <div
        className={`absolute bottom-4 cursor-pointer transition-all duration-300 ${
          isExpanded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ left: isWiderThan390 ? '1.5rem' : '0.75rem' }}
        onClick={handleNotificationClick}
      >
        <NotificationIcon />
        {showNotifications && (
          <div className="notification-container">
            <div>{t.noNotifications}</div>
          </div>
        )}
      </div>
      <div
        className={`absolute bottom-4 right-6 cursor-pointer transition-all duration-300 ${
          isExpanded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ right: isWiderThan390 ? '1.5rem' : '0.75rem' }}
        onClick={handleMenuClick}
      >
        <MenuIcon />
      </div>
      <div
        className="absolute -bottom-3 left-5 cursor-pointer"
        onClick={handleExpandClick}
      >
        <ExpandIcon
          className="transition-transform duration-300 ease-in-out transform-gpu hover:scale-110 active:scale-95"
          style={{
            transform: `rotate(${isExpanded ? 180 : 0}deg)`,
          }}
        />
      </div>

      <Menu isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleMenuClick}
        />
      )}
    </div>
  );
};

export default DashboardHeader;
