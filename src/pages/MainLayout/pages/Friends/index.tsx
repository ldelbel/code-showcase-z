import { lang } from '@/utils/lang';
import Description from '../components/Description';
import Header from '../components/Header';
import ParticlesBackground from '../components/ParticlesBackground';

const translations = {
  'pt-br': {
    title: 'Conexões',
    subtitle: 'Em Breve!',
    description:
      'Estamos trabalhando nos bastidores para você se conectar com seus amigos e ter incríveis experiências juntos!',
  },
  'en-us': {
    title: 'Connections',
    subtitle: 'Coming Soon!',
    description:
      'We are working behind the scenes to help you connect with your friends and have amazing experiences together!',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const Friends = () => {
  return (
    <div className="flex flex-col gap-3 justify-start items-center h-full w-full pt-8">
      <div className="relative z-10 flex flex-col items-center w-full">
        <Header title={t.title} subtitle={t.subtitle} />
        <div className="w-[80vw] h-[230px] mt-16 mb-12">
          <ParticlesBackground />
        </div>
        <Description pageName="conexões" description={t.description} />
      </div>
    </div>
  );
};

export default Friends;
