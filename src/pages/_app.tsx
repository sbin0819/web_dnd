import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../styles/theme';
import useTheme from '@hooks/useTheme';
import Header from '@components/Header';
function MyApp({ Component, pageProps }: AppProps) {
  const type = useTheme();
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <ThemeProvider theme={theme(type)}>
        <Header size={type} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
