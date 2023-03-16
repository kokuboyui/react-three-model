import type { FC } from 'react';

import styles from './styles.module.scss';

type TProps = {
  onClick: () => void;
  isOpen: boolean;
};

const GlobalNaviButton: FC<TProps> = (props: TProps) => {
  const { onClick, isOpen }: TProps = props;
  return (
    <button className={styles.container} onClick={onClick}>
      <span className={styles.inner}>
        <span className={styles.wrapper} data-is-open={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </span>
    </button>
  );
};

export { GlobalNaviButton };
