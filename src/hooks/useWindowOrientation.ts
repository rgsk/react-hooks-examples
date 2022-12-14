import { useEffect, useState } from 'react';

const sleep = (millis: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
};
// primary value of this hook is that lets say,
// chrome browser has better or new way or determining window orientation
// while safari uses the old method, we can detect the browser and
// set orientation accordingly and we provide a clean interface
// for components to use the orientation, without changing code everywhere
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
