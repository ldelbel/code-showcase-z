import Button from '@/shared/Button';
import GradientText from '@/shared/GradientText';
import { UserConceptData } from '@zodic/shared/types';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SelectImageStepProps {
  userConcept: UserConceptData;
  onSelect: (imageIdx: number) => void;
}

const conditionalText = {
  crown: 'da sua Coroa',
  scepter: 'do seu Cetro',
  amulet: 'do seu Amuleto',
  orb: 'do seu Orbe',
  lantern: 'da sua Lanterna',
  ring: 'do seu Anel',
};

const SelectImageStep = ({ userConcept, onSelect }: SelectImageStepProps) => {
  const images = userConcept.images.post;
  const [selectedIndex, setSelectedIndex] = useState(userConcept.imageIdx || 1);
  const [swiper, setSwiper] = useState<any>(null);

  const imageWidth = 200;
  const imageHeight = (imageWidth * 4) / 3; // 200 * 4/3 = 266.67px

  const handleSlideChange = (swiper: any) => {
    setSelectedIndex(swiper.activeIndex);
  };

  console.log('SelectedIndex', selectedIndex);

  const handleConfirm = () => {
    onSelect(selectedIndex);
  };

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(selectedIndex, 0);
    }
  }, [swiper, selectedIndex]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full p-4 overflow-x-hidden">
      <GradientText
        text={`Escolha a imagem ${conditionalText[userConcept.conceptSlug]}`}
        fontSize="32px"
        lineHeight="32px"
      />

      <p className="text-center">
        Cada conceito apresenta três opções para você escolher
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
          {images.map((image, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <SwiperSlide
                key={idx}
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

export default SelectImageStep;
