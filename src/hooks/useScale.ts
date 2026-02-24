
import { useState, useEffect, useCallback } from 'react';

export const useScale = (baseWidth = 1920, baseHeight = 1080) => {
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const [ready, setReady] = useState(false);

  const getScale = useCallback(() => {
    const ww = window.innerWidth / baseWidth;
    const wh = window.innerHeight / baseHeight;
    const uniformScale = Math.min(ww, wh);
    return { x: uniformScale, y: uniformScale };
  }, [baseWidth, baseHeight]);

  useEffect(() => {
    let rafId1 = 0;
    let rafId2 = 0;

    const handleResize = () => {
      setScale(getScale());
    };

    const initScaleAfterRender = () => {
      // 等待两个渲染帧后再计算缩放，减少首屏布局抖动
      rafId1 = window.requestAnimationFrame(() => {
        rafId2 = window.requestAnimationFrame(() => {
          handleResize();
          setReady(true);
        });
      });
    };

    if (document.readyState === 'complete') initScaleAfterRender();
    else window.addEventListener('load', initScaleAfterRender, { once: true });

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', initScaleAfterRender);
      window.cancelAnimationFrame(rafId1);
      window.cancelAnimationFrame(rafId2);
    };
  }, [getScale]);

  return { ...scale, ready };
};
