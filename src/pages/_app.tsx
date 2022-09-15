import 'styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType<any>;
  };
};
function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <div>
      <Head>
        <title>Template Title</title>
        <meta name="description" content="this is nextjs tailwind template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export default MyApp;
