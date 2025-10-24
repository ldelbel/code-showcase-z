import Button from '@/shared/Button';
import GradientText from '@/shared/GradientText';
import Successfull from '@/shared/Icons/Successfull';
import { lang } from '@/utils/lang';
import { useNavigate } from 'react-router-dom';

const translations = {
  'pt-br': {
    title: 'Seu Espelho Cósmico está a Caminho!',
    thankYouMessage: 'Obrigado por completar sua jornada no Espelho Cósmico!',
    craftingMessageBefore: 'Nosso sistema está agora ',
    craftingMessageHighlight: 'criando',
    craftingMessageAfter:
      ' seu personagem personalizado com o maior cuidado e precisão. Este processo envolve técnicas avançadas de IA e ',
    underlinedCraftingMessage: 'pode demorar um pouco para ser concluído.',
    notificationMessage:
      'Quando seu personagem estiver pronto, você receberá uma notificação e poderá ver os resultados no seu painel. Por enquanto, sinta-se à vontade para explorar outras funcionalidades ou revisitar a página inicial.',
    goToHomeButton: 'IR PARA A PÁGINA INICIAL',
    dashboardHint:
      'Você pode verificar seus resultados mais tarde no seu painel',
  },
  'en-us': {
    title: 'Your Cosmic Mirror is on its Way!',
    thankYouMessage: 'Thank you for completing your Cosmic Mirror journey!',
    craftingMessageBefore: 'Our system is now ',
    craftingMessageHighlight: 'crafting',
    craftingMessageAfter:
      ' your personalized character with the utmost care and precision. This process involves advanced AI techniques and ',
    underlinedCraftingMessage: 'can take a little while to complete.',
    notificationMessage:
      'Once your character is ready, you’ll receive a notification and can view the results in your dashboard. For now, feel free to explore other features or revisit the home page.',
    goToHomeButton: 'GO TO HOME',
    dashboardHint: 'You can check your results later in your dashboard',
  },
};

const t = translations[lang];

const Step6 = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/main');
  };

  return (
    <div className="text-center flex flex-col items-center justify-around min-h-screen w-full px-10 py-4">
      <div className="w-[90vw] mx-auto">
        <GradientText text={t.title} />
      </div>
      <div className="">
        <Successfull />
      </div>
      <p className="text-lightgray text-center text-sm font-bold text-shadow">
        {t.thankYouMessage}
      </p>
      <p className="text-oldgolddark text-center text-sm text-shadow">
        {t.craftingMessageBefore}
        <span className="text-oldgoldlight text-center text-sm font-black text-shadow">
          {t.craftingMessageHighlight}
        </span>
        {t.craftingMessageAfter}
        <span className="text-oldgolddark text-center text-sm text-shadow underline">
          {t.underlinedCraftingMessage}
        </span>
      </p>

      <p className="text-lightgray">{t.notificationMessage}</p>
      <Button
        variant="free"
        base="golden"
        text={t.goToHomeButton}
        onClick={goToHome}
      />
      <span className="text-oldgoldbrown text-sm font-semibold">
        {t.dashboardHint}
      </span>
    </div>
  );
};

export default Step6;
