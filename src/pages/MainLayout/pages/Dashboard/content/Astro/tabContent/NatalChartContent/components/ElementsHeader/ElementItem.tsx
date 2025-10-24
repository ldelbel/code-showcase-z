import { elementIcons, ElementSlug } from '@/shared/Icons/maps';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';
import React from 'react';

interface ElementItemProps {
  name: string;
  percentage: number;
  isDominant: boolean;
}

const colorBgTable: Record<string, string> = {
  fire: 'bg-customRed',
  water: 'bg-customBlue',
  earth: 'bg-customGreen2',
  air: 'bg-customYellow',
};
const colorTable: Record<string, string> = {
  fire: 'text-customRed',
  water: 'text-customBlue',
  earth: 'text-customGreen2',
  air: 'text-customYellow',
};

const ElementItem: React.FC<ElementItemProps> = ({
  name,
  percentage,
  isDominant,
}) => {
  return (
    <div className="flex flex-col items-center">
      <p
        className={`${colorTable[name]} ${
          isDominant ? 'golden-glow-text text-customYellow2' : ''
        } `}
      >
        {AstroLabels[name][lang].charAt(0).toUpperCase() +
          AstroLabels[name][lang].slice(1)}
      </p>
      <div
        className={`w-11 h-11 rounded-md flex justify-center items-center ${
          isDominant ? 'golden-glow' : 'shadow-bottom-dark'
        } ${colorBgTable[name]} border-oldgolddark`}
      >
        {elementIcons[name as ElementSlug]({ size: 25 })}
      </div>
      <p
        className={`text-whitesmoke text-base ${
          isDominant ? 'font-bold' : 'font-normal'
        } text-center mt-2 ${isDominant ? 'golden-glow-text' : ''}`}
      >
        {`${Math.round(percentage)}%`}
      </p>
    </div>
  );
};

export default ElementItem;
