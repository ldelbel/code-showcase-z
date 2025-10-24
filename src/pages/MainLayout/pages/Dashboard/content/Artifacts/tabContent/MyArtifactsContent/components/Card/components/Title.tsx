import GradientText from '@/shared/GradientText';
import { lang } from '@/utils/lang';

const translations = {
  'pt-br': {
    artifacts: 'Artefatos',
    from: 'de:',
  },
  'en-us': {
    artifacts: 'Artifacts',
    from: 'from:',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

interface TitleProps {
  conceptName: string;
}

const Title = ({ conceptName }: TitleProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 w-[40vw]">
      <h1 className="text-2xl font-bold text-whitesmoke text-shadow">
        {t.artifacts}
      </h1>
      <div className="w-full h-[1px] bg-golden-gradient" />
      <div className="flex items-center gap-2 -mt-2">
        <p className="text-oldgolddark text-sm font-bold font-inter text-shadow">
          {t.from}
        </p>
        <GradientText text={conceptName} fontSize="20px" />
      </div>
    </div>
  );
};

export default Title;
