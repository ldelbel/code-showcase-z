interface ArtifactsIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const ArtifactsIcon: React.FC<ArtifactsIconProps> = ({
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
      <g filter="url(#filter0_dd_881_1735)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3748 9.63563C13.6376 11.2573 13.1288 13.4812 13.0212 16H20.9787C20.8711 13.4812 20.3622 11.2573 19.6251 9.63563C18.7508 7.71217 17.7474 7 16.9999 7C16.2525 7 15.2491 7.71217 14.3748 9.63563ZM13.0752 7.79955C12.8857 8.12233 12.7119 8.4608 12.554 8.80802C11.682 10.7264 11.128 13.2424 11.0195 16H7.04932C7.41624 12.3043 9.79519 9.20055 13.0752 7.79955ZM20.9246 7.79955C21.1142 8.12233 21.288 8.4608 21.4458 8.80802C22.3178 10.7264 22.8719 13.2424 22.9803 16H26.9506C26.5836 12.3043 24.2047 9.20055 20.9246 7.79955ZM26.9506 18H22.9803C22.8719 20.7576 22.3178 23.2736 21.4458 25.192C21.288 25.5392 21.1142 25.8777 20.9246 26.2004C24.2047 24.7995 26.5836 21.6957 26.9506 18ZM16.9956 27C16.997 27 16.9985 27 16.9999 27C17.7474 27 18.7508 26.2878 19.6251 24.3644C20.3622 22.7427 20.8711 20.5188 20.9787 18H13.0212C13.1288 20.5188 13.6376 22.7427 14.3748 24.3644C15.2474 26.2841 16.2486 26.9972 16.9956 27ZM13.0752 26.2004C9.79518 24.7994 7.41624 21.6957 7.04932 18H11.0195C11.128 20.7576 11.682 23.2736 12.554 25.192C12.7119 25.5392 12.8857 25.8777 13.0752 26.2004Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_881_1735"
          x="-2"
          y="-2"
          width="44"
          height="44"
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
            result="effect1_dropShadow_881_1735"
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
            in2="effect1_dropShadow_881_1735"
            result="effect2_dropShadow_881_1735"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_881_1735"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArtifactsIcon;
