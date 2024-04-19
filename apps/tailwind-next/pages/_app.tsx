import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to tailwind-next!</title>
      </Head>
      <main className="app">
        <div className="bg-indigo-500 p-2 font-mono min-h-80">min-h-80 test</div>
        {/* <Component {...pageProps} /> */}
      </main>
    </>
  );
}

export default CustomApp;
