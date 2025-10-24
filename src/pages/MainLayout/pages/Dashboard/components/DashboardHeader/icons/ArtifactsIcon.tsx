const ArtifactsIcon = ({ isSelected = false, size = 46 }) => {
  return isSelected ? (
    <svg
      width={size * (39 / 46)}
      height={size * (41 / 46)}
      viewBox="15 28 45 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'relative', right: '2px' }}
      className="drop-shadow-custom"
    >
      <g filter="url(#filter0_dd_2049_1971)">
        <path d="M35.8863 32.3822C34.9418 34.5751 34.2898 37.5824 34.1519 40.9886H44.3481C44.2102 37.5824 43.5582 34.5751 42.6137 32.3822C41.4934 29.7812 40.2077 28.8181 39.25 28.8181C38.2923 28.8181 37.0066 29.7812 35.8863 32.3822Z" fill="url(#paint0_linear_2049_1971)" />
        <path d="M34.2212 29.8993C33.9783 30.3358 33.7556 30.7935 33.5533 31.2631C32.436 33.8573 31.7261 37.2596 31.5871 40.9886H26.5C26.9702 35.991 30.0184 31.7939 34.2212 29.8993Z" fill="url(#paint1_linear_2049_1971)" />
        <path d="M44.2788 29.8993C44.5217 30.3358 44.7444 30.7935 44.9466 31.2631C46.064 33.8573 46.7738 37.2596 46.9129 40.9886H52C51.5298 35.991 48.4816 31.7939 44.2788 29.8993Z" fill="url(#paint2_linear_2049_1971)" />
        <path d="M52 43.6931H46.9129C46.7738 47.4221 46.064 50.8244 44.9466 53.4186C44.7444 53.8882 44.5217 54.3459 44.2788 54.7824C48.4816 52.8878 51.5298 48.6907 52 43.6931Z" fill="url(#paint3_linear_2049_1971)" />
        <path d="M39.2444 55.8636L39.25 55.8636C40.2077 55.8636 41.4934 54.9005 42.6137 52.2995C43.5582 50.1065 44.2102 47.0992 44.3481 43.6931H34.1519C34.2898 47.0992 34.9418 50.1065 35.8863 52.2995C37.0044 54.8954 38.2873 55.8598 39.2444 55.8636Z" fill="url(#paint4_linear_2049_1971)" />
        <path d="M34.2212 54.7824C30.0184 52.8878 26.9702 48.6907 26.5 43.6931H31.5871C31.7261 47.4221 32.436 50.8244 33.5533 53.4186C33.7556 53.8882 33.9783 54.3459 34.2212 54.7824Z" fill="url(#paint5_linear_2049_1971)" />
      </g>
      <defs>
        <filter
          id="filter0_dd_2049_1971"
          x="22.5"
          y="24.8181"
          width="33.5"
          height="35.0455"
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
            result="effect1_dropShadow_2049_1971"
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
            in2="effect1_dropShadow_2049_1971"
            result="effect2_dropShadow_2049_1971"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2049_1971"
            result="shape"
          />
        </filter>
        <linearGradient id="paint0_linear_2049_1971" x1="26.5" y1="42.3408" x2="52" y2="42.3408" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.385" stop-color="#FFEC94" />
          <stop offset="0.58" stop-color="#E6BE69" />
          <stop offset="0.795" stop-color="#FFD87C" />
        </linearGradient>
        <linearGradient id="paint1_linear_2049_1971" x1="26.5" y1="42.3408" x2="52" y2="42.3408" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.385" stop-color="#FFEC94" />
          <stop offset="0.58" stop-color="#E6BE69" />
          <stop offset="0.795" stop-color="#FFD87C" />
        </linearGradient>
        <linearGradient id="paint2_linear_2049_1971" x1="26.5" y1="42.3408" x2="52" y2="42.3408" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.385" stop-color="#FFEC94" />
          <stop offset="0.58" stop-color="#E6BE69" />
          <stop offset="0.795" stop-color="#FFD87C" />
        </linearGradient>
        <linearGradient id="paint3_linear_2049_1971" x1="26.5" y1="42.3408" x2="52" y2="42.3408" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.385" stop-color="#FFEC94" />
          <stop offset="0.58" stop-color="#E6BE69" />
          <stop offset="0.795" stop-color="#FFD87C" />
        </linearGradient>
        <linearGradient id="paint4_linear_2049_1971" x1="26.5" y1="42.3408" x2="52" y2="42.3408" gradientUnits="userSpaceOnUse">
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.385" stop-color="#FFEC94" />
          <stop offset="0.58" stop-color="#E6BE69" />
          <stop offset="0.795" stop-color="#FFD87C" />
        </linearGradient>
        <linearGradient id="paint5_linear_2049_1971" x1="26.5" y1="42.3408" x2="52" y2="42.3408" gradientUnits="userSpaceOnUse">
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
      width={size * (27 / 46)}
      height={size * (28 / 46)}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_881_1835)">
        <path
          d="M9.8863 4.3822C8.9418 6.57514 8.2898 9.58244 8.15191 12.9886H18.3481C18.2102 9.58244 17.5582 6.57514 16.6137 4.3822C15.4934 1.78116 14.2077 0.818115 13.25 0.818115C12.2923 0.818115 11.0066 1.78116 9.8863 4.3822Z"
          fill="#D3A84C"
        />
        <path
          d="M8.22119 1.89933C7.97828 2.33582 7.75557 2.79352 7.55334 3.26305C6.43603 5.85725 5.72614 9.25956 5.58713 12.9886H0.5C0.970155 7.99102 4.01836 3.79386 8.22119 1.89933Z"
          fill="#D3A84C"
        />
        <path
          d="M18.2788 1.89932C18.5217 2.33581 18.7444 2.79351 18.9466 3.26305C20.064 5.85725 20.7738 9.25956 20.9129 12.9886H26C25.5298 7.99101 22.4816 3.79385 18.2788 1.89932Z"
          fill="#D3A84C"
        />
        <path
          d="M26 15.6931H20.9129C20.7738 19.4221 20.064 22.8244 18.9466 25.4186C18.7444 25.8882 18.5217 26.3459 18.2788 26.7824C22.4816 24.8878 25.5298 20.6907 26 15.6931Z"
          fill="#D3A84C"
        />
        <path
          d="M13.2444 27.8636L13.25 27.8636C14.2077 27.8636 15.4934 26.9005 16.6137 24.2995C17.5582 22.1065 18.2102 19.0992 18.3481 15.6931H8.15191C8.2898 19.0992 8.9418 22.1065 9.8863 24.2995C11.0044 26.8954 12.2873 27.8598 13.2444 27.8636Z"
          fill="#D3A84C"
        />
        <path
          d="M8.22118 26.7824C4.01835 24.8878 0.970155 20.6907 0.5 15.6931H5.58713C5.72614 19.4221 6.43603 22.8244 7.55334 25.4186C7.75557 25.8882 7.97827 26.3459 8.22118 26.7824Z"
          fill="#D3A84C"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_881_1835"
          x="0.5"
          y="-3.18188"
          width="25.5"
          height="35.0454"
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
            result="effect1_innerShadow_881_1835"
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
            in2="effect1_innerShadow_881_1835"
            result="effect2_innerShadow_881_1835"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArtifactsIcon;
