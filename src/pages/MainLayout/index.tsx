import { ReportProvider } from '@/context/ReportContext';
import { getCookie } from '@/utils/cookies';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import BottomNav from './components/BottomNav';

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const pendingSetup = getCookie('pendingSetup');

    console.log('pendingSetup on main', pendingSetup);
    if (pendingSetup) {
      navigate('/setup', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex flex-col h-dvh w-full">
      <div className="flex-1 overflow-y-auto">
        <ReportProvider>
          <Outlet />
        </ReportProvider>
      </div>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
