import ArrowDown from '@/assets/ArrowDown';

import ArtifactBox from '@/shared/ArtifactBox';
import Box from '@/shared/Box';
import GradientText from '@/shared/GradientText';
import { lang } from '@/utils/lang';
import { useState } from 'react';
import { artifactDisplay } from './artifactDisplay';

type ArtifactFrameProps = {
  artifactInfo: {
    concept: string;
    artifactName: string;
  };
};

const translations = {
  'pt-br': {
    description:
      'O Espelho Cósmico é uma janela para sua verdadeira essência — uma reflexão das energias que moldam sua alma, trazidas à vida pelo poder dos arquétipos. Mais do que apenas uma imagem, é uma visão do seu mundo interior, infundida com as forças celestiais que definem sua identidade.',
    description2:
      'Para criar essa representação única, o Espelho Cósmico utiliza os três guias luminosos do seu mapa astral — seu Sol, Ascendente e Lua — os próprios elementos que formam sua Coroa. Essas energias se combinam para revelar as camadas mais profundas da sua personalidade, transformando-as em uma expressão visual simbólica que ressoa com quem você é no seu cerne.',
    description3:
      'Você será apresentado a três arquétipos, cada um moldado pelo alinhamento da sua Coroa. A partir daí, você escolherá a imagem que mais lhe fala antes de mesclar sua própria semelhança na criação final.',
    description4:
      'Este é um convite para <span className="font-bold text-customYellow2">se ver como o universo o vê</span>, e para abraçar sua identidade cósmica de uma maneira tangível e poderosa.',
    detailsButton: 'DETALHES',
    limitedEdition: 'Edição Limitada',
  },
  'en-us': {
    description:
      'The Cosmic Mirror is a window into your true essence—a reflection of the energies that shape your soul, brought to life through the power of archetypes. More than just an image, it is a vision of your inner world, infused with the celestial forces that define your identity.',
    description2:
      'To create this unique representation, the Cosmic Mirror draws from the three guiding lights of your birth chart—your Sun, Ascendant, and Moon—the very elements that form your Crown. These energies combine to reveal the deeper layers of your personality, transforming them into a symbolic, visual expression that resonates with who you are at your core.',
    description3:
      "You will be presented with three archetypes, each shaped by the alignment of your Crown. From there, you'll choose the image that speaks to you the most before merging your own likeness into the final creation.",
    description4:
      'This is an invitation to <span className="font-bold text-customYellow2">see yourself as the universe sees you</span>, and to embrace your cosmic identity in a tangible, powerful way.',
    detailsButton: 'DETAILS',
    limitedEdition: 'Limited Edition',
  },
};

const t = translations[lang];

const ArtifactFrame = ({ artifactInfo }: ArtifactFrameProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box classNameInner="flex flex-col justify-center items-center gap-2 w-[80vw] h-full p-4 relative">
      <GradientText
        text={artifactDisplay[artifactInfo.artifactName][lang].title}
        fontSize="24px"
      />
      <p className="text-whitesmoke text-sm font-normal font-inter italic text-shadow -mt-4">
        {artifactDisplay[artifactInfo.artifactName][lang].subtitle}
      </p>
      {isExpanded && (
        <div className="w-[90%] mt-2 mx-auto h-[1px] bg-golden-gradient" />
      )}
      <div
        className={`w-full transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div
          className={`flex flex-col gap-3 text-center mt-2 text-white text-lg font-rajdhani transition-all duration-500 ${
            isExpanded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4'
          }`}
        >
          <p>{t.description}</p>
          <p>{t.description2}</p>
          <p>{t.description3}</p>
          <p dangerouslySetInnerHTML={{ __html: t.description4 }} />
        </div>
      </div>
      <ArtifactBox
        artifactName={artifactInfo.artifactName}
        width={200}
        type="list"
      />

      <div
        className={`absolute flex justify-center items-center -bottom-[1px] left-1/2 -translate-x-1/2 bg-oldgolddark w-[58px] h-[15px] rounded-t-md transition-opacity duration-300 cursor-pointer ${
          isExpanded ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className="text-customBrown text-xs font-bold font-rajdhani carved-text">
          {t.detailsButton}
        </p>
      </div>
      <div
        className={`absolute -bottom-[16px] left-1/2 -translate-x-1/2 h-[15px] w-[30px] cursor-pointer transition-transform duration-300 ${
          isExpanded ? 'rotate-180 -bottom-[5px]' : ''
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ArrowDown />
      </div>
    </Box>
  );
};

export default ArtifactFrame;
