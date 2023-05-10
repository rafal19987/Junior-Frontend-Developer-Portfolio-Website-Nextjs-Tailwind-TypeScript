'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';

import { Permanent_Marker } from 'next/font/google';
import avatarSmall from 'assets/avatarSmall.png';
import githubSmall from 'assets/githubSmall.svg';
import linkedInSmall from 'assets/linkedinSmall.svg';
import scrollDownIcon from 'assets/scrollDown.svg';
import loadingIcon from 'assets/loading.svg';

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
    const timer = setTimeout(() => setDone(true), 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!done)
    return (
      <section
        id="home"
        className="snap-center relative flex items-center justify-center min-h-[calc(100vh-3.5rem)] w-screen"
      >
        <Image
          src={loadingIcon}
          width={200}
          height={200}
          alt="loading icon"
          className="mb-48 animate-spin"
        />
      </section>
    );

  return (
    <section
      id="home"
      className="snap-center relative min-h-[calc(100vh-3.5rem)] w-screen "
    >
      <m.div
        className="flex items-center justify-center w-full mt-14"
        initial={{ y: '30px', opacity: '0' }}
        animate={{ y: '0', opacity: '1' }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-center w-36 h-36 bg-gradient-to-b from-[#FFB800]/50 to-transparent rounded-full">
          <Image src={avatarSmall} alt="avatar" />
        </div>
      </m.div>
      <div className="flex flex-col items-center mt-7">
        <m.h1
          className={`${permamentMarker.className} text-4xl text-[#CCD6F6]`}
          initial={{ y: '30px', opacity: '0' }}
          animate={{ y: '0', opacity: '1' }}
          transition={{ delay: 0.3 }}
        >
          Rafael Izdebski
        </m.h1>
        <m.h2
          className="mt-5 text-xl"
          initial={{ y: '30px', opacity: '0' }}
          animate={{ y: '0', opacity: '1' }}
          transition={{ delay: 0.5 }}
        >
          I am a Frontend Developer
        </m.h2>
      </div>
      <div className="flex items-center justify-center mt-12">
        <ul className="flex items-center justify-between w-2/5">
          <m.li
            initial={{ x: '-100px', opacity: '0' }}
            animate={{ x: '0', opacity: '1' }}
            transition={{ delay: 0.7 }}
          >
            <Image src={githubSmall} alt="github icon" />
          </m.li>
          <m.li
            initial={{ x: '100px', opacity: '0' }}
            animate={{ x: '0', opacity: '1' }}
            transition={{ delay: 0.7 }}
          >
            <Image src={linkedInSmall} alt="linkedin icon" />
          </m.li>
        </ul>
      </div>
      <m.div
        className="absolute bottom-8 flex items-center justify-center w-full h-20 mt-28 z-0"
        initial={{ y: '100px', opacity: '0' }}
        animate={{ y: '0', opacity: '1' }}
        transition={{ delay: 0.9 }}
      >
        <button className="flex items-center justify-center w-[75px] h-[75px] rounded-full border-2 border-[#FFBE1A]">
          <Link href="#about" onClick={handleScroll}>
            <Image
              className="mt-2 animate-bounce"
              src={scrollDownIcon}
              alt="scroll down icon"
            />
          </Link>
        </button>
      </m.div>
    </section>
  );
};

export default Home;
