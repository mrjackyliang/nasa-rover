import { ThemeProvider as NextThemeProvider } from 'next-themes';
import Head from 'next/head';
import React from 'react';

import { AppProps } from '@/types';

/**
 * App.
 *
 * @param {AppProps} props - Props.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <NextThemeProvider enableSystem={false}>
      <Head>
        <title>NASA Mars Rover Photos</title>
      </Head>
      <Component {...pageProps} />
    </NextThemeProvider>
  );
}
