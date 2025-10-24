import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, className }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className='relative bg-golden-gradient rounded-md w-6 h-6'>
        <div
          className={`w-5 h-5 rounded flex items-center justify-center transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          ${checked
              ? 'bg-transparent'
              : 'bg-DarkGray'} 
          ${className}`}
          onClick={() => onChange(!checked)}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          )}
        </div>
      </div>
      {label && <span className="text-oldgoldlight">{label}</span>}
    </label>
  );
};

export default Checkbox;
