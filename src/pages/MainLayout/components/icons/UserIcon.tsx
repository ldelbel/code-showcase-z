import "./index.css";

const UserIcon = ({ isSelected = false }) => {
  return isSelected ? (
    <div className="dark-menu-outter-box">
      <svg
        width="55"
        height="53"
        viewBox="0 0 55 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-custom"
      >
        <g filter="url(#filter0_dd_2408_2216)">
          <ellipse
            cx="25.9999"
            cy="16"
            rx="8.66667"
            ry="8"
            fill="url(#paint0_linear_2408_2216)"
          />
          <path
            d="M13.1668 29.9773C14.2539 27.429 16.8525 26 19.623 26H32.3768C35.1473 26 37.7459 27.429 38.833 29.9773C39.8661 32.3989 40.9501 35.6616 41.138 39.0004C41.1691 39.5518 40.7189 40 40.1666 40H11.8333C11.281 40 10.8308 39.5518 10.8618 39.0004C11.0498 35.6616 12.1337 32.3989 13.1668 29.9773Z"
            fill="url(#paint1_linear_2408_2216)"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_2408_2216"
            x="6.83331"
            y="8"
            width="38.3333"
            height="36"
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
              result="effect1_dropShadow_2408_2216"
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
              in2="effect1_dropShadow_2408_2216"
              result="effect2_dropShadow_2408_2216"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_2408_2216"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2408_2216"
            x1="17.3333"
            y1="16"
            x2="34.6666"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.385" stop-color="#FFEC94" />
            <stop offset="0.58" stop-color="#E6BE69" />
            <stop offset="0.795" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2408_2216"
            x1="10.8333"
            y1="33"
            x2="41.1666"
            y2="33"
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
    </div>
  ) : (
    <div className="golden-menu-outter-box">
      <svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_ii_2467_2213)">
          <ellipse cx="25.9999" cy="16" rx="8.66667" ry="8" fill="#55472A" />
          <path d="M13.1668 29.9773C14.2539 27.429 16.8525 26 19.623 26H32.3768C35.1473 26 37.7459 27.429 38.833 29.9773C39.8661 32.3989 40.9501 35.6616 41.138 39.0004C41.1691 39.5518 40.7189 40 40.1666 40H11.8333C11.281 40 10.8308 39.5518 10.8618 39.0004C11.0498 35.6616 12.1337 32.3989 13.1668 29.9773Z" fill="#55472A" />
        </g>
        <defs>
          <filter id="filter0_ii_2467_2213" x="0" y="-4" width="52" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2467_2213" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
            <feBlend mode="normal" in2="effect1_innerShadow_2467_2213" result="effect2_innerShadow_2467_2213" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default UserIcon;
