import "./index.css";

const SquaresIcon = ({ isSelected = false }) => {
  return isSelected ? (
    <div className="dark-menu-outter-box">
      <svg
        width="51"
        height="51"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-custom"
      >
        <g filter="url(#filter0_dd_2467_2218)">
          <path
            d="M20.9584 34.6792V10.3209C20.9584 8.00837 19.9717 7.08337 17.5205 7.08337H11.2922C8.84091 7.08337 7.85425 8.00837 7.85425 10.3209V34.6792C7.85425 36.9917 8.84091 37.9167 11.2922 37.9167H17.5205C19.9717 37.9167 20.9584 36.9917 20.9584 34.6792Z"
            fill="url(#paint0_linear_2467_2218)"
          />
          <path
            d="M37.1459 20.8042V10.3209C37.1459 8.00837 36.1592 7.08337 33.708 7.08337H27.4797C25.0284 7.08337 24.0417 8.00837 24.0417 10.3209V20.8042C24.0417 23.1167 25.0284 24.0417 27.4797 24.0417H33.708C36.1592 24.0417 37.1459 23.1167 37.1459 20.8042Z"
            fill="url(#paint1_linear_2467_2218)"
          />
          <path
            d="M37.1459 34.6792V30.3625C37.1459 28.05 36.1592 27.125 33.708 27.125H27.4797C25.0284 27.125 24.0417 28.05 24.0417 30.3625V34.6792C24.0417 36.9917 25.0284 37.9167 27.4797 37.9167H33.708C36.1592 37.9167 37.1459 36.9917 37.1459 34.6792Z"
            fill="url(#paint2_linear_2467_2218)"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_2467_2218"
            x="0"
            y="0"
            width="45"
            height="45"
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
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
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
            id="paint0_linear_2467_2218"
            x1="7.85425"
            y1="22.5"
            x2="20.9584"
            y2="22.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2467_2218"
            x1="24.0417"
            y1="15.5625"
            x2="37.1459"
            y2="15.5625"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2467_2218"
            x1="24.0417"
            y1="32.5208"
            x2="37.1459"
            y2="32.5208"
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
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_1853_2686)">
          <path
            d="M16.9584 30.6792V6.32087C16.9584 4.00837 15.9717 3.08337 13.5205 3.08337H7.29216C4.84091 3.08337 3.85425 4.00837 3.85425 6.32087V30.6792C3.85425 32.9917 4.84091 33.9167 7.29216 33.9167H13.5205C15.9717 33.9167 16.9584 32.9917 16.9584 30.6792Z"
            fill="#55472A"
          />
          <path
            d="M33.1459 16.8042V6.32087C33.1459 4.00837 32.1592 3.08337 29.708 3.08337H23.4797C21.0284 3.08337 20.0417 4.00837 20.0417 6.32087V16.8042C20.0417 19.1167 21.0284 20.0417 23.4797 20.0417H29.708C32.1592 20.0417 33.1459 19.1167 33.1459 16.8042Z"
            fill="#55472A"
          />
          <path
            d="M33.1459 30.6792V26.3625C33.1459 24.05 32.1592 23.125 29.708 23.125H23.4797C21.0284 23.125 20.0417 24.05 20.0417 26.3625V30.6792C20.0417 32.9917 21.0284 33.9167 23.4797 33.9167H29.708C32.1592 33.9167 33.1459 32.9917 33.1459 30.6792Z"
            fill="#55472A"
          />
        </g>
        <defs>
          <filter
            id="filter0_ii_1853_2686"
            x="0"
            y="-4"
            width="52"
            height="56"
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
              result="effect1_innerShadow_1853_2686"
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
              in2="effect1_innerShadow_1853_2686"
              result="effect2_innerShadow_1853_2686"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default SquaresIcon;
