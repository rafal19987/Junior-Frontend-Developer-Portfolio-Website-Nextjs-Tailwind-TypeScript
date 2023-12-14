import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from './GoogleAnalytics';
import { PageWrapper } from './components/shared/PageWrapper';
import { Header } from './components/Header';
import { AppContextProvider } from './context/AppContext';
import { TailwindIndicator } from './components/shared/TailwindIndicator';
import './globals.css';
import { lato, langar, permanentMarker } from './helpers/fonts';

export const metadata: Metadata = {
  title: 'Rafał Izdebski Junior Front-End Developer',
  description: 'Junior Front-End developer portfolio website',
  icons: {
    icon: '/favicon.svg',
  },
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    title: 'Rafał Izdebski Junior Front-End Developer',
    description: 'Junior Front-End Developer portfolio website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <GoogleAnalytics />
      <body
        className={`${lato.variable} ${permanentMarker.variable} ${langar.variable}`}
      >
        <AppContextProvider>
          <PageWrapper>
            <Header />
            {children}
          </PageWrapper>
        </AppContextProvider>
        <TailwindIndicator />
        <Analytics />
      </body>
    </html>
  );
}
