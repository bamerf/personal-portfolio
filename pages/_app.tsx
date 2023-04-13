import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { Nav } from 'components/Nav';
import { Container } from 'components/atoms/Container';
import { Footer } from 'components/Footer';
import { navData } from 'data';

// TODO responsive typography for headings
// TODO organise icons
// TODO create hamburger menu
// TODO add color theme creator

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Next SEO Example"
        description="Next SEO is a plug in that makes managing your SEO easier in Next.js projects."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.bamerf.com/',
          siteName: 'bamerf',
        }}
      />
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
    </>
  );
}

export default MyApp;
