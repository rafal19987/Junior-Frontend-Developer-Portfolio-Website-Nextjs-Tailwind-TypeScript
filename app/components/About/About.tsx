'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion as m, useInView } from 'framer-motion';

import dotIcon from 'assets/dot.svg';

const About = () => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  return (
    <section
      id="about"
      className="snap-center flex flex-col items-center min-h-[calc(100vh-3.5rem)] w-screen scroll-my-0 mt-14"
    >
      {isInView && (
        <>
          <m.div
            className="flex items-center justify-center w-3/5 h-full border-[#64FFDA] border-b "
            initial={{ y: '30px', opacity: 0 }}
            animate={{ y: '0px', opacity: 1 }}
            transition={{ delay: 0.3, opacity: { duration: 0.5 } }}
          >
            <h2 className="p-4 text-2xl">About</h2>
          </m.div>
          <div className="flex flex-col items-center justify-center w-4/5 h-full mt-8 md:w-3/5">
            <m.span
              className=" self-start"
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.4, opacity: { duration: 0.5 } }}
            >
              {' '}
              Hi there!
            </m.span>
            <m.p
              className="text-sm mt-2 "
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.5, opacity: { duration: 0.5 } }}
            >
              I am an aspiring Frontend Developer based in Poland looking for
              opportunities to grow and excel in the field.
            </m.p>
            <m.p
              className="text-sm mt-2"
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.6, opacity: { duration: 0.5 } }}
            >
              I am highly motivated, ambitious, and ready to take on new
              challenges. Currently, I am expanding my knowledge in TypeScript
              and Next.js. In free time I like kayaking.
            </m.p>
          </div>
        </>
      )}
      {isInView && (
        <>
          <m.div
            className="flex flex-col items-center justify-center w-full h-full mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, opacity: { duration: 0.5 } }}
          >
            <h3 className="text-xl">Frontend skills</h3>
            <div className="w-4/5 h-full mt-8 ">
              <ol className="list-disc">
                <m.li
                  className="flex mt-2"
                  initial={{ x: '30px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 0.8, opacity: { duration: 0.5 } }}
                >
                  <Image src={dotIcon} alt="dot order list icon"></Image>
                  <span className="ml-2 text-sm"> HTML, CSS/SASS</span>
                </m.li>
                <m.li
                  className="flex mt-1"
                  initial={{ x: '40px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 0.9, opacity: { duration: 0.5 } }}
                >
                  <Image src={dotIcon} alt="dot order list icon"></Image>
                  <span className="ml-2 text-sm">React, Next.js</span>
                </m.li>
                <m.li
                  className="flex mt-1"
                  initial={{ x: '50px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 1, opacity: { duration: 0.5 } }}
                >
                  <Image src={dotIcon} alt="dot order list icon"></Image>
                  <span className="ml-2 text-sm">
                    Tailwind, Styled-components
                  </span>
                </m.li>
                <m.li
                  className="flex mt-1"
                  initial={{ x: '60px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 1.1, opacity: { duration: 0.5 } }}
                >
                  <Image src={dotIcon} alt="dot order list icon"></Image>
                  <span className="ml-2 text-sm">
                    Conventional Commits, BEM
                  </span>
                </m.li>
                <m.li
                  className="flex mt-1"
                  initial={{ x: '70px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 1.2, opacity: { duration: 0.5 } }}
                >
                  <Image src={dotIcon} alt="dot order list icon"></Image>
                  <span className="ml-2 text-sm">Figma, Github</span>
                </m.li>
              </ol>
            </div>
          </m.div>
        </>
      )}
      <div ref={myRef} className=""></div>
    </section>
  );
};

export default About;
