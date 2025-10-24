import React from 'react';

interface ErrorIconProps {
  size?: number;
  className?: string;
}

const RedCross: React.FC<ErrorIconProps> = ({ 
  size = 35, 
  className = ''
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 35 35" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect x="0.540039" y="0.165649" width="34" height="34" fill="url(#pattern0_772_363)"/>
      <defs>
        <pattern id="pattern0_772_363" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_772_363" transform="scale(0.0208333)"/>
        </pattern>
        <image 
          id="image0_772_363" 
          width="48" 
          height="48" 
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIElEQVR4nO2Zz0rDMBzHw1AP4lmfwV2WWtK6djpNukcQUURBfA59El9FX8HhJiqo9d/Bg6I204saCVqpY2vTJls66BcCO3TZ55M1P9pfAChSpEiRkci9aU5eefbsoH8nwPYMM81xZROyOhi7XDAOWw5kLafCTl34fr1krALFoQ0EKbaOKbFYQNA7xdYu2wMlqUkZAKWLmtHi4NFx4la+bupwRxV8Z9k2KUFPHD46Aoz2pSR+Vv4/fFTibtHYloZfsm2Kredu+L+Brd1MEz/Uy1PtPvCqJDpJ8L+3E1spT6Se3K9Z5Th4WQkReBpKNKrTIEv4hh2ERCp4go5A1vBqw+FUSqSBp/y6BoJAJveuud52oLBEXHXqV21oH3guKwWvUkIbvAoJ7fAyErmBD3O7aG62BTf2uQs/KUGvuYFP80+cuZCdOJDlDl5EIoTnn3MJHycRhU8UwBrhe0l0w8cK5AE+urHP3cpHN3yMQJAbeB6/Zmy0nd6Vqc/qBx3Pmgd5h0+8hTzNEknwQpvY0yQhAi9cRr0hS4jCCwmQIUtcL5hboo8S/HmIYvSSGwk/xcqHLzgUz89RjB61S/gZ4MPvapfwJeC1S/gK4LVJ3NTg2ki/1J86+tsqlKBmJviRb2w91MtTYUdaNXwaiYCgt8zt9pFu7ia111XAJ1Un6fZ65IDjYCgHHAQ1lR5wdB8x8Y0NBpygUZ1WesRUpEiRImCQ+QY3WUdA/w3MdgAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default RedCross; 