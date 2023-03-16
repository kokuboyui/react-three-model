import { useEffect } from 'react';

// hooks ------------------------------------------
export const useWindowSizeValue = (): void => {
  // functions ------------------------------------------
  const onResize = (): void => {
    const vw: number = window.innerWidth * 0.01;
    const vh: number = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // useEffect ------------------------------------------
  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
};
