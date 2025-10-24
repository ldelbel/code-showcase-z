import Banner from '@/shared/Banner';
import GradientText from '@/shared/GradientText';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface PreStepProps {
  nextStep: () => void;
}

const PreStep: React.FC<PreStepProps> = ({ nextStep }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      nextStep();
    }, 7000);

    return () => clearTimeout(timer);
  }, [nextStep]);

  return (
    <motion.div 
      className="w-full flex flex-col items-center justify-center gap-6 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 1 }}
    >
      <motion.div 
        className="mb-4"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1
          className="text-3xl text-white font-bold ml-4"
          style={{
            textShadow: `
              2px 7px 5px rgba(0, 0, 0, 0.7),
              -1px -1px 6px rgba(255, 255, 255, 0.4)
            `,
          }}
        >
          Revele o seu
        </h1>
        <GradientText text={"Espelho Cósmico"} fontSize="36px" />
      </motion.div>
      <motion.div 
        className='w-[99vw]'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Banner />
      </motion.div>
      <motion.span 
        className="text-customYellow2 text-center text-sm font-bold mt-4"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Contemple-se com os olhos do Universo.
      </motion.span>
    </motion.div>
  );
};

export default PreStep;
