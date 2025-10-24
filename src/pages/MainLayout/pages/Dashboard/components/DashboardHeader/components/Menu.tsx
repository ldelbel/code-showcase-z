import { clearArtifactCache } from '@/api/client/artifacts';
import { useLogout } from '@/api/hooks/auth';
import CloseButton from '@/shared/CloseButton';
import { lang } from '@/utils/lang';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { LogoutIcon } from '../icons/Logout';
import './index.css';
import logoCarved from '/logo-carved.png';

const translations = {
  'pt-br': {
    terms: 'Termos & Condições',
    privacyPolicy: 'Política de Privacidade',
    faq: 'FAQ',
    settings: 'Configurações',
    update: 'Atualizar',
    logout: 'Sair',
    logoutSuccess: '✅ Logout realizado com sucesso, redirecionando...',
    logoutError: '❌ Falha ao fazer logout. Por favor, tente novamente.',
    serviceWorkerError: '❌ Erro ao verificar estado do service worker:',
  },
  'en-us': {
    terms: 'Terms & Conditions',
    privacyPolicy: 'Privacy Policy',
    faq: 'FAQ',
    settings: 'Settings',
    update: 'Update',
    logout: 'Logout',
    logoutSuccess: '✅ Logout successful, redirecting...',
    logoutError: '❌ Failed to log out. Please try again.',
    serviceWorkerError: '❌ Error checking service worker state:',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const Menu = ({
  isMenuOpen,
  handleMenuClick,
}: {
  isMenuOpen: boolean;
  handleMenuClick: () => void;
}) => {
  const logoutMutation = useLogout();
  const queryClient = useQueryClient();
  const { updateServiceWorker } = useRegisterSW();
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'terms',
      label: t.terms,
      onClick: () => {
        navigate('/terms');
      },
    },
    {
      id: 'privacy-policy',
      label: t.privacyPolicy,
      onClick: () => {
        navigate('/privacy-policy');
      },
    },

    {
      id: 'update',
      label: t.update,
      onClick: () => updateServiceWorker(true),
    },
  ];

  const handleLogout = async () => {
    logoutMutation.mutate(undefined, {
      onSuccess: async () => {
        console.log(t.logoutSuccess);

        if ('serviceWorker' in navigator) {
          try {
            const registration =
              await navigator.serviceWorker.getRegistration();
            if (registration && registration.installing) {
              await new Promise<void>((resolve) => {
                registration.installing?.addEventListener(
                  'statechange',
                  (e) => {
                    const target = e.target as ServiceWorker;
                    if (target.state === 'activated') {
                      resolve();
                    }
                  }
                );
              });
            }
          } catch (error) {
            console.error(t.serviceWorkerError, error);
          }
        }

        queryClient.clear();
        console.log(
          `[${new Date().toISOString()}] Cleared TanStack Query api-cache`
        );

        clearArtifactCache();

        window.location.href = '/';
      },
      onError: (error) => {
        console.error('❌ Logout failed:', error);
        alert(t.logoutError);
      },
    });
  };

  return (
    <div
      className={`menu-container ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="menu-header">
        <div
          style={{ backgroundImage: `url(${logoCarved})` }}
          className="w-[100px] h-[36px] bg-contain bg-center bg-no-repeat"
        />
        <div
          className="bg-golden-gradient w-full h-[2px]"
          style={{
            boxShadow: '0px 2px 2px 0px #00000080',
          }}
        />
      </div>
      <div className="menu">
        <div
          className="absolute top-2 right-1 cursor-pointer z-10"
          onClick={handleMenuClick}
        >
          <CloseButton />
        </div>
        <div className="flex flex-col gap-6 items-end mb-20">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-button" onClick={item.onClick}>
              {item.label}
            </div>
          ))}
        </div>

        <div className="menu-logout cursor-pointer" onClick={handleLogout}>
          <div>
            <LogoutIcon />
            <p className="text-white text-lg font-bold">{t.logout}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
