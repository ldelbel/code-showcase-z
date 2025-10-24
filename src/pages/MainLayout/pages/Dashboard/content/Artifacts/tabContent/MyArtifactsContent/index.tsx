import PaginationDots from '@/shared/PaginationDots';
import { useUserStore } from '@/store/useStore';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { artifactsData } from '../../mock';
import Card from './components/Card';

const MyArtifactsContent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { concepts } = useUserStore();

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-dvh">
      <div className="mt-6 mb-8">
        <PaginationDots
          total={artifactsData.length}
          currentPage={currentSlide}
          onPageChange={handleSlideChange}
        />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
        className="w-full h-full"
      >
        {concepts.map((concept, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Card concept={concept} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyArtifactsContent;
