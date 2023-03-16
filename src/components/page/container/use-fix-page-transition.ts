import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import type { MutableRefObject } from 'react';

export const OPACITY_EXIT_DURATION = 1;

export const useFixPageTransition = (): void => {
  // hooks ------------------------------------------
  const router = useRouter();

  // useRef ------------------------------------------
  const timerRef: MutableRefObject<number> = useRef(0);

  // functions ------------------------------------------
  /**
   * routerが変わったとき
   */
  const routeChange = (): void => {
    const tempFix = (): void => {
      const elements = document.querySelectorAll('style[media="x"]');
      elements.forEach((elem) => elem.removeAttribute('media'));
      setTimeout(() => {
        elements.forEach((elem) => elem.remove());
      }, OPACITY_EXIT_DURATION * 1000);
    };
    tempFix();

    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  };

  // useEffect ------------------------------------------
  useEffect(() => {
    router.events.on('routeChangeComplete', routeChange);
    router.events.on('routeChangeStart', routeChange);

    return () => {
      router.events.off('routeChangeComplete', routeChange);
      router.events.off('routeChangeStart', routeChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
