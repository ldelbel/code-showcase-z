const ProtectedImageSVG = ({
  imageUrl,
  alt,
}: {
  imageUrl: string;
  alt: string;
}) => {
  return (
    <div
      className="relative w-full"
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          height: 'auto',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }}
        aria-label={alt}
      >
        {/* Fundo branco */}
        <rect x="0" y="0" width="1000" height="1000" fill="white" />

        {/* Imagem sobre o fundo */}
        <image
          href={imageUrl}
          x="0"
          y="0"
          width="1000"
          height="1000"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Marca d'água */}
        <text
          x="20"
          y="980"
          fontSize="40"
          fill="white"
          fillOpacity="0.2"
          fontFamily="serif"
        >
          zodic.me
        </text>
      </svg>
    </div>
  );
};

export default ProtectedImageSVG;
