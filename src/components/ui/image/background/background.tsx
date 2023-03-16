import clsx from 'clsx';
import Image from 'next/image';

import type { TBackgroundImage } from './type';
import type { FC } from 'react';

import styles from './styles.module.scss';

type TProps = {
  image: TBackgroundImage;
  className?: string;
  fit?: 'fill' | 'cover' | 'contain';
  position?: string;
  size?: 'full' | 'auto';
};

const Background: FC<TProps> = (props: TProps) => {
  const { image, fit, position, size, className }: TProps = props;
  return (
    <div
      className={clsx(styles.container, className)}
      data-image-fit={fit || 'cover'}
      data-image-size={size || 'auto'}
    >
      <Image
        alt=""
        src={image.src}
        style={{
          objectPosition: position || 'center center',
        }}
        width={image.width}
        height={image.height}
      />
    </div>
  );
};

export { Background };
