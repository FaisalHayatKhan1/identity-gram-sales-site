import React from 'react';
import Head from 'next/head';
import ThemeCustomization from '@themes';
import type { AppPropsWithLayout } from '@types';
import { SnackbarProvider } from 'notistack';
import { ConfigProvider } from '@context';
import './../@next/styles/react-table.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <React.Fragment>
      <Head>
        <title>Identity Gram</title>
      </Head>
      <ConfigProvider>
        <ThemeCustomization>
          <SnackbarProvider maxSnack={1}>
            {getLayout(<Component {...pageProps} />)}
          </SnackbarProvider>
        </ThemeCustomization>
      </ConfigProvider>
    </React.Fragment>
  );
}
export default MyApp;
