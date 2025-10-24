import './PWABadge.css';

import { useRegisterSW } from 'virtual:pwa-register/react';
import Button from './shared/Button';

function PWABadge() {
  const period = 60 * 60 * 1000;

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      if (period <= 0) return;
      if (r?.active?.state === 'activated') {
        registerPeriodicSync(period, swUrl, r);
      } else if (r?.installing) {
        r.installing.addEventListener('statechange', (e) => {
          const sw = e.target as ServiceWorker;
          if (sw.state === 'activated') registerPeriodicSync(period, swUrl, r);
        });
      }
    },
  });

  function close() {
    setNeedRefresh(false);
  }

  return (
    <div className="PWABadge" role="alert" aria-labelledby="toast-message">
      {needRefresh && (
        <div className="PWABadge-toast bg-golden-gradient-2">
          <div className="PWABadge-message bg-DarkGray p-4 rounded-lg flex flex-col text-center">
            <span className="text-whitesmoke mb-4">
              Novo conteúdo disponível, clique em Atualizar para acessar as
              novidades.
            </span>
            <div className="flex gap-4 justify-center">
              <Button
                variant="free"
                text="ATUALIZAR"
                base="golden"
                onClick={() => updateServiceWorker(true)}
              />
              <Button
                variant="free"
                text="FECHAR"
                base="silver"
                onClick={() => close()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PWABadge;

/**
 * This function will register a periodic sync check every hour, you can modify the interval as needed.
 */
function registerPeriodicSync(
  period: number,
  swUrl: string,
  r: ServiceWorkerRegistration
) {
  if (period <= 0) return;

  setInterval(async () => {
    if ('onLine' in navigator && !navigator.onLine) return;

    const resp = await fetch(swUrl, {
      cache: 'no-store',
      headers: {
        cache: 'no-store',
        'cache-control': 'no-cache',
      },
    });

    if (resp?.status === 200) await r.update();
  }, period);
}
