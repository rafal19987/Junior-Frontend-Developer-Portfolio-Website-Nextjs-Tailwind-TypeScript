'use client';

import Script from 'next/script';

export const CookieYes = () => {
  return (
    <Script
      id='cookieyes'
      type='text/javascript'
      src='https://cdn-cookieyes.com/client_data/dc91a63512eab29c6541c0aa/script.js'
      strategy='afterInteractive'
    />
  );
};
