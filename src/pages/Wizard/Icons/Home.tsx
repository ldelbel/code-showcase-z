import HomeIcon from '@/shared/Icons/HomeIcon';
import { lang } from '@/utils/lang';

const translations = {
  'pt-br': {
    home: 'Início',
  },
  'en-us': {
    home: 'Home',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const Home = () => {
  return (
    <div className="flex items-center gap-1">
      <svg
        className=""
        width="9"
        height="13"
        viewBox="0 0 9 13"
        fill="#6C6C6C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 6.5L8.25 0.870834V12.1292L0 6.5Z" fill="#6C6C6C" />
      </svg>
      <HomeIcon variant="gray" size={25} />
      <span className="text-sm text-customGray font-bold">{t.home}</span>
    </div>
  );
};

export default Home;
