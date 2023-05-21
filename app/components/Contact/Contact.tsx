'use client';

import { Permanent_Marker } from 'next/font/google';
import { motion as m, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../shared/SectionHeader';
import SectionBody from '../shared/SectionBody';

const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

const Contact = () => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  return (
    <SectionBody id="contact">
      {isInView && (
        <>
          <SectionHeader title="contact" />
          <div className="flex flex-col items-center justify-center w-full h-full mt-8 p-6">
            <m.span
              className={`${permamentMarker.className} self-start text-2xl text-[var(--secondary-text-color)]`}
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.4, opacity: { duration: 0.5 } }}
            >
              Let`s talk
            </m.span>
            <m.span
              className="mt-2 text-base"
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.5, opacity: { duration: 0.5 } }}
            >
              If you have any questions or potential collaborations, I would be
              thrilled to explore them. Thank you for your attention!
            </m.span>
            <m.div
              className="w-full h-96"
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.6, opacity: { duration: 0.5 } }}
            >
              <form className="flex flex-col w-full">
                <label className=" mt-7" htmlFor="name">
                  Name:
                </label>
                <input
                  className="mt-2 p-2 bg-[var(--secondary-bg-color)] rounded-lg text-white text-base placeholder:text-[#fff]/25"
                  type="text"
                  name="name"
                  placeholder="Write your name here...*"
                  required
                />
                <label className=" mt-4" htmlFor="email">
                  Email:
                </label>
                <input
                  className="mt-2 p-2 bg-[var(--secondary-bg-color)] rounded-lg text-white text-base placeholder:text-[#fff]/25"
                  type="text"
                  name="email"
                  placeholder="Write your email here...*"
                  required
                />
                <label className=" mt-4" htmlFor="message">
                  Message*:
                </label>
                <textarea
                  className="mt-2 p-2 bg-[var(--secondary-bg-color)] rounded-lg text-white text-base placeholder:text-[#fff]/25"
                  cols={40}
                  rows={4}
                  name="message"
                  placeholder="Write your message here...*"
                  required
                />
                <button className="self-end w-44 h-12 mt-8 border-2 border-[var(--secondary-text-color)] rounded-lg text-[var(--secondary-text-color)] text-base">
                  Send Message
                </button>
              </form>
            </m.div>
          </div>
        </>
      )}
      <div ref={myRef} className=""></div>
    </SectionBody>
  );
};

export default Contact;
