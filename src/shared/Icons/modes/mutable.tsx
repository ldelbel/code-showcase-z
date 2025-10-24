interface MutableIconProps {
  className?: string;
  size?: number;
}

const MutableIcon: React.FC<MutableIconProps> = ({ className, size = 20 }) => {
  return (
    <svg
      width={size * (30 / 17)}
      height={size}
      viewBox="0 0 30 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.0394 0.0798269C7.71943 0.549827 3.06943 3.16983 1.00943 6.86983C0.609435 7.56983 0.119435 9.06983 0.0294346 9.78983C-0.0305654 10.3298 -0.0205654 10.3698 0.269435 10.6598C0.589435 10.9898 0.909434 11.0498 1.31943 10.8598C1.62943 10.7198 1.73943 10.4998 1.92943 9.59983C2.23943 8.12983 3.00943 6.83983 4.34943 5.56983C6.31943 3.68983 9.01943 2.47983 12.2894 2.00983C13.8794 1.77983 16.7994 1.84983 18.3194 2.15983C23.3394 3.16983 27.0394 6.13983 27.7494 9.72983C27.9294 10.5898 28.1394 10.9198 28.5994 11.0198C28.9694 11.0998 29.4294 10.8498 29.5794 10.4898C29.6794 10.2598 29.6794 10.0498 29.5894 9.55983C28.5094 3.58983 21.1394 -0.640173 13.0394 0.0798269Z"
        fill="url(#paint0_linear_3114_2164)"
      />
      <path
        d="M13.7293 11.7098C12.5193 12.2698 12.0493 13.6498 12.6493 14.8598C13.5293 16.6198 16.0793 16.5298 16.8493 14.7198C17.6693 12.7798 15.6493 10.8198 13.7293 11.7098Z"
        fill="url(#paint1_linear_3114_2164)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3114_2164"
          x1="0"
          y1="5.5174"
          x2="29.6557"
          y2="5.5174"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stop-color="#A47A1E" />
          <stop offset="0.19" stop-color="#D3A84C" />
          <stop offset="0.385" stop-color="#FFEC94" />
          <stop offset="0.58" stop-color="#E6BE69" />
          <stop offset="0.795" stop-color="#FFD87C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3114_2164"
          x1="12.3892"
          y1="13.8094"
          x2="17.0369"
          y2="13.8094"
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
  );
};

export default MutableIcon;
