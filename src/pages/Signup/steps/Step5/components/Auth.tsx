import LoadingSpinner from '@/shared/LoadingSpinner';
import { lang } from '@/utils/lang';

const translations = {
  'pt-br': {
    authenticating: 'Autenticando...',
    pleaseWait: 'Por favor, aguarde.',
  },
  'en-us': {
    authenticating: 'Authenticating...',
    pleaseWait: 'Please wait.',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const Auth = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <p className="text-oldgolddark text-2xl font-medium">
        {t.authenticating}
      </p>
      <p className="text-customYellow2 text-lg font-medium">{t.pleaseWait}</p>
      <div className="mt-5">
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default Auth;
