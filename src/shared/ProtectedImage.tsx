import { useEffect, useRef, useState } from 'react';

const ProtectedImage = ({
  imageUrl,
  alt,
}: {
  imageUrl: string;
  alt: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [aspectRatio, setAspectRatio] = useState(1);

  console.log('Aspect Ratio: ', aspectRatio);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      setAspectRatio(img.width / img.height);
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      ctx.font = '50px sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.fillText('zodic.app', 20, img.height - 20);
    };
  }, [imageUrl]);

  return (
    <div style={{ width: '100%' }}>
      <canvas
        ref={canvasRef}
        aria-label={alt}
        style={{
          width: '100%',
          height: `auto`,
          display: 'block',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }}
        onContextMenu={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default ProtectedImage;
