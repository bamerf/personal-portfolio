import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Nav } from 'components/Nav';
import { Container } from 'components/atoms/Container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // TODO add custom gray-900
    <div className="bg-black">
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          title="Bamdad Erfanian Personal Portfolio"
        />
      </Head>
      <Container>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    </div>
  );
}

export default MyApp;
