import clsx from 'clsx';
import { forwardRef } from 'react';

import { getDataAttribute } from '../../../../utils';

import type { TTypographyProps } from './type';
import type { ForwardedRef } from 'react';

import styles from './styles.module.scss';

type TProps = TTypographyProps;

const Typography = forwardRef((props: TProps, ref: ForwardedRef<never>) => {
  const {
    Tag,
    children,
    settings,
    family,
    className,
    dangerouslySetInnerHTML,
  }: TProps = props;

  return (
    <Tag
      {...getDataAttribute(props)}
      ref={ref}
      className={clsx(styles.container, className)}
      data-mq-xs={settings && !!settings.xs}
      data-mq-sm={settings && !!settings.sm}
      data-mq-md={settings && !!settings.md}
      data-mq-lg={settings && !!settings.lg}
      data-mq-xl={settings && !!settings.xl}
      data-mq-xxl={settings && !!settings.xxl}
      data-font-family={family}
      data-xs-font-size={settings && settings.xs?.size}
      data-xs-font-weight={settings && settings.xs?.weight}
      data-xs-line-height={settings && settings.xs?.lineHeight}
      data-xs-letter-spacing={settings && settings.xs?.letterSpacing}
      data-xs-font-color={settings && settings.xs?.color}
      data-sm-font-size={settings && settings.sm?.size}
      data-sm-font-weight={settings && settings.sm?.weight}
      data-sm-line-height={settings && settings.sm?.lineHeight}
      data-sm-letter-spacing={settings && settings.sm?.letterSpacing}
      data-sm-font-color={settings && settings.sm?.color}
      data-md-font-size={settings && settings.md?.size}
      data-md-font-weight={settings && settings.md?.weight}
      data-md-line-height={settings && settings.md?.lineHeight}
      data-md-letter-spacing={settings && settings.md?.letterSpacing}
      data-md-font-color={settings && settings.md?.color}
      data-lg-font-size={settings && settings.lg?.size}
      data-lg-font-weight={settings && settings.lg?.weight}
      data-lg-line-height={settings && settings.lg?.lineHeight}
      data-lg-letter-spacing={settings && settings.lg?.letterSpacing}
      data-lg-font-color={settings && settings.lg?.color}
      data-xl-font-size={settings && settings.xl?.size}
      data-xl-font-weight={settings && settings.xl?.weight}
      data-xl-line-height={settings && settings.xl?.lineHeight}
      data-xl-letter-spacing={settings && settings.xl?.letterSpacing}
      data-xl-font-color={settings && settings.xl?.color}
      data-xxl-font-size={settings && settings.xxl?.size}
      data-xxl-font-weight={settings && settings.xxl?.weight}
      data-xxl-line-height={settings && settings.xxl?.lineHeight}
      data-xxl-letter-spacing={settings && settings.xxl?.letterSpacing}
      data-xxl-font-color={settings && settings.xxl?.color}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </Tag>
  );
});
Typography.displayName = 'Typography';

export { Typography };
