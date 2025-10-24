import GoldenButton from '@/shared/Button';
import PaginationDots from '@/shared/PaginationDots';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import './index.css';

type HomeSectionProps = {
  icon: ReactNode;
  title: string;
  link?: string;
  isCarousel?: boolean;
  total?: number;
  children?: React.ReactNode;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  section: string;
  itemsPerScreen?: number;
};

const HomeSection: React.FC<HomeSectionProps> = ({
  icon,
  title,
  link,
  isCarousel = false,
  children,
  setActiveSection,
  section,
  itemsPerScreen = 2,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const childrenCount = React.Children.count(children);

  const totalPages = Math.ceil(childrenCount / itemsPerScreen);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !isCarousel) return;

    const handleScroll = () => {
      const scrollPosition = carousel.scrollLeft;
      const itemWidth = carousel.offsetWidth;
      const newPage = Math.floor(scrollPosition / itemWidth);
      setCurrentPage(newPage);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [isCarousel]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: page * itemWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={`h-full rounded-md mt-8 bg-DarkGray ${
        isCarousel ? 'section-carousel' : 'section-box'
      }`}
    >
      <div className="flex flex-col absolute -top-6 left-1/2 -translate-x-1/2 text-[#F3F3F3] w-fit">
        <div
          className="h-[2px] w-[94%] right-0 absolute bg-DarkGray3 top-[24px]"
          style={{ zIndex: 1 }}
        />
        <div
          className="flex gap-0.5 relative w-fit justify-center items-center"
          style={{ zIndex: 2 }}
        >
          {icon}
          <h2 className="text-lg font-bold whitespace-nowrap glow-text">
            {title}
          </h2>
        </div>
      </div>
      <div
        className={`${
          isCarousel ? 'carousel min-380:gap-2 min-400:gap-6' : ''
        } ${childrenCount === 1 ? 'justify-center' : ''} `}
        ref={carouselRef}
      >
        {React.Children.map(children, (child) => (
          <div className={`${isCarousel ? 'carousel-item' : ''}`}>{child}</div>
        ))}
      </div>
      {isCarousel && totalPages > 1 && (
        <div className="absolute bottom-5 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <PaginationDots
            total={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
      {link && (
        <div className="flex justify-center items-center absolute -bottom-2.5 left-1/2 -translate-x-1/2">
          <GoldenButton
            variant="small"
            text="VER"
            base="golden"
            onClick={() => setActiveSection(section)}
          />
        </div>
      )}
    </div>
  );
};

export default HomeSection;
