import ProgressLoad from '@/shared/ProgressLoad';
import { useEffect, useState } from 'react';

const loadingMessages = [
  'Consultando as estrelas...',
  'Rastreando os sinais do cosmos...',
  'Decifrando os insights cósmicos...',
  'Invocando a sabedoria das esferas...',
  'Traduzindo a linguagem dos astros...',
  'Construindo as palavras reveladoras ...',
  'Gerando o seu Conceito celestial...',
  'Refletindo sua luz nas águas celestes...',
];

interface ConceptLoadingProps {
  responseStatus?: number;
  onComplete?: () => void;
  fadeOut?: boolean;
}

const ConceptLoading = ({ responseStatus, onComplete, fadeOut }: ConceptLoadingProps) => {
  const [currentMessage, setCurrentMessage] = useState(loadingMessages[0]);

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

  return (
    <div className={`h-full text-center relative transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className='w-full h-20 mb-1 absolute top-[32%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <p className="text-oldgoldlight text-2xl font-semibold font-roboto animate-pulse text-shadow">
          {currentMessage}
        </p>
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <ProgressLoad
          responseStatus={responseStatus}
          onComplete={onComplete}
        />
      </div>
    </div>
  );
};

export default ConceptLoading;