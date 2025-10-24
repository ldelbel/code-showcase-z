import Logo from '@/assets/Logo';
import React from 'react';

const Footer: React.FC<{ children?: React.ReactNode }> = () => {
  return (
    <div className='w-screen h-[50px] bg-golden-gradient flex flex-col items-center'>
      <div className='w-full h-[3px] shadow-bottom-dark' />
      <div className="w-full h-[50px] flex items-center justify-center">
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
