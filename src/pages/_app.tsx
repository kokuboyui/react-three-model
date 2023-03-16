import { RecoilRoot } from 'recoil';
import 'ress/dist/ress.min.css';

import { GtagHead } from '../components/page/analytics/gtag';
import { Container } from '../components/page/container';

import type { AppProps } from 'next/app';
import type { FC } from 'react';

import '../scripts/wdyr';

import '../styles/base/_global.scss';
import '../styles/base/_reset.scss';

const App: FC<AppProps> = (props: AppProps) => {
  const { Component, pageProps, router }: AppProps = props;

  return (
    <>
      <GtagHead />
      <RecoilRoot>
        <Container
          pageProps={pageProps}
          Component={Component}
          router={router}
        />
      </RecoilRoot>
    </>
  );
};

export default App;
