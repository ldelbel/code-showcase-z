import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
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
    setRotation((prev) => prev + direction * -60);
  };

  useEffect(() => {
    const updateFaceDistance = () => {
      const newDistance = `${window.innerWidth / 2 / Math.tan(Math.PI / 6)}px`;
      document.documentElement.style.setProperty(
        '--face-distance',
        newDistance
      );
    };
    updateFaceDistance();
    window.addEventListener('resize', updateFaceDistance);
    return () => window.removeEventListener('resize', updateFaceDistance);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] overflow-y-auto overflow-x-hidden">
      {/* Pagination Dots */}
      <div className="absolute top-2 left-0 right-0 z-20">
        <PaginationDots
          total={items.length}
          currentPage={currentPage}
          onPageChange={swipePage}
        />
      </div>

      {/* Rotating Prism Container */}
      <motion.div
        className="absolute inset-0"
        style={{
          width: '100vw',
          height: '100%',
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
        }}
        animate={{ rotateY: rotation }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(_event, info) => {
          if (info.offset.x > 100) swipePage(-1);
          else if (info.offset.x < -100) swipePage(1);
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.slug || item.id}
            className="absolute inset-0 flex flex-col items-center text-white text-4xl font-bold shadow-2xl pt-5"
            style={{
              backgroundColor: 'transparent',
              width: '100vw',
              height: '100%',
              transform: `rotateY(${
                index * 60
              }deg) translateZ(var(--face-distance, ${faceDistance}))`,
              backfaceVisibility: 'hidden',
              pointerEvents: currentPage === index ? 'auto' : 'none',
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
