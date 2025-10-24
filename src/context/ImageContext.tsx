import ImageModal from '@/shared/ImageModal';
import { createContext, useState } from 'react';

type ImageData = {
  url: string;
  alt?: string;
  isSVG?: boolean;
};

type ImageContextType = {
  showImage: (data: ImageData) => void;
  hideImage: () => void;
};

const ImageContext = createContext<ImageContextType | null>(null);

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  const showImage = (data: ImageData) => setImageData(data);
  const hideImage = () => setImageData(null);

  return (
    <ImageContext.Provider value={{ showImage, hideImage }}>
      {children}
      <ImageModal imageData={imageData} onClose={hideImage} />
    </ImageContext.Provider>
  );
};

export { ImageContext };
