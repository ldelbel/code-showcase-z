import { BeforeInstallPromptEvent } from '@/types/pwa';
import { useEffect, useState } from 'react';

const InstallPWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (event: Event) => {
      const beforeInstallEvent = event as BeforeInstallPromptEvent;
      event.preventDefault();
      setDeferredPrompt(beforeInstallEvent);
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
        setDeferredPrompt(null);
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  };

  if (isInstalled) return null;

  return (
    <button
      className="p-3 bg-blue-600 text-white rounded-lg"
      onClick={handleInstallClick}
      disabled={!deferredPrompt}
    >
      Install App
    </button>
  );
};

export default InstallPWAButton;
