import Image from 'next/image';
import Link from 'next/link';

import { IMAGE_PATH } from '../../../config';
import { useGlobalCommon } from '../../../global-states';
import { Typography } from '../../ui';

import type { TUseGlobalCommon } from '../../../global-states';
import type { FC } from 'react';

import styles from './styles.module.scss';

const Top: FC = () => {
  // hooks ------------------------------------------
  const { system }: TUseGlobalCommon = useGlobalCommon();

  if (system.isReady) {
    // eslint-disable-next-line no-console
    console.log(system);
  }

  return (
    <section className={styles.container}>
      <Typography
        Tag="h1"
        settings={{
          xs: {
            size: 16,
          },
        }}
      >
        TOP PAGE
      </Typography>
      <Link href="/sub">SUB PAGE</Link>

      <ul>
        <li>
          <Image
            src={`${IMAGE_PATH}common/img_sample.png`}
            width={2000}
            height={2000}
            alt=""
          />
        </li>
      </ul>
    </section>
  );
};

export { Top };
