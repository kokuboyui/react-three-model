import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

import { GtagBody } from '../components/page/analytics/gtag';

import type { DocumentContext, DocumentInitialProps } from 'next/document';
import type { ReactElement } from 'react';

export default class CustomDocument extends NextDocument {
  /**
   * ページロード時にデータを取得する場合などに使う
   * @param context
   */

  public static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(context);

    return { ...initialProps };
  }

  public render(): ReactElement {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <GtagBody />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
