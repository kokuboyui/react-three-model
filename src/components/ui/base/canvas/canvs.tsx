import { forwardRef } from 'react';

import type { ComponentProps, ForwardedRef } from 'react';

import styles from './styles.module.scss';

type TProps = ComponentProps<'canvas'>;

const Canvas = forwardRef(
  (props: TProps, ref: ForwardedRef<HTMLCanvasElement>) => (
    <canvas ref={ref} className={styles.container} tabIndex={0} />
  )
);

Canvas.displayName = 'Canvas';

export { Canvas };
