import ImageCarousel from '@/pages/Wizard/steps/step3/components/ImageCarousel';
import Button from '@/shared/Button';
import { lang } from '@/utils/lang';
import { useState } from 'react';
import { Archetype, ArchetypeImage } from '../../../../types';

const translations = {
  'pt-br': {
    instruction: 'Escolha a imagem base para dar vida ao seu personagem',
    errorMessage: 'Erro: Dados do arquétipo não estão disponíveis.',
    prevButton: 'ANTERIOR',
    nextButton: 'PRÓXIMO',
  },
  en: {
    instruction: 'Choose the foundation image to bring your character to life',
    errorMessage: 'Error: Archetype data is unavailable.',
    prevButton: 'PREV',
    nextButton: 'NEXT',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en'];

const Step3 = ({
  nextStep,
  prevStep,
  archetype,
  setSelectedImage,
}: {
  nextStep: () => void;
  prevStep: () => void;
  archetype: Archetype;
  setSelectedImage: (imageId: string, imageUrl: string) => void;
}) => {
  const [selectedImage, setSelectedImageState] = useState<{
    id: string | null;
    url: string | null;
  }>({ id: null, url: null });

  const handleImageSelection = (image: ArchetypeImage) => {
    const { leonardoId, url } = image;
    setSelectedImageState({ id: leonardoId, url });
    setSelectedImage(leonardoId, url);
  };

  if (!archetype) {
    return <p className="text-red-500">{t.errorMessage}</p>;
  }

  return (
    <div className="h-[55dvh] w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-between">
      <div className="w-[65vw]">
        <h2 className="text-lg font-semibold text-oldgoldlight text-shadow">
          {t.instruction}
        </h2>
      </div>
      <div className="w-[100vw] h-[300px] mt-2">
        <ImageCarousel
          images={archetype.images}
          onImageSelect={handleImageSelection}
          selectedImageId={selectedImage?.id}
        />
      </div>
      <div className="mt-2 flex gap-5">
        <Button
          variant="silver-medium"
          base="silver"
          text={t.prevButton}
          type="submit"
          onClick={prevStep}
        />
        <Button
          variant="medium"
          base="golden"
          text={t.nextButton}
          type="submit"
          onClick={nextStep}
          disabled={!selectedImage.id}
        />
      </div>
    </div>
  );
};

export default Step3;
