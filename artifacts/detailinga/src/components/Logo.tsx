import { useEffect, useState } from 'react';

export function Logo({ className = '' }: { className?: string }) {
  const [src, setSrc] = useState('/images/logo-bt.jpg');

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;

      for (let i = 0; i < d.length; i += 4) {
        const lum = (d[i] * 299 + d[i + 1] * 587 + d[i + 2] * 114) / 1000;
        if (lum < 30) {
          d[i + 3] = 0;                                  // fully transparent
        } else if (lum < 80) {
          d[i + 3] = Math.round(((lum - 30) / 50) * 255); // smooth edge
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setSrc(canvas.toDataURL('image/png'));
    };
    img.src = '/images/logo-bt.jpg';
  }, []);

  return (
    <img
      src={src}
      alt="BT Детейлинг Центр"
      className={className || 'h-14 w-auto md:h-16 w-auto'}
    />
  );
}
