import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PWABadge from './PWABadge.tsx';
import DesktopInitialPage from './pages/DesktopInitialPage.tsx';
import InitialPage from './pages/InitialPage.tsx';
import Login from './pages/Login.tsx';
import MainLayout from './pages/MainLayout/index.tsx';
import {
  Payment,
  PaymentLayout,
} from './pages/MainLayout/pages/Dashboard/content/PaymentLayout';
import PaymentCanceled from './pages/MainLayout/pages/Dashboard/content/PaymentLayout/components/PaymentCanceled.tsx';
import PaymentExpired from './pages/MainLayout/pages/Dashboard/content/PaymentLayout/components/PaymentExpired.tsx';
import PaymentSuccess from './pages/MainLayout/pages/Dashboard/content/PaymentLayout/components/PaymentSuccess.tsx';
import Dashboard from './pages/MainLayout/pages/Dashboard/index.tsx';
import Friends from './pages/MainLayout/pages/Friends/index.tsx';
import Horoscope from './pages/MainLayout/pages/Horoscope/index.tsx';
import Profile from './pages/MainLayout/pages/Profile/index.tsx';
import { PrivacyPolicy } from './pages/PrivacyPolicy.tsx';
import Signup from './pages/Signup/index.tsx';
import { TermsAndConditions } from './pages/TermsAndConditions.tsx';
import Wizard from './pages/Wizard/index.tsx';
import Callback from './pages/auth/Callback.tsx';
import OAuthSuccess from './pages/auth/OAuthSucess.tsx';
import UserSetup from './pages/auth/UserSetup.tsx';
import InstallPWAModal from './shared/InstallPWAModal.tsx';
import IosInstallModal from './shared/IosInstallModal.tsx';

function App() {
  const [language, setLanguage] = useState<'pt-br' | 'en-us'>('pt-br');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem('appLanguage');

    if (storedLang) {
      setLanguage(storedLang as 'pt-br' | 'en-us');
    } else {
      setLanguage('en-us');
      localStorage.setItem('appLanguage', 'en-us');
    }

    const checkIfDesktop = () => {
      const screenWidth = window.innerWidth;
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      return screenWidth >= 768 && !isMobile;
    };

    setIsDesktop(checkIfDesktop());

    const handleResize = () => {
      setIsDesktop(checkIfDesktop());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isDesktop) {
    return (
      <div className="app-container" data-lang={language}>
        <ToastContainer />
        <DesktopInitialPage />
      </div>
    );
  }

  return (
    <div className="app-container" data-lang={language}>
      <InstallPWAModal />
      <IosInstallModal />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="horoscope" element={<Horoscope />} />
          <Route path="friends" element={<Friends />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment" element={<PaymentLayout />}>
            <Route index element={<Payment />} />
            <Route path="success" element={<PaymentSuccess />} />
            <Route path="canceled" element={<PaymentCanceled />} />
            <Route path="expired" element={<PaymentExpired />} />
          </Route>
        </Route>
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/auth-success" element={<OAuthSuccess />} />
        <Route path="/setup" element={<UserSetup />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <PWABadge />
    </div>
  );
}

export default App;
