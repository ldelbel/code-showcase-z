import React from 'react';

interface GradientTextProps {
  text: string;
  fontWeight?: number | string;
  fontSize?: string;
  lineHeight?: string;
  fontFamily?: string;
  small?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  fontWeight = '700',
  fontSize = '40px',
  lineHeight = '48px',
  fontFamily = 'inter',
  small = false,
}) => {
  return (
    <div
      className="text-golden-container relative z-0 "
      style={{ fontWeight, fontSize, lineHeight, fontFamily }}
    >
      <div
        className={`${
          small ? 'text-golden-shadow-small' : 'text-golden-shadow'
        }`}
        style={{ fontWeight, fontSize, fontFamily }}
      >
        {text}
      </div>
      <div
        className={`${small ? 'text-golden-small' : 'text-golden'}`}
        style={{ fontWeight, fontSize, fontFamily }}
      >
        {text}
      </div>
    </div>
  );
};

export default GradientText;
