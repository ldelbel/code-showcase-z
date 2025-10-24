import { useEffect, useState } from 'react';

export const useIsIOS = (): boolean => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      const userAgent = navigator.userAgent;
      const isIOSDevice =
        /iPad|iPhone|iPod/.test(userAgent) && !('MSStream' in window);
      setIsIOS(isIOSDevice);
    }
  }, []);

  return isIOS;
};
