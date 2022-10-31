import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Nav } from 'components/Nav';
import { Container } from 'components/atoms/Container';
import { Footer } from 'components/Footer';
import { navData } from 'data';

// TODO responsive typography for headings
// TODO add font
// TODO organise icons
// TODO create hamburger menu
// TODO add color theme creator
// TODO add next 13 and new font system

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-neutral-900">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            title="Bamdad Erfanian - Senior Software Engineer"
            lang="en"
          />
        </Head>
        <Container>
          <Nav navLinks={navData} />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer navLinks={navData} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
