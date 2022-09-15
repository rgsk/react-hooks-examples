import { useEffect, useState } from 'react';

const sleep = (millis: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
};

const useWindowOrientation = () => {
  const [orientation, setOrientation] = useState<
    'portrait' | 'landscape-primary' | 'landscape-secondary'
  >('portrait');

  useEffect(() => {
    const cb = async () => {
      await sleep(100);
      switch (window.orientation) {
        case 90:
          setOrientation('landscape-primary');
          break;
        case -90:
          setOrientation('landscape-secondary');
          break;
        case 0:
          setOrientation('portrait');
          break;
      }
    };
    cb();
    window.addEventListener('orientationchange', cb);
    return () => {
      window.removeEventListener('orientationchange', cb);
    };
  }, []);
  return orientation;
};
export default useWindowOrientation;
