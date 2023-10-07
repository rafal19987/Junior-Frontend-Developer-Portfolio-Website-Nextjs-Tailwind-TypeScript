import { Permanent_Marker, Lato, Langar } from 'next/font/google';

export const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanent-marker',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-lato',
});

export const langar = Langar({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-langar',
});
