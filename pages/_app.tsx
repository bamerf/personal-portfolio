import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Nav } from 'components/Nav';
import { Container } from 'components/atoms/Container';
import { Footer } from 'components/Footer';
import { NavData } from 'data';

// TODO add work data, and create [company].tsx and unified
// TODO add dark mode
// // TODO fix zoomed out version
// // TODO add favicon
// // TODO add meta tags
// // TODO add title and description
// // TODO add html lang
// TODO add alt tags to images
// // TODO add redirect for /work
// // TODO add back button to work pages
// TODO check text color across app, maybe create Text and Heading components
// // TODO replace a links
// // TODO check margin across app, use a consistent system
// TODO check text and data
// TODO add tailwind theme function and replace harcoded values
// TOdo check purge css
// TODO organise icons
// TODO create hamburger menu
// TODO add color theme creator
// TODO add next 13 and new font system

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-neutral-900">
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          title="Bamdad Erfanian - Senior Software Engineer"
          lang="en"
        />
      </Head>
      <Container>
        <Nav navLinks={NavData} />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer navLinks={NavData} />
      </Container>
    </div>
  );
}

export default MyApp;
