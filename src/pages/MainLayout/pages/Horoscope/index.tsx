import ZodicLogo from '@/shared/ZodicLogo';
import { lang } from '@/utils/lang';
import Description from '../components/Description';
import Header from '../components/Header';

const translations = {
  'pt-br': {
    title: 'Horóscopo',
    subtitle: 'Em Breve!',
    description:
      'Estamos trabalhando nos bastidores para trazer insights cósmicos diários feitos especialmente para você.',
  },
  'en-us': {
    title: 'Horoscope',
    subtitle: 'Coming Soon!',
    description:
      'We are working behind the scenes to bring you daily cosmic insights made especially for you.',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const Horoscope = () => {
  return (
    <div className="flex flex-col gap-3 justify-start items-center h-full pt-8">
      <Header title={t.title} subtitle={t.subtitle} />
      <div className="mt-10">
        <ZodicLogo width={284} height={284} className="animate-spin-slow2" />
      </div>
      <Description pageName="horóscopo" description={t.description} />
    </div>
  );
};

export default Horoscope;
