'use client';

import { Permanent_Marker } from 'next/font/google';
import { useRef, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { SectionWrapper } from '../shared/SectionWrapper';
import Form from './Form';

const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

const EMAIL_REGEX: string = `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`;

const Contact = () => {
  const myRef = useRef(null);

  return (
    <SectionWrapper id="contact" title="contact">
      <Toaster />

      <div className="flex flex-col items-center justify-center w-full h-full mb-14  md:items-start md:flex-row ">
        <div className="flex flex-col items-center justify-start md:w-2/5">
          <span
            className={`${permamentMarker.className} self-start text-2xl text-[var(--secondary-text-color)] md:text-3xl`}
          >
            Let`s talk
          </span>
          <span className="mt-2 text-base md:text-xl">
            If you have any questions or potential collaborations, I would be
            thrilled to explore them. Thank you for your attention!
          </span>
        </div>
        <div className="w-full h-96 md:w-3/5 md:ml-8">
          <Form />
        </div>
      </div>

      <div ref={myRef} className=""></div>
    </SectionWrapper>
  );
};

export default Contact;
