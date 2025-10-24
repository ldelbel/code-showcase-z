import { useImageModal } from '@/hooks/useImageModal';
import { motion } from 'framer-motion';
import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const Chart = ({ wheel }: { wheel: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { showImage } = useImageModal();

  console.log('Wheel', wheel);

  return (
    <div
      className="w-[153px] h-[153px] bg-golden-gradient rounded-full p-1 shadow-black-white relative flex items-center justify-center"
      onClick={() => showImage({ url: wheel, isSVG: true })}
    >
      <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
        <div className="w-[140px] h-[140px] overflow-hidden flex items-center justify-center relative">
          {!imageLoaded && (
            <LoadingSpinner size={5} border={2} className="absolute" />
          )}

          <motion.img
            width={140}
            height={140}
            src={wheel}
            aria-label="wheel"
            className="absolute"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={imageLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
