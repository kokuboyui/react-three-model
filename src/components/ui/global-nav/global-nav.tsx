import { GlobalNaviButton } from './button';
import { useGlobalNavi } from './hook';
import { GlobalNaviMenu } from './menu';

import type { TUseGlobalNavi } from './hook';
import type { FC } from 'react';

import styles from './styles.module.scss';

const GlobalNavi: FC = () => {
  const { onClick, isOpen }: TUseGlobalNavi = useGlobalNavi();

  return (
    <header className={styles.container}>
      <GlobalNaviButton onClick={onClick} isOpen={isOpen} />
      <GlobalNaviMenu />
    </header>
  );
};

export { GlobalNavi };
