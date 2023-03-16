import { useCallback, useState } from 'react';

export type TUseGlobalNavi = {
  onClick: () => void;
  isOpen: boolean;
};

export const useGlobalNavi = (): TUseGlobalNavi => {
  const [isOpen, updateIsOpen] = useState<boolean>(false);
  const onClick = useCallback(() => {
    console.log('click');
    updateIsOpen(!isOpen);
  }, [isOpen, updateIsOpen]);

  return {
    onClick,
    isOpen,
  };
};
