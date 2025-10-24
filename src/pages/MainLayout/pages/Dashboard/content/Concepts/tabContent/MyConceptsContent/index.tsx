import PaginationDots from '@/shared/PaginationDots';
import { useUserStore } from '@/store/useStore';
import { useMemo, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './components/Card';

const MyConceptsContent: React.FC = () => {
  const { concepts, userConcepts } = useUserStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  const conceptsData = useMemo(() => {
    return concepts.map((concept) => ({
      ...concept,
      userConcept:
        userConcepts.find((uc) => uc.conceptSlug === concept.slug) || null,
    }));
  }, [concepts, userConcepts]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative overflow-y-auto">
      <div className="mt-6 mb-8">
        <PaginationDots 
          total={conceptsData.length} 
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
        {conceptsData.map((concept, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Card concept={concept} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyConceptsContent;
