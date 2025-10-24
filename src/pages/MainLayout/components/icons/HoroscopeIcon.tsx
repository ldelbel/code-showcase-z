import "./index.css";

const HoroscopeIcon = ({ isSelected = false }) => {
  return isSelected ? (
    <div className="dark-menu-outter-box">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-custom"
      >
        <g filter="url(#filter0_dd_2467_2218)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.41421 6L15.0642 13.65L13.65 15.0642L6 7.41421L7.41421 6ZM19.6 12.8L24.7 7.7L26.1142 9.11421L21.0142 14.2142L19.6 12.8ZM7.7 24.7L12.8 19.6L14.2142 21.0142L9.11421 26.1142L7.7 24.7ZM26.3262 29.4318L19.5262 20.9318L21.088 19.6824L27.888 28.1824L26.3262 29.4318Z"
            fill="url(#paint0_linear_2413_2234)"
          />
          <circle
            cx="17.5"
            cy="17.5"
            r="8.5"
            fill="url(#paint1_linear_2413_2234)"
          />
          <circle
            cx="28.4"
            cy="30.4"
            r="2.4"
            stroke="url(#paint2_linear_2413_2234)"
            stroke-width="2"
          />
          <circle
            cx="28.9"
            cy="5.1"
            r="5.1"
            fill="url(#paint3_linear_2413_2234)"
          />
          <circle
            cx="5.94995"
            cy="5.95007"
            r="4.25"
            fill="url(#paint4_linear_2413_2234)"
          />
          <circle
            cx="5.95"
            cy="28.05"
            r="5.95"
            fill="url(#paint5_linear_2413_2234)"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_2467_2218"
            x="0"
            y="0"
            width="34"
            height="38"
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
              result="effect1_dropShadow_2467_2218"
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
              in2="effect1_dropShadow_2467_2218"
              result="effect2_dropShadow_2467_2218"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_2467_2218"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2413_2234"
            x1="6"
            y1="17.7159"
            x2="27.888"
            y2="17.7159"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2413_2234"
            x1="9"
            y1="17.5"
            x2="26"
            y2="17.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2413_2234"
            x1="25"
            y1="30.4"
            x2="31.8"
            y2="30.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2413_2234"
            x1="23.8"
            y1="5.1"
            x2="34"
            y2="5.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2413_2234"
            x1="1.69995"
            y1="5.95007"
            x2="10.2"
            y2="5.95007"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_2413_2234"
            x1="0"
            y1="28.05"
            x2="11.9"
            y2="28.05"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  ) : (
    <div className="golden-menu-outter-box">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_2412_2230)">
          <circle cx="17.5" cy="17.5" r="8.5" fill="#55472A" />
          <circle
            cx="28.4"
            cy="30.4"
            r="2.4"
            stroke="#55472A"
            stroke-width="2"
          />
          <circle cx="28.9" cy="5.1" r="5.1" fill="#55472A" />
          <circle cx="5.94995" cy="5.95007" r="4.25" fill="#55472A" />
          <circle cx="5.95" cy="28.05" r="5.95" fill="#55472A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.41421 6L15.0642 13.65L13.65 15.0642L6 7.41421L7.41421 6ZM19.6 12.8L24.7 7.7L26.1142 9.11421L21.0142 14.2142L19.6 12.8ZM7.7 24.7L12.8 19.6L14.2142 21.0142L9.11421 26.1142L7.7 24.7ZM26.3262 29.4318L19.5262 20.9318L21.088 19.6824L27.888 28.1824L26.3262 29.4318Z"
            fill="#55472A"
          />
        </g>
        <defs>
          <filter
            id="filter0_ii_2412_2230"
            x="0"
            y="-4"
            width="34"
            height="42"
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
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_2412_2230"
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
              in2="effect1_innerShadow_2412_2230"
              result="effect2_innerShadow_2412_2230"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default HoroscopeIcon;
