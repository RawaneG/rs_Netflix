import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'

import '../styles/globals.css';
import Head from 'next/head';

export default function App({
  Component,
  pageProps: {
    session,
    ...pageProps
  }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Netflix</title>
      </Head>
        <Component {...pageProps} />
    </SessionProvider>
  )
}
