interface ConceptsIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const ConceptsIcon: React.FC<ConceptsIconProps> = ({
  className,
  color = '#D3A84C',
}) => {
  return (
    <svg
      width="31"
      height="41"
      viewBox="2 2 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_dd_2756_116)">
        <path
          d="M22.7084 27.9166H12.2917C11.8647 27.9166 11.5105 27.5625 11.5105 27.1354C11.5105 26.7083 11.8647 26.3541 12.2917 26.3541H22.7084C23.1355 26.3541 23.4897 26.7083 23.4897 27.1354C23.4897 27.5625 23.1355 27.9166 22.7084 27.9166Z"
          fill={color}
        />
        <path
          d="M26.1979 10.75L22.0312 13.7292C21.4792 14.125 20.6875 13.8854 20.4479 13.25L18.4792 8C18.1458 7.09375 16.8646 7.09375 16.5312 8L14.5521 13.2396C14.3125 13.8854 13.5312 14.125 12.9792 13.7187L8.81248 10.7396C7.97915 10.1562 6.87498 10.9792 7.21873 11.9479L11.5521 24.0833C11.6979 24.5 12.0937 24.7708 12.5312 24.7708H22.4583C22.8958 24.7708 23.2917 24.4896 23.4375 24.0833L27.7708 11.9479C28.125 10.9792 27.0208 10.1562 26.1979 10.75ZM20.1042 20.3646H14.8958C14.4687 20.3646 14.1146 20.0104 14.1146 19.5833C14.1146 19.1562 14.4687 18.8021 14.8958 18.8021H20.1042C20.5312 18.8021 20.8854 19.1562 20.8854 19.5833C20.8854 20.0104 20.5312 20.3646 20.1042 20.3646Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_2756_116"
          x="0.154297"
          y="0.320312"
          width="40.6846"
          height="40.5963"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1" dy="-1" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2756_116"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3" dy="3" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_2756_116"
            result="effect2_dropShadow_2756_116"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2756_116"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ConceptsIcon;
