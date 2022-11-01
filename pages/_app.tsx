import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Nav } from 'components/Nav';
import { Container } from 'components/atoms/Container';
import { Footer } from 'components/Footer';
import { navData } from 'data';

// TODO add next 13 and new font system
// TODO responsive typography for headings
// TODO add font
// TODO organise icons
// TODO create hamburger menu
// TODO add color theme creator

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="font-sans dark:bg-neutral-900">
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
