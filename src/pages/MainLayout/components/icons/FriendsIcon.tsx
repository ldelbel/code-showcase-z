import "./index.css";

const FriendsIcon = ({ isSelected = false }) => {
  return isSelected ? (
    <div className="dark-menu-outter-box">
      <svg
        width="38"
        height="32"
        viewBox="0 0 38 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-custom"
      >
        <g filter="url(#filter0_dd_2467_2218)">
          <path
            d="M 22.7656,8.33337 
       a 6.25,6.25 0 1,0 12.5,0 
       a 6.25,6.25 0 1,0 -12.5,0"
            fill="url(#paint0_linear_172_651)"
          />
          <path
            d="M 2.93213,8.33337 
       a 6.25,6.25 0 1,0 12.5,0 
       a 6.25,6.25 0 1,0 -12.5,0"
            fill="url(#paint1_linear_172_651)"
          />
          <path
            d="M 10.2657,8.33333 
       a 8.33333,8.33333 0 1,0 16.6666,0 
       a 8.33333,8.33333 0 1,0 -16.6666,0"
            fill="url(#paint2_linear_172_651)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.1997 27.0834H36.2439C36.8355 27.0834 37.2906 26.5776 37.1814 25.9961C36.6804 23.3268 34.846 16.6667 29.0155 16.6667C27.1695 16.6667 25.7241 17.3344 24.5947 18.3316C27.7358 20.3696 29.36 23.938 30.1997 27.0834Z"
            fill="url(#paint3_linear_172_651)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.603 18.3316C11.4736 17.3344 10.0282 16.6667 8.18219 16.6667C2.35175 16.6667 0.51733 23.3268 0.0162463 25.9961C-0.092906 26.5776 0.362194 27.0834 0.953816 27.0834H6.99792C7.83768 23.938 9.46182 20.3695 12.603 18.3316Z"
            fill="url(#paint4_linear_172_651)"
          />
          <path
            d="M18.5988 18.75C27.214 18.75 28.7039 27.3003 28.9616 30.2577C29.0095 30.8079 28.5677 31.25 28.0155 31.25H9.18213C8.62984 31.25 8.18807 30.8079 8.23601 30.2577C8.49368 27.3003 9.98359 18.75 18.5988 18.75Z"
            fill="url(#paint5_linear_172_651)"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_2467_2218"
            x="0"
            y="0"
            width="38"
            height="35.25"
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
            id="paint0_linear_172_651"
            x1="22.7656"
            y1="8.33337"
            x2="35.2656"
            y2="8.33337"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_172_651"
            x1="2.93213"
            y1="8.33337"
            x2="15.4321"
            y2="8.33337"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_172_651"
            x1="10.2656"
            y1="8.33333"
            x2="26.9323"
            y2="8.33333"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_172_651"
            x1="24.5947"
            y1="21.8751"
            x2="37.1977"
            y2="21.8751"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_172_651"
            x1="0"
            y1="21.8751"
            x2="12.603"
            y2="21.8751"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stop-color="#A47A1E" />
            <stop offset="0.19" stop-color="#D3A84C" />
            <stop offset="0.785" stop-color="#FFEC94" />
            <stop offset="1" stop-color="#FFD87C" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_172_651"
            x1="8.18213"
            y1="25"
            x2="29.0155"
            y2="25"
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
        width="38"
        height="32"
        viewBox="0 0 38 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_1853_2686)">
          <circle cx="19.0001" cy="8.74996" r="8.33333" fill="#55472A" />
          <circle cx="29.4167" cy="8.75" r="6.25" fill="#55472A" />
          <circle cx="9.58325" cy="8.75" r="6.25" fill="#55472A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.6009 27.5H36.645C37.2366 27.5 37.6917 26.9942 37.5826 26.4127C37.0815 23.7434 35.2471 17.0834 29.4167 17.0834C27.5706 17.0834 26.1252 17.751 24.9958 18.7483C28.137 20.7862 29.7611 24.3547 30.6009 27.5Z"
            fill="#55472A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0041 18.7482C11.8747 17.751 10.4293 17.0834 8.58332 17.0834C2.75287 17.0834 0.918453 23.7434 0.417369 26.4127C0.308217 26.9942 0.763317 27.5 1.35494 27.5H7.39904C8.23881 24.3547 9.86295 20.7862 13.0041 18.7482Z"
            fill="#55472A"
          />
          <path
            d="M18.9999 19.1666C27.6151 19.1666 29.105 27.717 29.3627 30.6744C29.4106 31.2246 28.9689 31.6666 28.4166 31.6666H9.58325C9.03097 31.6666 8.58919 31.2246 8.63713 30.6744C8.8948 27.717 10.3847 19.1666 18.9999 19.1666Z"
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

export default FriendsIcon;
