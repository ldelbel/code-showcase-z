import { BeforeInstallPromptEvent } from '@/types/pwa';
import { lang } from '@/utils/lang';
import { useEffect, useState } from 'react';
import Button from './Button';

const InstallPWAModal = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasDismissed = localStorage.getItem('pwaInstallDismissed');
    if (hasDismissed) return;

    const handler = (event: Event) => {
      const beforeInstallEvent = event as BeforeInstallPromptEvent;
      beforeInstallEvent.preventDefault();
      setDeferredPrompt(beforeInstallEvent);
      setShowModal(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
      setShowModal(false);
    });
  };

  const handleDismiss = () => {
    setShowModal(false);
    localStorage.setItem('pwaInstallDismissed', 'true');
  };

  if (isInstalled) return null;

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-CustomBlack bg-opacity-85 z-50">
        <div className="p-[2px] bg-golden-gradient rounded-lg">
          <div className="bg-DarkGray p-6 rounded-lg shadow-lg text-center w-80">
            <h2 className="text-2xl font-bold mb-2 text-customYellow2 golden-glow-text">
              {lang === 'pt-br' ? 'Instalar Zodic' : 'Install Zodic'}
            </h2>
            <p className="text-gray-100 mb-4">
              {lang === 'pt-br'
                ? 'Adicione o Aplicativo Zodic na sua tela inicial para uma melhor experiência! Não irá ocupar espaço na memória do seu smartphone.'
                : 'Add the Zodic App to your home screen for a better experience.'}
            </p>
            <div className="flex justify-center gap-8">
              <Button
                variant="free"
                base="golden"
                text={lang === 'pt-br' ? 'Instalar' : 'Install'}
                onClick={handleInstallClick}
              />
              <Button
                variant="free"
                base="silver"
                text={lang === 'pt-br' ? 'Cancelar' : 'Cancel'}
                onClick={handleDismiss}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default InstallPWAModal;
