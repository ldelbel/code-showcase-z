import ArrowDown from '@/assets/ArrowDown';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface BaseData {
  id: string;
  title?: string;
}

interface CardProps<T extends BaseData> {
  data: T;
  isExpanded: boolean;
  onExpand: (id: string) => void;
  renderHeader: (data: T) => React.ReactNode;
  renderDetails: (data: T) => React.ReactNode;
  title?: string;
}

const Card = <T extends BaseData>({
  data,
  isExpanded,
  onExpand,
  renderHeader,
  renderDetails,
  title,
}: CardProps<T>) => {
  console.log('ID', data.id);

  const cardVariants = {
    collapsed: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const detailsVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      marginTop: 12,
      transition: { duration: 0.4, ease: 'easeInOut', delay: 0.1 },
    },
  };

  const dividerVariants = {
    hidden: {
      opacity: 0,
      scaleX: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.3, ease: 'easeInOut', delay: 0.1 },
    },
  };

  const arrowVariants = {
    collapsed: { rotate: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    expanded: { rotate: 180, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <div className="card-container relative my-1">
      {title && (
        <div className="absolute -top-8 left-2 text-oldgoldlight text-lg font-medium">
          {title}
        </div>
      )}
      <motion.div
        className="planet-card py-3"
        initial="collapsed"
        animate={isExpanded ? 'expanded' : 'collapsed'}
        variants={cardVariants}
      >
        <div onClick={() => onExpand(data.id)}>{renderHeader(data)}</div>
        <AnimatePresence>
          {isExpanded && (
            <>
              <motion.div
                className="w-full flex justify-center mt-3"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dividerVariants}
              >
                <div className="w-11/12 h-[1px] bg-golden-gradient"></div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={detailsVariants}
              >
                {renderDetails(data)}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className={`absolute left-[47%] transform -translate-x-[50%] ${
          isExpanded ? '-bottom-2' : '-bottom-4'
        }`}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        variants={arrowVariants}
      >
        <div
          className="w-6 h-6 cursor-pointer transition-transform duration-300 flex items-center justify-center"
          onClick={() => onExpand(data.id)}
        >
          <ArrowDown />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
