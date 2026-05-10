import type { Metadata } from 'next';
import { Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import { Providers } from 'components/Providers';
import { Nav } from 'components/Nav';
import { Container } from 'components/atoms/Container';
import { Footer } from 'components/Footer';
import { navData } from 'data';
import '../styles/globals.css';

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

export const metadata: Metadata = {
  title: 'Bamdad Erfanian',
  description:
    'Portfolio of Bamdad Erfanian, Senior Software Engineer based in New York.',
  openGraph: {
    type: 'website',
    url: 'https://www.bamerf.com/',
    siteName: 'bamerf',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-neutral-50 dark:bg-neutral-950">
        <Providers>
          <Container>
            <Nav navLinks={navData} />
            <main>{children}</main>
            <Footer navLinks={navData} />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
