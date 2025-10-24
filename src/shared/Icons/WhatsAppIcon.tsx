import React from 'react';
import Whatsapp from '/whatsapp.png'

interface WhatsAppIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  width = 34,
  height = 34,
  className = '',
  onClick
}) => {
  return (
    <div className={`w-[${width}px] h-[${height}px] ${className}`} onClick={onClick}>
      <img src={Whatsapp} alt="WhatsApp" />
    </div>
  );
};

export default WhatsAppIcon; 