import clsx from 'clsx';

import { getDataAttribute } from '../../../../utils';

import type { ComponentProps, FC } from 'react';

import styles from './styles.module.scss';

type TProps = ComponentProps<'a'>;

const ExternalLink: FC<TProps> = (props: TProps) => {
  const { id, href, children, className, target }: TProps = props;

  return (
    <a
      {...getDataAttribute(props)}
      id={id || undefined}
      className={clsx(styles.container, className)}
      href={href}
      target={target || '_blank'}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export { ExternalLink };
