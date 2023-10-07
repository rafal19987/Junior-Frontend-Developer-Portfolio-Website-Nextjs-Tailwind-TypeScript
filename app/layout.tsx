import { PageWrapper } from './components/shared/PageWrapper';
import { lato, langar, permanentMarker } from './helpers/fonts';
import { Header } from './components/Header/Header';
import { AppContextProvider } from './context/AppContext';
import './globals.css';

export const metadata = {
  title: 'Rafał Izdebski',
  description: 'Rafał Izdebski Frontend Dev Portfolio Site',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${lato.variable} ${permanentMarker.variable} ${langar.variable}`}
      >
        <AppContextProvider>
          <PageWrapper>
            <Header />
            {children}
          </PageWrapper>
        </AppContextProvider>
      </body>
    </html>
  );
}
