import Button from '@/shared/Button';
import GradientText from '@/shared/GradientText';
import { UserArtifact } from '@/types';
import { useEffect, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SelectArtifactImageStepProps {
  userArtifact: UserArtifact;
  onSelect: (imageUrl: string) => void;
}
//! verificar aqui a existem de images, se precisa de atenção
const SelectArtifactImageStep = ({
  userArtifact,
  onSelect,
}: SelectArtifactImageStepProps) => {
  const images = userArtifact.images;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const imageWidth = 200;
  const imageHeight = (imageWidth * 4) / 3;

  const handleSlideChange = (swiper: SwiperType) => {
    setSelectedIndex(swiper.activeIndex);
  };

  const handleConfirm = () => {
    onSelect(images?.[selectedIndex].url || '');
  };

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(selectedIndex, 0);
    }
  }, [swiper, selectedIndex]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full p-4 overflow-x-hidden">
      <GradientText
        text={`Escolha a imagem do seu Espelho Cósmico`}
        fontSize="32px"
        lineHeight="32px"
      />

      <p className="text-center">
        Você tem 6 variações do seu Espelho Mágico para escolher
      </p>

      <div className="w-[200%]">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          initialSlide={selectedIndex}
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
          className="mySwiper py-10"
        >
          {images?.map((image, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <SwiperSlide
                key={image.url}
                className={`${isSelected ? 'z-10' : 'z-0'}`}
              >
                <div
                  className={`relative cursor-pointer rounded-lg overflow-hidden w-[${imageWidth}px] h-[${imageHeight}px] transition-all duration-300 ease-in-out ${
                    isSelected
                      ? 'scale-125 golden-glow z-10'
                      : 'border-1 border-transparent z-0 opacity-80'
                  }`}
                  onClick={() => setSelectedIndex(idx)}
                >
                  <div className="bg-golden-gradient-3 p-[2px]">
                    <img
                      src={image.url}
                      alt={`Concept Image ${idx + 1}`}
                      className={`w-[${imageWidth}px] h-[${imageHeight}px] object-cover rounded-lg mx-auto transition-opacity duration-300 ease-in-out ${
                        isSelected ? 'opacity-100' : 'opacity-60'
                      }`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <p className="mt-4 text-base font-semibold text-oldgoldlight text-center">
        Escolha com cuidado. A seleção é permanente, e não poderá ser alterada
        futuramente.
      </p>

      <div className="">
        <Button
          variant="medium"
          base="golden"
          onClick={handleConfirm}
          text="CONFIRMAR"
        />
      </div>
    </div>
  );
};

export default SelectArtifactImageStep;
