import type { FC } from 'react';

import styles from './styles.module.scss';

const GlobalNaviMenu: FC = () => (
  <div className={styles.container}>
    {/* todo: 仮 */}
    <ul>
      <li>
        <a href="#">top</a>
      </li>
      <li>
        <a href="#">concept</a>
      </li>
      <li>
        <a href="#">information</a>
      </li>
    </ul>
  </div>
);

export { GlobalNaviMenu };
