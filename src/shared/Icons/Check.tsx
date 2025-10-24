interface CheckIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const CheckIcon = ({ width = 12, height = 12, className }: CheckIconProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 38 38" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M13.3352 32.0935L1.75802 20.5164C1.16139 19.9197 1.16139 18.9531 1.75802 18.3565L4.85599 15.2585C5.45262 14.6619 6.41924 14.6619 7.01587 15.2585L18.593 26.8356C19.1896 27.4323 19.1896 28.3989 18.593 28.9955L15.495 32.0935C14.8984 32.6894 13.9318 32.6894 13.3352 32.0935Z" 
        fill="url(#paint0_linear_772_358)"
      />
      <path 
        d="M10.2369 26.8356L31.0641 6.0085C31.6607 5.41188 32.6273 5.41188 33.224 6.0085L36.3219 9.10648C36.9186 9.70311 36.9186 10.6697 36.3219 11.2664L15.4948 32.0935C14.8982 32.6901 13.9315 32.6901 13.3349 32.0935L10.2369 28.9955C9.64108 28.3989 9.64108 27.4323 10.2369 26.8356Z" 
        fill="url(#paint1_linear_772_358)"
      />
      <defs>
        <linearGradient 
          id="paint0_linear_772_358" 
          x1="16.9134" 
          y1="30.4139" 
          x2="3.26962" 
          y2="16.7701" 
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.108" stopColor="#0D7044"/>
          <stop offset="0.433" stopColor="#11945A"/>
        </linearGradient>
        <linearGradient 
          id="paint1_linear_772_358" 
          x1="34.7728" 
          y1="7.5578" 
          x2="11.7863" 
          y2="30.5451" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2AC782"/>
          <stop offset="1" stopColor="#21B876"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CheckIcon; 