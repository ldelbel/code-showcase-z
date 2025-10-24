import { ImageContext } from '@/context/ImageContext';
import { useContext } from 'react';

export const useImageModal = () => {
  const context = useContext(ImageContext);
  if (!context)
    throw new Error('useImageModal must be used within ImageProvider');
  return context;
};
