import { useUserConceptModal } from '@/hooks/useUserConceptModal';
import { useUserStore } from '@/store/useStore';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { Concept } from '@zodic/shared/types';
import { useEffect, useState } from 'react';
import GenerateButton from '../GenerateButton';
import GradientText from '../GradientText';
import EyeIcon from '../Icons/EyeIcon';
import Amulet from '/amulet-chalk.png';
import Crown from '/crown-chalk.png';
import Lantern from '/lantern-chalk.png';
import Orb from '/orb-chalk.png';
import Ring from '/ring-chalk.png';
import Scepter from '/scepter-chalk.png';

const conceptImages: Record<string, string> = {
  amulet: Amulet,
  crown: Crown,
  lantern: Lantern,
  ring: Ring,
  orb: Orb,
  scepter: Scepter,
};

type ConceptBoxProps = {
  width?: number;
  height?: number;
  hasBorder?: boolean;
  conceptSlug: Concept;
  type?: ConceptBoxType;
  isLoading?: boolean;
};

type ConceptBoxType = 'home' | 'list' | 'tree';

const ConceptBox = ({
  width = 160,
  hasBorder: propHasBorder = false,
  conceptSlug,
  type = 'home',
  isLoading = false,
}: ConceptBoxProps) => {
  const { userConcepts } = useUserStore();
  const { userProducts } = useUserStore();
  const [scale, setScale] = useState(0.7);

  const isCrown = conceptSlug === 'crown';
  const concepts = userProducts.find((up) => up.productSlug === 'concepts');
  const isUnlocked = isCrown ? true : concepts?.status === 'unlocked';

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerHeight >= 820 ? 0.6 : 0.5);
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const adjustedWidth = isLoading ? width * scale : width;
  const height = adjustedWidth * (5 / 4);

  const userConcept = userConcepts.find((c) => c.conceptSlug === conceptSlug);
  const isGenerated = !!userConcept;

  const hasBorder = isGenerated || propHasBorder;
  const { openModal } = useUserConceptModal();

  return (
    <div
      className={`m-1 rounded-md relative transition-all duration-500 ${
        type === 'home' ? 'mt-10' : ''
      }
      ${type === 'list' ? (isLoading ? '' : '-mt-10') : ''}
        ${isGenerated ? 'golden-glow' : ''} 
        ${
          hasBorder
            ? 'bg-golden-gradient p-[2px]'
            : 'bg-DarkGray p-1 input-field'
        }`}
      style={{
        width: adjustedWidth,
        height,
        transition: 'height 300ms ease-in-out',
      }}
      onClick={() => (isGenerated ? openModal(conceptSlug) : null)}
    >
      {type === 'home' && (
        <>
          {isGenerated ? (
            <div
              className="absolute -top-8 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[120%] text-center"
              style={{ zIndex: 1 }}
            >
              <GradientText
                text={userConcept.name}
                fontSize="16px"
                lineHeight="18px"
              />
            </div>
          ) : (
            <div
              className="absolute -top-1 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full text-center"
              style={{ zIndex: 1 }}
            >
              <p className="text-whitesmoke text-lg font-normal font-roboto glow-text">
                {AstroLabels[conceptSlug][lang]}
              </p>
            </div>
          )}
        </>
      )}

      <div className="rounded-md w-full h-full bg-DarkGray transition-all duration-300">
        <div className={`${isGenerated ? '' : 'p-[2px]'} w-full h-full`}>
          <div
            className="w-full h-full relative transition-all duration-300 rounded-md"
            style={{
              backgroundImage: `url(${
                isGenerated
                  ? userConcept.images.post[userConcept.imageIdx].url
                  : conceptImages[conceptSlug] || Crown
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isGenerated ? 1 : 0.4,
            }}
          />
        </div>
        {isGenerated && (
          <div className="w-[28px] h-[28px] transition-all duration-300 absolute bottom-0 right-1">
            <EyeIcon />
          </div>
        )}
      </div>
      {!isGenerated && (
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <GenerateButton
            isUnlocked={isUnlocked}
            handleClick={() => openModal(conceptSlug)}
          />
        </div>
      )}
      {isGenerated && type === 'list' && (
        <h2
          className={`bg-golden-gradient-2 w-[120%] bg-clip-text text-transparent font-bold ${
            isLoading ? 'text-sm mt-2' : 'text-lg mt-4'
          } text-center transition-all duration-300 golden-glow-text leading-5  absolute  left-1/2 translate-x-[-50%] `}
        >
          {userConcept?.name}
        </h2>
      )}
      {isGenerated && type === 'tree' && (
        <div className="absolute top-[105%] left-1/2 translate-x-[-50%] w-[180%] text-center">
          <GradientText
            text={userConcept.name}
            fontSize="14px"
            lineHeight="16px"
          />
        </div>
      )}
    </div>
  );
};

export default ConceptBox;
