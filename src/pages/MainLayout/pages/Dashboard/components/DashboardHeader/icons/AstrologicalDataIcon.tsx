const AstrologicalDataIcon = ({ isSelected = false, size = 46 }) => {
  return isSelected ? (
    <svg
      width={size * (39 / 46)}
      height={size * (41 / 46)}
      viewBox="0 0 39 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{position: 'relative', right: '1px'}}
      className="drop-shadow-custom"
    >
      <g filter="url(#filter0_dd_882_2255)">
        <rect
          x="17.3296"
          y="20.5625"
          width="2.70455"
          height="2.70455"
          rx="1.35227"
          transform="rotate(90 17.3296 20.5625)"
          stroke="url(#paint0_linear_882_2255)"
          stroke-width="2"
        />
        <path
          d="M20.7101 30.7329C14.7197 30.7329 9.86353 25.8767 9.86353 19.8863C9.86353 13.8959 14.7197 9.03973 20.7101 9.03973C26.7005 9.03973 31.5567 13.8959 31.5567 19.8863C31.5567 25.8767 26.7005 30.7329 20.7101 30.7329Z"
          stroke="url(#paint1_linear_882_2255)"
          stroke-width="4"
        />
        <rect
          x="24.7671"
          y="19.8862"
          width="2.70455"
          height="2.70455"
          rx="1.35227"
          transform="rotate(-90 24.7671 19.8862)"
          stroke="url(#paint2_linear_882_2255)"
          stroke-width="2"
        />
        <path
          d="M25.4431 19.2103L24.4289 20.2245C24.1724 20.481 24.0441 20.6093 23.9201 20.7001C23.2166 21.2152 22.2605 21.2152 21.557 20.7001C21.433 20.6093 21.3047 20.481 21.0482 20.2245V20.2245C20.7917 19.968 20.6634 19.8397 20.5395 19.749C19.836 19.2338 18.8798 19.2338 18.1763 19.749C18.0523 19.8397 17.924 19.968 17.6675 20.2245L16.6533 21.2387"
          stroke="url(#paint3_linear_882_2255)"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_882_2255"
          x="5.86353"
          y="5.03973"
          width="29.6932"
          height="29.6932"
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
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_882_2255"
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
            in2="effect1_dropShadow_882_2255"
            result="effect2_dropShadow_882_2255"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_882_2255"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_882_2255"
          x1="17.3296"
          y1="21.9148"
          x2="20.0341"
          y2="21.9148"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.385" stop-color="#FFEC94" />
          <stop offset="0.58" stop-color="#E6BE69" />
          <stop offset="0.795" stop-color="#FFD87C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_882_2255"
          x1="20.7101"
          y1="32.7329"
          x2="20.7101"
          y2="7.03973"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.385" stop-color="#FFEC94" />
          <stop offset="0.58" stop-color="#E6BE69" />
          <stop offset="0.795" stop-color="#FFD87C" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_882_2255"
          x1="24.7671"
          y1="21.2385"
          x2="27.4716"
          y2="21.2385"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.385" stop-color="#FFEC94" />
          <stop offset="0.58" stop-color="#E6BE69" />
          <stop offset="0.795" stop-color="#FFD87C" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_882_2255"
          x1="16.6533"
          y1="20.2245"
          x2="25.4431"
          y2="20.2245"
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
      width={size * (28 / 46)}
      height={size * (28 / 46)}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_881_1834)">
        <rect
          x="10.5227"
          y="14.4355"
          width="2.83333"
          height="2.83333"
          rx="1.41667"
          transform="rotate(90 10.5227 14.4355)"
          stroke="#D3A84C"
          stroke-width="2"
        />
        <path
          d="M14.0643 25.1855C7.73603 25.1855 2.60596 20.0555 2.60596 13.7272C2.60596 7.39895 7.73603 2.26888 14.0643 2.26888C20.3926 2.26888 25.5226 7.39895 25.5226 13.7272C25.5226 20.0555 20.3926 25.1855 14.0643 25.1855Z"
          stroke="#D3A84C"
          stroke-width="4"
        />
        <rect
          x="18.3145"
          y="13.7273"
          width="2.83333"
          height="2.83333"
          rx="1.41667"
          transform="rotate(-90 18.3145 13.7273)"
          stroke="#D3A84C"
          stroke-width="2"
        />
        <path
          d="M19.0228 13.0189L17.9603 14.0814C17.6289 14.4128 17.4632 14.5785 17.2978 14.6886C16.6265 15.1355 15.7524 15.1355 15.0811 14.6886C14.9157 14.5785 14.75 14.4128 14.4186 14.0814V14.0814C14.0872 13.75 13.9215 13.5843 13.7561 13.4741C13.0848 13.0273 12.2108 13.0273 11.5395 13.4741C11.3741 13.5843 11.2084 13.75 10.877 14.0814L9.81445 15.1439"
          stroke="#D3A84C"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_881_1834"
          x="0.605957"
          y="-3.7312"
          width="26.9167"
          height="34.9167"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_881_1834"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_881_1834"
            result="effect2_innerShadow_881_1834"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AstrologicalDataIcon;
