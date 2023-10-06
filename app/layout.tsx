import { PageWrapper } from './components/shared/PageWrapper';
import Header from './components/Header/Header';
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
    <html lang="en">
      <body>
        <PageWrapper>
          <Header />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
