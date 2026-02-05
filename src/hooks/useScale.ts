
import { useState, useEffect, useCallback } from 'react';

export const useScale = (baseWidth = 1920, baseHeight = 1080) => {
  const [scale, setScale] = useState({ x: 1, y: 1 });

  const getScale = useCallback(() => {
    const ww = window.innerWidth / baseWidth;
    const wh = window.innerHeight / baseHeight;
    // For equal proportional scaling, often we use min(ww, wh) or just match both
    return { x: ww, y: wh };
  }, [baseWidth, baseHeight]);

  useEffect(() => {
    const handleResize = () => {
      setScale(getScale());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getScale]);

  return scale;
};
