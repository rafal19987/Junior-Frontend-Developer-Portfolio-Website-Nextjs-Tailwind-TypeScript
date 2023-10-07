'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import bigLogo from 'assets/bigLogo.svg';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setDone(true), 500);
  }, []);

  if (!done)
    return (
      <section
        id='home'
        className='absolute top-0 flex items-center justify-center h-screen w-screen bg-[var(--body-bg-color)]'
      >
        <Image
          src={bigLogo}
          width={200}
          height={200}
          alt='loading icon'
          className='animate-pulse'
        />
      </section>
    );

  return (
    <div className='flex flex-col items-center h-full text-[16px] text-primary font-lato'>
      {children}
    </div>
  );
};
