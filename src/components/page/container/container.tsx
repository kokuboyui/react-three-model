import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { useFoucFix } from './use-fouc-fix';
import { useWindowSizeValue } from './use-window-size-value';
import { DebugObserver } from '../../functional/debug-observer';

import type { AppProps } from 'next/app';
import type { FC } from 'react';

import styles from './styles.module.scss';

type TProps = AppProps;

const Container: FC<TProps> = (props: TProps) => {
  const { Component, pageProps, router }: TProps = props;
  // hooks ------------------------------------------
  useWindowSizeValue();
  useFoucFix();

  return (
    <>
      {!process.env.isProduction && <DebugObserver />}
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={router.pathname}
          timeout={1000}
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
          }}
        >
          <Component {...pageProps} key={router.route} />
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export { Container };
