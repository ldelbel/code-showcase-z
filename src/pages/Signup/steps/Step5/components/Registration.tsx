import LoadingSpinner from '@/shared/LoadingSpinner';
import { lang } from '@/utils/lang';

import GradientText from '@/shared/GradientText';
import Successfull from '@/shared/Icons/Successfull';

const translations = {
  'pt-br': {
    registrationSuccessful: 'Cadastro Concluído!',
    preparingData:
      'Estamos preparando seus dados astrológicos. Isso pode levar alguns segundos.',
    redirecting: 'Você será redirecionado para o',
    dashboard: 'painel',
    automatically: 'automaticamente',
  },
  'en-us': {
    registrationSuccessful: 'Registration Successful!',
    preparingData:
      "We're preparing your astrological data. This may take a few seconds.",
    redirecting: "You'll be redirected to the",
    dashboard: 'dashboard',
    automatically: 'automatically',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const Registration = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-4">
      <div className="w-[250px]">
        <GradientText text={t.registrationSuccessful} />
      </div>

      <div className="w-36 h-36">
        <Successfull />
      </div>

      <div className="text-center text-sm text-gray-500 w-[90vw]">
        <span className="font-bold text-oldgolddark text-lg">
          {t.preparingData}
        </span>
      </div>

      <div>
        <LoadingSpinner />
      </div>

      <div className="w-[70vw]">
        <p className="text-oldgoldbrown text-base font-semibold text-center">
          {t.redirecting}{' '}
          <span className="font-bold bg-golden-gradient-2 bg-clip-text text-transparent">
            {t.dashboard}
          </span>{' '}
          {t.automatically}
        </p>
      </div>
    </div>
  );
};

export default Registration;
