import { useState } from 'react';

import type { TUseLocalStorage } from './type';

export const useLocalStorage = (
  key: string,
  initialValue: unknown
): TUseLocalStorage => {
  // useState ------------------------------------------
  const [storedValue, setStoredValue] = useState<unknown>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // functions ------------------------------------------
  const setValue = (value: unknown): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return {
    storedValue,
    setValue,
  };
};
