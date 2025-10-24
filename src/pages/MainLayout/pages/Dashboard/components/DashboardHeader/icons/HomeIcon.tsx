const HomeIcon = ({ isSelected = false, size = 46 }) => {
  return isSelected ? (
    <svg
      width={size * (46 / 46)}
      height={size}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{position: 'relative', left: '2px'}}
      className="drop-shadow-custom"
    >
      <g filter="url(#filter0_dd_881_1838)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.23288 16.4568C8.77637 17.362 8.77637 18.3917 8.77637 20.4512V26.8832C8.77637 29.7434 8.77637 31.1735 9.75072 32.062C10.7075 32.9345 12.2368 32.9503 15.2611 32.9506V25.3665C15.2611 23.8917 16.5423 22.8497 17.9245 22.8497H22.9144C24.2966 22.8497 25.5777 23.8917 25.5777 25.3665V32.9506C28.6023 32.9503 30.1317 32.9346 31.0885 32.062C32.0628 31.1735 32.0628 29.7434 32.0628 26.8832V20.4512C32.0628 18.3917 32.0628 17.362 31.6063 16.4568C31.1498 15.5517 30.2924 14.8815 28.5778 13.5412L26.9144 12.2411C23.8151 9.81847 22.2655 8.60718 20.4196 8.60718C18.5737 8.60718 17.024 9.81847 13.9248 12.2411L13.9248 12.2411L12.2614 13.5412C10.5467 14.8815 9.6894 15.5517 9.23288 16.4568ZM23.5777 32.9506V25.3665C23.5777 25.1658 23.3695 24.8497 22.9144 24.8497H17.9245C17.4694 24.8497 17.2611 25.1658 17.2611 25.3665V32.9506H23.5777Z"
          fill="url(#paint0_linear_881_1838)"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_881_1838"
          x="0.776367"
          y="0.607178"
          width="43.2864"
          height="44.3434"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_881_1838"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_881_1838"
            result="effect2_dropShadow_881_1838"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_881_1838"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_881_1838"
          x1="8.77637"
          y1="20.7789"
          x2="32.0628"
          y2="20.7789"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.385" stop-color="#FFEC94" />
          <stop offset="0.58" stop-color="#E6BE69" />
          <stop offset="0.795" stop-color="#FFD87C" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width={size * (25 / 46)}
      height={size * (25 / 46)}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.32346 8.22953C0.866943 9.13469 0.866943 10.1644 0.866943 12.2239V18.6559C0.866943 21.5161 0.866943 22.9462 1.84129 23.8347C2.79803 24.7072 4.32735 24.723 7.35171 24.7233V17.1392C7.35171 15.6644 8.63288 14.6224 10.015 14.6224H15.005C16.3871 14.6224 17.6683 15.6644 17.6683 17.1392V24.7233C20.6929 24.723 22.2223 24.7073 23.1791 23.8347C24.1534 22.9462 24.1534 21.5161 24.1534 18.6559V12.2239C24.1534 10.1644 24.1534 9.13469 23.6969 8.22953C23.2404 7.32437 22.383 6.65422 20.6683 5.31392L19.005 4.01377C15.9057 1.59118 14.3561 0.379883 12.5102 0.379883C10.6643 0.379883 9.11462 1.59118 6.01534 4.01377L6.01533 4.01377L4.35201 5.31392C2.63732 6.65422 1.77998 7.32437 1.32346 8.22953ZM15.6683 24.7233V17.1392C15.6683 16.9385 15.4601 16.6224 15.005 16.6224H10.015C9.55993 16.6224 9.35171 16.9385 9.35171 17.1392V24.7233H15.6683Z"
        fill="#B58F3E"
      />
    </svg>
  );
};

export default HomeIcon;
