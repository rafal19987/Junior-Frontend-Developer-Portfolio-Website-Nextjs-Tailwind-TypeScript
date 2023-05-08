import Header from './components/Header/Header';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rafał Izdebski',
  description: 'Rafał Izdebski Frontend Dev Portfolio Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-full overflow-x-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
