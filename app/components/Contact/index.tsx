'use client';

import { Permanent_Marker } from 'next/font/google';
import { useRef, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { SectionWrapper } from '../shared/SectionWrapper';
import Form from './Form';
import { Button } from '../shared/Button';
import Link from 'next/link';

const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

const EMAIL_REGEX: string = `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`;

export const Contact = () => {
  const myRef = useRef(null);

  return (
    <SectionWrapper id='contact' title='contact'>
      <Toaster />

      <div className='flex flex-col items-center justify-center w-full h-full mb-14 '>
        <div className='flex flex-col items-start justify-start md:w-2/5'>
          <span
            className={`${permamentMarker.className} self-start text-2xl text-[var(--secondary-text-color)] md:text-3xl`}
          >
            Let`s talk
          </span>
          <span className='mt-2 text-base md:text-xl max-w-[500px]'>
            I’m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </span>
          <Link
            href='mailto:rizdebski29@gmail.com'
            className='self-end md:self-start mt-8 md:mt-14'
          >
            <Button className='w-52 h-20'>Send e-mail</Button>
          </Link>
        </div>
      </div>
      <div ref={myRef} className=''></div>
    </SectionWrapper>
  );
};
