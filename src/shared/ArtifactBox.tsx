import { fetchUserArtifact } from '@/api/client/artifacts';
import { useModal } from '@/hooks/useModal';
import { useUserStore } from '@/store/useStore';
import { lang } from '@/utils/lang';
import { useEffect, useRef } from 'react';
import GenerateButton from './GenerateButton';
import GradientText from './GradientText';
import CheckIcon from './Icons/Check';
import EyeIcon from './Icons/EyeIcon';
import LoadingSpinner from './LoadingSpinner';
import Mirror from '/mirror2.png';
import Mirror3 from '/mirror3.png';

const translations = {
  'pt-br': {
    cosmicMirror: 'Espelho Cósmico',
    crafting: 'Criando...',
    magicInMotion:
      'A magia está em movimento! Por favor, aguarde enquanto criamos seu Espelho Cósmico.',
    reveal: 'Revelar',
    concept: 'Conceito:',
    theCrown: 'A Coroa',
    free: 'grátis',
  },
  'en-us': {
    cosmicMirror: 'Cosmic Mirror',
    crafting: 'Crafting...',
    magicInMotion:
      'The magic is in motion! Please hold tight as we craft your Cosmic Mirror.',
    reveal: 'Reveal',
    concept: 'Concept:',
    theCrown: 'The Crown',
    free: 'free',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const formatArtifactName = (name: string) => {
  const translations: Record<string, Record<string, string>> = {
    'cosmic-mirror': {
      'en-us': 'Cosmic Mirror',
      'pt-br': 'Espelho Cósmico',
    },
  };

  if (translations[name]?.[lang]) {
    return translations[name][lang];
  }

  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

type ArtifactBoxProps = {
  width?: number;
  height?: number;
  hasBorder?: boolean;
  type?: ArtifactBoxType;
  artifactName: string;
};

type ArtifactBoxType = 'home' | 'list' | 'tree';

const ArtifactBox = ({
  width = 160,
  hasBorder: propHasBorder = false,
  type = 'home',
  artifactName,
}: ArtifactBoxProps) => {
  const { userArtifacts, setUserArtifacts } = useUserStore();
  const { userProducts } = useUserStore();
  const { openUserArtifactModal, openCommercialArtifactModal } = useModal();
  const height = width * (5 / 4);

  const cosmicMirror = userArtifacts?.find(
    (a) => a.artifactName === artifactName
  );

  console.log('cosmicMirror', cosmicMirror);

  const cosmicMirrorProduct = userProducts.find(
    (up) => up.productSlug === 'cosmic-mirror'
  );
  const isUnlocked = cosmicMirrorProduct?.status === 'unlocked';

  const isLoading = cosmicMirror?.status === 'pending';
  const isCompleted = cosmicMirror?.status === 'completed';
  const isRevealed = cosmicMirror?.status === 'revealed';

  const hasBorder = isCompleted || isRevealed || propHasBorder;

  const isPollingRef = useRef(false);
  const pollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleGenerate = () => {
    if (!isRevealed && !isCompleted) {
      openCommercialArtifactModal(true);
    }
  };

  const pollArtifactStatus = async () => {
    const POLL_INTERVAL = 8000;
    const MAX_ATTEMPTS = 20;
    const RETRY_DELAY = 2000;

    let attempts = 0;

    while (attempts < MAX_ATTEMPTS && isPollingRef.current) {
      console.log(
        `[${new Date().toISOString()}] 📡 Polling artifact status (attempt ${
          attempts + 1
        }/${MAX_ATTEMPTS}) for ${artifactName}`
      );
      try {
        const response = await fetchUserArtifact(artifactName);
        console.log(
          `[${new Date().toISOString()}] 🌐 [pollArtifactStatus] Response:`,
          response
        );

        const updatedArtifact = useUserStore
          .getState()
          .userArtifacts.find((a) => a.artifactName === artifactName);

        if (
          updatedArtifact &&
          (updatedArtifact.status === 'completed' ||
            updatedArtifact.status === 'revealed')
        ) {
          console.log(
            `[${new Date().toISOString()}] ✅ [pollArtifactStatus] Polling complete: Artifact status updated to ${
              updatedArtifact.status
            }`
          );
          if (isPollingRef.current && updatedArtifact) {
            const updatedArtifacts = userArtifacts.map((a) =>
              a.artifactName === artifactName ? updatedArtifact : a
            );
            setUserArtifacts(updatedArtifacts);
          }
          return;
        }

        await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));
        attempts++;
      } catch (error) {
        console.error(
          `[${new Date().toISOString()}] ❌ [pollArtifactStatus] Error:`,
          error instanceof Error ? error.message : String(error)
        );

        console.log(
          `[${new Date().toISOString()}] Retrying after error with delay of ${RETRY_DELAY}ms`
        );
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        attempts++;
      }
    }

    if (!isPollingRef.current) {
      console.log(
        `[${new Date().toISOString()}] 🛑 [pollArtifactStatus] Polling stopped due to component unmount`
      );
      throw new Error('Polling stopped');
    }

    console.error(
      `[${new Date().toISOString()}] ⏰ [pollArtifactStatus] Polling timed out after max attempts`
    );
    throw new Error('Polling timed out after max attempts');
  };

  useEffect(() => {
    if (!isLoading) {
      console.log(
        `[${new Date().toISOString()}] Artifact ${artifactName} is not in pending state, skipping polling`
      );
      if (pollTimeoutRef.current) {
        clearTimeout(pollTimeoutRef.current);
        pollTimeoutRef.current = null;
      }
      isPollingRef.current = false;
      return;
    }

    if (!isPollingRef.current) {
      isPollingRef.current = true;
      pollTimeoutRef.current = setTimeout(async () => {
        try {
          await pollArtifactStatus();
        } catch (error) {
          if (isPollingRef.current) {
            console.error(
              `[${new Date().toISOString()}] ❌ Polling error:`,
              error instanceof Error ? error.message : String(error)
            );
          }
        }
      }, 1000);
    }

    return () => {
      isPollingRef.current = false;
      if (pollTimeoutRef.current) {
        clearTimeout(pollTimeoutRef.current);
        pollTimeoutRef.current = null;
      }
      console.log(
        `[${new Date().toISOString()}] 🛑 Stopped polling for ${artifactName} on cleanup`
      );
    };
  }, [isLoading, artifactName]);

  console.log('isRevealed', isRevealed);
  console.log('cosmicMirror?.status', cosmicMirror?.status);

  return (
    <div
      className={`m-1 rounded-md relative transition-all duration-300 ${
        isRevealed && type === 'list' && 'mb-20'
      } ${type === 'home' ? 'mt-10' : ''}
        ${isRevealed ? 'golden-glow' : ''} 
        ${
          hasBorder
            ? 'bg-golden-conic p-[1px]'
            : `${
                isLoading ? 'bg-golden-conic' : 'bg-DarkGray p-1'
              } shadow-black-white`
        }`}
      style={{ width, height }}
      onClick={() => {
        if (isRevealed || isCompleted) {
          openUserArtifactModal(artifactName);
        }
      }}
    >
      {type === 'home' && !isLoading && (
        <>
          {isRevealed ? (
            <div
              className="absolute -top-7 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[120%] text-center"
              style={{ zIndex: 1 }}
            >
              <p className="text-xs font-bold text-customGray2 -mb-[2px]">
                {formatArtifactName(artifactName)}
              </p>
              <GradientText
                text={cosmicMirror?.archetypeData?.name || ''}
                fontSize="16px"
                lineHeight="18px"
              />
            </div>
          ) : !isCompleted ? (
            <div
              className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full text-center"
              style={{ zIndex: 1 }}
            >
              <p className="text-whitesmoke text-lg font-normal font-roboto glow-text text-shadow-tight">
                {formatArtifactName(artifactName)}
              </p>
              <p className="font-rajdhani text-white font-medium text-xxs -mt-1">
                {t.concept}{' '}
                <span className="text-xxs bg-golden-gradient-4 bg-clip-text text-transparent font-rajdhani font-bold">
                  {t.theCrown}
                </span>
              </p>
            </div>
          ) : null}
        </>
      )}

      {isLoading ? (
        <div className="w-full h-full bg-golden-conic rounded-md flex flex-col items-center justify-between py-3">
          <h2 className="font-roboto carved-text font-black text-base">
            {t.cosmicMirror}
          </h2>
          <div className="flex flex-col items-center justify-center gap-[2px]">
            <p className="font-roboto font-black text-xxs carved-text">
              {t.crafting}
            </p>
            <div className="w-16 h-16 bg-golden-gradient rounded-md p-[1px]">
              <div className="w-full h-full bg-customBrown2 rounded-md shadow-inset-alt flex items-center justify-center">
                <LoadingSpinner size={8} border={6} />
              </div>
            </div>
          </div>
          <div className="w-full bg-golden-gradient rounded-md p-[1px]">
            <div className="w-full h-full bg-DarkGray rounded-md shadow-inset-alt text-center p-[4px]">
              <p className="font-roboto text-xxxs text-oldgolddark">
                {t.magicInMotion}
              </p>
            </div>
          </div>
        </div>
      ) : isCompleted ? (
        <div className="w-full h-full bg-golden-conic rounded-md flex flex-col items-center py-3 relative">
          <h2 className="font-roboto carved-text font-black text-center">
            {formatArtifactName(artifactName)}
          </h2>
          <div className="flex flex-col items-center justify-center gap-[2px]">
            <div
              className="px-3 py-1 absolute top-1/2 right-1/2 translate-x-[50%] translate-y-[-50%] bg-customBrown2 rounded-md shadow-inset-alt flex items-center justify-center border border-LightGreen cursor-pointer hover:scale-105 hover:shadow-glow transition-all duration-300"
              onClick={handleGenerate}
            >
              <p className="font-medium bg-golden-gradient-2 bg-clip-text text-transparent">
                {t.reveal}
              </p>
            </div>
          </div>
          <div className="w-8 h-8 bg-golden-gradient rounded-full p-[1px] absolute bottom-0 right-1/2 translate-x-[50%] translate-y-[50%]">
            <div className="w-full h-full bg-customBrown2 rounded-full shadow-inset-alt text-center p-[4px] flex items-center justify-center">
              <CheckIcon width={19} height={19} />
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-md w-full h-full bg-DarkGray transition-all duration-300">
          <div className={`${isRevealed ? '' : 'p-[2px]'} w-full h-full`}>
            <div
              className={`w-full h-full relative transition-all duration-300 rounded-md ${
                !isRevealed && !isCompleted && 'opacity-30'
              }`}
              style={{
                backgroundImage: `url(${
                  isRevealed && cosmicMirror?.chosenImageUrl
                    ? cosmicMirror.chosenImageUrl
                    : isCompleted
                    ? Mirror3
                    : Mirror
                })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          {(isCompleted || isRevealed) && (
            <div className="w-[28px] h-[28px] transition-all duration-300 absolute bottom-0 right-1">
              <EyeIcon />
            </div>
          )}
        </div>
      )}

      {(!cosmicMirror || cosmicMirror.status === 'pending') && !isLoading && (
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <GenerateButton
            handleClick={handleGenerate}
            isUnlocked={isUnlocked}
          />
        </div>
      )}
      {isRevealed && type === 'list' && (
        <h2 className="bg-golden-gradient-2 w-[120%] bg-clip-text text-transparent font-bold text-lg text-center transition-all duration-300 golden-glow-text leading-5 mt-4 absolute -bottom-50 left-1/2 translate-x-[-50%]">
          {cosmicMirror.archetypeData?.name}
        </h2>
      )}
    </div>
  );
};

export default ArtifactBox;
