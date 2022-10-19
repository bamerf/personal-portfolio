import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Nav } from 'components/Nav';
import { Container } from 'components/atoms/Container';
import { Footer } from 'components/Footer';

// TODO add responsive
// TODO add dark mode

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-neutral-900">
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
        <Footer />
      </Container>
    </div>
  );
}

export default MyApp;
