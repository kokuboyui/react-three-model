import Head from 'next/head';

import { Meta } from './meta';
import { ICON_PATH, STYLE_ROOT_FONT_FAMILY } from '../../../../config';

import type { THelmetProps } from './meta';
import type { FC } from 'react';

type TProps = THelmetProps;

const Helmet: FC<TProps> = (props: TProps) => {
  const { title }: TProps = props;
  return (
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <meta name="format-detection" content="telephone=no" />
      <title>{title}</title>
      <Meta {...props} />
      <link
        rel="icon"
        type="image/vnd.microsoft.ico"
        href={`${ICON_PATH}favicon.ico`}
      />
      <link rel="apple-touch-icon" href={`${ICON_PATH}apple_touch_icon.png`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${ICON_PATH}apple_touch_icon_180_180.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href={`${ICON_PATH}apple_touch_icon_192_192.png`}
      />
      <style>{STYLE_ROOT_FONT_FAMILY}</style>
    </Head>
  );
};

export { Helmet };
