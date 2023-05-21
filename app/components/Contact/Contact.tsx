'use client';

import { Permanent_Marker } from 'next/font/google';
import { motion as m, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import SectionHeader from '../shared/SectionHeader';
import SectionBody from '../shared/SectionBody';

const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

const Contact = () => {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [vaildError, setValidError] = useState(false);

  const nameField = useRef(null);
  const emailField = useRef(null);
  const messageField = useRef(null);

  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  useEffect(() => {
    name.length < 4 && name.length > 1
      ? setNameValid(false)
      : setNameValid(true);
  }, [name, email, message]);

  const sendForm = async (e: any) => {
    e.preventDefault();

    if (name.length < 4 && name.length > 1) {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
    if (!name || !email || !message) await setValidError(true);

    if (name && email && message) {
      await setValidError(false);
      await console.log(
        `Wysyłanie wiadomości o treści: ${message} od ${name}: ${email}`
      );
    }
  };

  return (
    <SectionBody id="contact">
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
              {vaildError && (
                <span className="mt-4 text-red-500">
                  Wszystkie pola muszą być uzupełnione
                </span>
              )}
              <form className="flex flex-col w-full">
                <label className=" mt-7 md:mt-0" htmlFor="name">
                  {!nameValid && (
                    <span className="mt-4 text-red-500">
                      Imię musi mieć przynajmniej 4 znaki
                    </span>
                  )}
                  Name:
                </label>
                <input
                  ref={nameField}
                  className="mt-2 p-2 bg-[var(--secondary-bg-color)] rounded-lg text-white text-base placeholder:text-[#fff]/25"
                  type="text"
                  name="name"
                  placeholder="Write your name here...*"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label className=" mt-4" htmlFor="email">
                  Email:
                </label>
                <input
                  ref={emailField}
                  className="mt-2 p-2 bg-[var(--secondary-bg-color)] rounded-lg text-white text-base placeholder:text-[#fff]/25"
                  type="text"
                  name="email"
                  placeholder="Write your email here...*"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className=" mt-4" htmlFor="message">
                  Message:
                </label>
                <textarea
                  ref={messageField}
                  className="mt-2 p-2 bg-[var(--secondary-bg-color)] rounded-lg text-white text-base placeholder:text-[#fff]/25 caret-[var(--secondary-text-color)]"
                  cols={40}
                  rows={4}
                  name="message"
                  placeholder="Write your message here...*"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="self-end w-44 h-12 mt-8 border-2 border-[var(--secondary-text-color)] rounded-lg text-[var(--secondary-text-color)] text-base"
                  onClick={(e) => sendForm(e)}
                >
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
