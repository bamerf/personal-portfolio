import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { Nav } from 'components/Nav';
import { Container } from 'components/atoms/Container';
import { Footer } from 'components/Footer';
import { navData } from 'data';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Bamdad Erfanian"
        description="Portfolio of Bamdad Erfanian, Senior Software Engineer based in New York."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.bamerf.com/',
          siteName: 'bamerf',
        }}
      />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div
          className={`${instrumentSans.variable} ${jetbrainsMono.variable} font-sans bg-neutral-50 dark:bg-neutral-950`}
        >
          <Container>
            <Nav navLinks={navData} />
            <main>
              <Component {...pageProps} />
            </main>
            <Footer navLinks={navData} />
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
