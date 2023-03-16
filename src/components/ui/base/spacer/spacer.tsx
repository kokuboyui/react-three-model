import clsx from 'clsx';

import type { ComponentProps, FC } from 'react';

import styles from './styles.module.scss';

type TProps = ComponentProps<'div'>;

const Spacer: FC<TProps> = (props: TProps) => {
  const { className }: TProps = props;

  return <div className={clsx(styles.container, className)} />;
};

export { Spacer };
