import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import PaginationDots from './PaginationDots';

interface PageSwipeProps<T> {
  items: T[];
  children: (item: T) => React.ReactNode;
}

const PageSwipe = <T extends { id?: string; slug?: string }>({
  items,
  children,
}: PageSwipeProps<T>) => {
  const [rotation, setRotation] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const faceDistance = useMemo(() => {
    return `${window.innerWidth / 2 / Math.tan(Math.PI / 6)}px`;
  }, []);

  const swipePage = (direction: number) => {
    const nextPage = (currentPage + direction + items.length) % items.length;
    setCurrentPage(nextPage);
    setRotation((prevRotation) => prevRotation + direction * -60);
  };

  return (
    <div className="relative w-full h-auto pb-40">
      <div className="absolute top-2 left-0 right-0">
        <PaginationDots
          total={items.length}
          currentPage={currentPage}
          onPageChange={swipePage}
        />
      </div>

      <div className="absolute inset-0"></div>

      <motion.div
        className="absolute inset-0 h-auto"
        style={{
          position: 'relative',
          width: '100vw',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: rotation }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_event, info) => {
          if (info.offset.x > 100) swipePage(-1);
          if (info.offset.x < -100) swipePage(1);
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.slug || item.id}
            className="absolute inset-0 flex flex-col items-center text-white text-4xl font-bold shadow-2xl pt-5"
            style={{
              backgroundColor: 'transparent',
              width: '100vw',
              height: 'auto',
              transform: `rotateY(${
                index * 60
              }deg) translateZ(${faceDistance})`,
              backfaceVisibility: 'hidden',
            }}
          >
            {children(item)}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PageSwipe;
