import Footer from '@/shared/Footer';
import GradientLine from '@/shared/GoldenLine';
import GradientText from '@/shared/GradientText';
import Stepper from '@/shared/Stepper';
import { useUserStore } from '@/store/useStore';
import { lang } from '@/utils/lang';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Archetype } from '../../types';
import Home from './Icons/Home';
import { PreStep, Step1, Step2, Step3, Step4, Step5, Step6 } from './steps';

export interface StepsControl {
  nextStep?: () => void;
  prevStep?: () => void;
}

export interface ImageProps {
  url: string | null;
  id: string | null;
}

const translations = {
  'pt-br': {
    titlePrefix: 'Seu',
    titleMain: 'Espelho Cósmico',
    description:
      'Desvende seus poderes ocultos e descubra a essência da sua identidade cósmica',
    noArchetypes: 'Nenhum arquétipo disponível.',
    noArchetypeSelected: 'Nenhum arquétipo selecionado.',
    noImageSelected: 'Nenhuma imagem selecionada.',
  },
  'en-us': {
    titlePrefix: 'Your',
    titleMain: 'Cosmic Mirror',
    description:
      'Unveil your hidden powers and discover the essence of your cosmic identity',
    noArchetypes: 'No archetypes available.',
    noArchetypeSelected: 'No archetype selected.',
    noImageSelected: 'No image selected.',
  },
};

const t = translations[lang];

const Wizard = () => {
  const navigate = useNavigate();
  const { userProfile } = useUserStore();
  const [step, setStep] = useState(0);
  const [archetypeData, setArchetypeData] = useState<Archetype[] | null>(null);
  const [selectedArchetype, setSelectedArchetype] = useState<Archetype | null>(
    null
  );
  const [selectedImage, setSelectedImage] = useState<ImageProps>({
    id: null,
    url: null,
  });
  const [userPhoto, setUserPhoto] = useState<ImageProps>({
    url: null,
    id: null,
  });

  useEffect(() => {
    if (userProfile?.userPhotoUrl && userProfile?.userPhotoId) {
      setUserPhoto({
        url: userProfile.userPhotoUrl,
        id: userProfile.userPhotoId,
      });
    }
  }, [userProfile]);

  const nextStep = () => {
    console.log('Moving to the next step:', step + 1);
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step === 2) {
      setSelectedArchetype(null);
      setSelectedImage({ id: null, url: null });
    } else if (step === 3) {
      setSelectedImage({ id: null, url: null });
    }
    setStep((prev) => prev - 1);
  };

  const updateUserPhoto = (photoUrl: string, photoId: string | null) => {
    setUserPhoto({ url: photoUrl, id: photoId });
  };

  const updateSelectedImage = (imageId: string, imageUrl: string) => {
    setSelectedImage({ id: imageId, url: imageUrl });
  };

  const updateSelectedArchetype = (archetype: Archetype) => {
    setSelectedArchetype(archetype);
  };

  const renderStep = () => {
    const stepContent = (() => {
      switch (step) {
        case 0:
          return <PreStep nextStep={nextStep} />;
        case 1:
          return (
            <Step1 setArchetypeData={setArchetypeData} nextStep={nextStep} />
          );
        case 2:
          return archetypeData ? (
            <Step2
              archetypeData={archetypeData}
              nextStep={nextStep}
              prevStep={prevStep}
              setSelectedArchetype={updateSelectedArchetype}
            />
          ) : (
            <p className="text-red-500">{t.noArchetypes}</p>
          );
        case 3:
          return selectedArchetype ? (
            <Step3
              archetype={selectedArchetype}
              nextStep={nextStep}
              prevStep={prevStep}
              setSelectedImage={updateSelectedImage}
            />
          ) : (
            <p className="text-red-500">{t.noArchetypeSelected}</p>
          );
        case 4:
          return (
            <Step4
              nextStep={nextStep}
              prevStep={prevStep}
              userPhotoUrl={userPhoto.url}
              setUserPhoto={updateUserPhoto}
            />
          );
        case 5:
          return selectedImage.url ? (
            <Step5
              nextStep={nextStep}
              prevStep={prevStep}
              selectedImage={selectedImage}
              userPhotoUrl={userPhoto.url || ''}
              selectedArchetypeDataId={selectedArchetype?.id || null}
            />
          ) : (
            <p className="text-red-500">{t.noImageSelected}</p>
          );
        case 6:
          return <Step6 />;
        default:
          return null;
      }
    })();

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {stepContent}
        </motion.div>
      </AnimatePresence>
    );
  };

  if (step === 6) {
    return (
      <div className="min-h-dvh flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center relative">
          <div className="w-full">{renderStep()}</div>
        </div>
      </div>
    );
  }

  if (step === 0) {
    return (
      <div className="min-h-dvh flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center relative">
          <div className="w-full">{renderStep()}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center relative">
        <div className="fixed top-0 left-0 right-0 flex flex-col items-center justify-center z-10 pt-5">
          <div className="mb-4">
            <h1
              className="text-3xl text-white font-bold ml-4"
              style={{
                textShadow: `
              2px 7px 5px rgba(0, 0, 0, 0.7),
              -1px -1px 6px rgba(255, 255, 255, 0.4)
            `,
              }}
            >
              {t.titlePrefix}
            </h1>
            <GradientText text={t.titleMain} fontSize="36px" />
          </div>
          <div className="mb-2 w-[90vw]">
            <GradientLine />
          </div>
          <div className="md:mb-2 tall:mb-8 max-w-[360px]">
            <p className="text-center text-md bg-golden-gradient bg-clip-text text-transparent text-shadow">
              {t.description}
            </p>
          </div>
          <div className="w-[80vw]">
            <Stepper currentStep={step} totalSteps={5} />
          </div>
        </div>
        <div className="mt-52 w-full">{renderStep()}</div>
        <div
          className="absolute bottom-1 left-2 cursor-pointer"
          onClick={() => navigate('/main')}
        >
          <Home />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wizard;
