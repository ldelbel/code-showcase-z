import { useFetchArchetypes } from '@/api/hooks';
import Button from '@/shared/Button';
import ConceptBox from '@/shared/ConceptBox';

import ProgressLoad from '@/shared/ProgressLoad';
import { useUserStore } from '@/store/useStore';
import { lang } from '@/utils/lang';
import { useEffect, useState } from 'react';
import { ArchetypeData } from '../../../../types';

const translations = {
  'pt-br': {
    initialMessage:
      'Arquétipos serão criados exclusivamente para você, inspirados pela sua Coroa.',
    generatingMessage: 'Gerando arquétipos...',
    errorMessage: (error: string) => `Erro ao gerar arquétipos: ${error}`,
    retryButton: 'TENTAR NOVAMENTE',
    nextButton: 'PRÓXIMO',
  },
  'en-us': {
    initialMessage:
      'Archetypes will be crafted uniquely for you, inspired by your Crown.',
    generatingMessage: 'Generating archetypes...',
    errorMessage: (error: string) => `Error generating archetypes: ${error}`,
    retryButton: 'RETRY',
    nextButton: 'NEXT',
  },
};

const loadingMessages = [
  'Consultando as estrelas...',
  'Decifrando os insights cósmicos...',
  'Construindo as palavras reveladoras ...',
  'Gerando o seu Conceito celestial...',
];

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

const Step1 = ({
  nextStep,
  setArchetypeData,
}: {
  nextStep: () => void;
  setArchetypeData: (data: ArchetypeData) => void;
}) => {
  const [fetchEnabled, setFetchEnabled] = useState(false);
  const [hasAdvanced, setHasAdvanced] = useState(false);
  const [forceLoading, setForceLoading] = useState(false);
  const { userConcepts } = useUserStore();
  const crownIsGenerated = userConcepts.find((c) => c.conceptSlug === 'crown');
  const [responseStatus, setResponseStatus] = useState<number | undefined>(
    undefined
  );
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(loadingMessages[0]);

  const {
    status,
    data: archetypes,
    error,
  } = useFetchArchetypes(lang, fetchEnabled);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (status === 'loading') {
      setResponseStatus(undefined);
    } else if (status === 'processing') {
      setResponseStatus(202);
    } else if (status === 'success') {
      setResponseStatus(201);
    }
  }, [status]);

  useEffect(() => {
    if (
      status === 'success' &&
      archetypes &&
      !hasAdvanced &&
      isLoadingComplete
    ) {
      setArchetypeData(archetypes);
      setHasAdvanced(true);
      setTimeout(() => {
        nextStep();
      }, 2000);
    }
  }, [
    status,
    archetypes,
    hasAdvanced,
    setArchetypeData,
    nextStep,
    isLoadingComplete,
  ]);

  const handleNext = () => {
    setFetchEnabled(true);
    setForceLoading(true);
  };

  const handleRetry = () => {
    setFetchEnabled(false);
    setHasAdvanced(false);
    setForceLoading(false);
    setTimeout(() => setFetchEnabled(true), 0);
  };

  const onComplete = () => {
    setIsLoadingComplete(true);
  };

  const isLoading =
    forceLoading || status === 'loading' || status === 'processing';
  const showInitialContent = !fetchEnabled && !isLoading && !error;

  console.log('isLoading', isLoading);

  return (
    <div
      className={`h-[55dvh] flex flex-col items-center justify-between text-center ${
        isLoading ? 'gap-8' : 'gap-14'
      }`}
    >
      <div
        className={` w-[90vw] transition-all duration-300 ease-in-out ${
          showInitialContent
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4 absolute'
        }`}
      >
        <h2 className="text-oldgoldlight font-semibold text-shadow transition-all duration-300 ease-in-out">
          {t.initialMessage}
        </h2>
      </div>
      <ConceptBox
        conceptSlug="crown"
        hasBorder
        type="list"
        width={200}
        isLoading={isLoading}
      />
      <div
        className={`flex flex-col items-center gap-2 mt-5 transition-all duration-1300 ease-in-out ${
          isLoading
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible absolute'
        }`}
      >
        <ProgressLoad responseStatus={responseStatus} onComplete={onComplete} />
        <p className="text-oldgoldlight text-lg font-semibold text-shadow animate-pulse ">
          {currentMessage}
        </p>
      </div>
      {error ? (
        <div className="flex flex-col items-center gap-4 transition-all duration-300 ease-in-out opacity-100">
          <p className="text-red-500 text-center transition-all duration-300 ease-in-out">
            {t.errorMessage(error)}
          </p>
          <Button
            variant="main"
            base="golden"
            text={t.retryButton}
            onClick={handleRetry}
          />
        </div>
      ) : !isLoading ? (
        <div className={`transition-all duration-300 ease-in-out`}>
          <Button
            variant="main"
            base="golden"
            text={t.nextButton}
            onClick={handleNext}
            disabled={!crownIsGenerated}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Step1;
