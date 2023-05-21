'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import SocialList from './SocialList';

import { Permanent_Marker } from 'next/font/google';
import scrollDownIcon from 'assets/scrollDown.svg';
import bigLogo from 'assets/bigLogo.svg';

const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

const Home = () => {
  const [done, setDone] = useState<boolean>(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setTimeout(() => setDone(true), 1000);
  }, []);

  if (!done)
    return (
      <section
        id="home"
        className="snap-center relative flex items-center justify-center min-h-[calc(100vh-3.5rem)] w-screen"
      >
        <Image
          src={bigLogo}
          width={200}
          height={200}
          alt="loading icon"
          className="mb-48 animate-pulse"
        />
      </section>
    );

  return (
    <section
      id="home"
      className="snap-center relative min-h-[calc(100vh-3.5rem)] w-screen xl:flex  xl:justify-center"
    >
      <div className="flex flex-col items-center justify-center h-full p-6 xl:w-3/5 mt-14">
        <div className="flex flex-col items-start mt-14 xl:mt-20">
          <m.span
            initial={{ y: '30px', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[var(--secondary-text-color)]"
          >
            Hi, my name is
          </m.span>
          <m.h1
            className={`${permamentMarker.className} text-4xl text-[#CCD6F6] xl:text-6xl`}
            initial={{ y: '30px', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Rafal Izdebski
          </m.h1>
          <m.h2
            className="mt-5 text-sm xl:text-3xl"
            initial={{ y: '30px', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I am an aspiring Frontend Developer focusing mainly on working with
            React (occassionally designing in Figma).
          </m.h2>
          <SocialList />
        </div>
        <m.div
          className="absolute bottom-8 flex items-center justify-center w-full h-20 mt-28 z-0 xl:flex xl:w-3/5 xl:bottom-24 "
          initial={{ y: '100px', opacity: 0 }}
          animate={{ y: '0', opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <button className="flex items-center justify-center w-[75px] h-[75px] rounded-full border-2 border-[#64FFDA]">
            <Link href="#about" onClick={handleScroll}>
              <Image
                className="mt-2 animate-bounce"
                src={scrollDownIcon}
                alt="scroll down icon"
              />
            </Link>
          </button>
        </m.div>
      </div>
    </section>
  );
};

export default Home;
