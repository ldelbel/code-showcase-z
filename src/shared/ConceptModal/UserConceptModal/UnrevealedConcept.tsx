import { conceptModalTexts } from '@/content';
import SignComposition from '@/pages/MainLayout/pages/Dashboard/content/Concepts/tabContent/MyConceptsContent/components/Card/components/SignComposition';
import Button from '@/shared/Button';
import LockIconButton from '@/shared/Icons/LockIconButton';
import { useUserStore } from '@/store/useStore';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Concept } from '@zodic/shared/types';
import { useNavigate } from 'react-router-dom';
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

interface UnrevealedConceptProps {
  conceptSlug: Concept;
  nextStep: () => void;
  onClose: () => void;
}

const UnrevealedConcept = ({
  conceptSlug,
  nextStep,
  onClose,
}: UnrevealedConceptProps) => {
  const { userProducts } = useUserStore();

  const isCrown = conceptSlug === 'crown';
  const isUnlocked = isCrown
    ? true
    : userProducts.find((up) => up.productSlug === 'concepts')?.status ===
      'unlocked';
  const navigate = useNavigate();

  const handleClick = () => {
    if (isUnlocked) {
      nextStep();
    } else {
      onClose();
      navigate('/main/payment');
    }
  };

  return (
    <div className="h-full mx-4 relative flex flex-col items-center justify-between">
      <div className="flex flex-col max-w-2xl items-center space-y-5">
        <DialogTitle className="text-xl leading-6 font-bold flex flex-col items-center justify-center text-center">
          {lang === 'pt-br' ? 'Revele' : 'Unveil'}
          <div className="w-[130px] h-[1px] bg-white bg-golden-gradient"></div>
          <span className="bg-golden-gradient bg-clip-text text-transparent text-3xl">
            {AstroLabels[conceptSlug][lang]}
          </span>
        </DialogTitle>

        <div className="w-[120px] h-[130px] bg-golden-gradient rounded-md relative">
          <div className="w-[118px] h-[128px] rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-DarkGray">
            <div className="w-[116px] h-[126px] rounded-md bg-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={conceptImages[conceptSlug] || Crown}
                alt="Crown"
                className="w-[115px] h-[125px] opacity-40 rounded-md"
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-center">
          {conceptModalTexts[conceptSlug][lang].intro}
        </p>
        <SignComposition conceptSlug={conceptSlug} />
        <p className="text-oldgoldlight text-sm text-center text-shadow font-semibold">
          {conceptModalTexts[conceptSlug][lang].question}
        </p>
        <p className="text-base text-center font-medium text-[#A47A1E] text-shadow-golden-glow">
          {conceptModalTexts[conceptSlug][lang].cta}
        </p>
      </div>

      {/* <div className='absolute bottom-2'>
        <div className="flex justify-center gap-4 relative">
          <div
            className="absolute -bottom-2 -right-2 pointer-events-none"
            style={{ transform: 'rotate(-17.18deg)', zIndex: 1 }}
          >
            <p
              className="text-LightGreen text-2xl font-semibold"
              style={{
                textShadow: '0px 1px 2px rgba(0, 0, 0, 0.75)',
                fontFamily: 'Rajdhani',
              }}
            >
              Free
            </p>
          </div> */}
      <Button
        variant="medium"
        text={lang === 'pt-br' ? 'GERAR' : 'GENERATE'}
        base="golden"
        onClick={handleClick}
        icon={isUnlocked ? '' : <LockIconButton />}
        iconPosition="left"
      />
    </div>
  );
};

export default UnrevealedConcept;
