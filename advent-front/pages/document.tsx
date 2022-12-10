import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {CssBaseline.flush()}
          <script type="text/javascript">document.oncontextmenu = function(){return false;}</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
