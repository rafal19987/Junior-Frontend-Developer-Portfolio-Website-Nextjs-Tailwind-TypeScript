'use client';

import { Permanent_Marker } from 'next/font/google';
import { motion as m, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import SectionHeader from '../shared/SectionHeader';
import SectionBody from '../shared/SectionBody';
import Form from './Form';

const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

const EMAIL_REGEX: string = `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`;

const Contact = () => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  return (
    <SectionBody id="contact">
      <Toaster />
      {isInView && (
        <>
          <SectionHeader title="contact" />
          <div className="flex flex-col items-center justify-center w-full h-full mt-8 p-6 xl:w-[1000px] md:items-start md:flex-row ">
            <div className="flex flex-col items-center justify-start md:w-2/5">
              <m.span
                className={`${permamentMarker.className} self-start text-2xl text-[var(--secondary-text-color)] md:text-3xl`}
                initial={{ y: '30px', opacity: 0 }}
                animate={{ y: '0px', opacity: 1 }}
                transition={{ delay: 0.4, opacity: { duration: 0.5 } }}
              >
                Let`s talk
              </m.span>
              <m.span
                className="mt-2 text-base md:text-xl"
                initial={{ y: '30px', opacity: 0 }}
                animate={{ y: '0px', opacity: 1 }}
                transition={{ delay: 0.5, opacity: { duration: 0.5 } }}
              >
                If you have any questions or potential collaborations, I would
                be thrilled to explore them. Thank you for your attention!
              </m.span>
            </div>
            <m.div
              className="w-full h-96 md:w-3/5 md:ml-8"
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.6, opacity: { duration: 0.5 } }}
            >
              <Form />
            </m.div>
          </div>
        </>
      )}
      <div ref={myRef} className=""></div>
    </SectionBody>
  );
};

export default Contact;
