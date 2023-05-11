'use client';

import Link from 'next/link';
import { motion as m, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../shared/SectionHeader';

const Projects = () => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  return (
    <section
      id="projects"
      className="snap-center flex flex-col items-center min-h-[calc(100vh-3.5rem)] w-screen scroll-my-0  mt-14"
    >
      {isInView && (
        <>
          <SectionHeader title="projects" />

          <m.article
            className="flex flex-col items-center justify-center w-4/5 h-full mt-14  rounded-lg bg-[var(--secondary-bg-color)] border"
            initial={{ y: '30px', opacity: 0 }}
            animate={{ y: '0px', opacity: 1 }}
            transition={{ delay: 0.4, opacity: { duration: 0.5 } }}
          >
            <m.h3
              className="p-4 text-base text-[var(--secondary-text-color)]"
              initial={{ x: '30px', opacity: 0 }}
              animate={{ x: '0px', opacity: 1 }}
              transition={{ delay: 0.6, opacity: { duration: 0.5 } }}
            >
              JavaScript Interview questions App
            </m.h3>
            <div className="flex flex-col justify-between w-full h-80">
              <m.div
                className="px-5 py-2"
                initial={{ y: '30px', opacity: 0 }}
                animate={{ y: '0px', opacity: 1 }}
                transition={{ delay: 0.8, opacity: { duration: 0.5 } }}
              >
                <h4 className="text-sm text-justify">
                  A web app for everybody who wants to prepare for recruitment
                  interviews, especially in the JavaScript topic. You can add
                  your own pool of questions or use the existing one. The
                  questions are stored in a MongoDB database. Current questions
                  with answers are saved in local storage, so if you don`t have
                  enough time to complete a study session, you can come back to
                  it later. You can also check the original visual concept that
                  I created in the Figma Prototype.
                </h4>
              </m.div>
              <div className="flex w-full h-8 p-4 border-b border-gray-500">
                <ul className="flex items-center justify-around w-full">
                  <m.li
                    className="text-sm text-gray-500"
                    initial={{ x: '30px', opacity: 0 }}
                    animate={{ x: '0px', opacity: 1 }}
                    transition={{ delay: 0.9, opacity: { duration: 0.5 } }}
                  >
                    React
                  </m.li>
                  <m.li
                    className="text-sm text-gray-500"
                    initial={{ x: '40px', opacity: 0 }}
                    animate={{ x: '0px', opacity: 1 }}
                    transition={{ delay: 1, opacity: { duration: 0.5 } }}
                  >
                    Next.js
                  </m.li>
                  <m.li
                    className="text-sm text-gray-500"
                    initial={{ x: '50px', opacity: 0 }}
                    animate={{ x: '0px', opacity: 1 }}
                    transition={{ delay: 1.1, opacity: { duration: 0.5 } }}
                  >
                    Tailwind
                  </m.li>
                  <m.li
                    className="text-sm text-gray-500"
                    initial={{ x: '60px', opacity: 0 }}
                    animate={{ x: '0px', opacity: 1 }}
                    transition={{ delay: 1.2, opacity: { duration: 0.5 } }}
                  >
                    Typescript
                  </m.li>
                  <m.li
                    className="text-sm text-gray-500"
                    initial={{ x: '70px', opacity: 0 }}
                    animate={{ x: '0px', opacity: 1 }}
                    transition={{ delay: 1.3, opacity: { duration: 0.5 } }}
                  >
                    Supabase
                  </m.li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 py-2 border-t border-gray-500">
              <ul className="flex justify-between">
                <m.li
                  className=" w-16 h-9 border border-[var(--secondary-text-color)]"
                  initial={{ x: '30px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 1.5, opacity: { duration: 0.5 } }}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-center text-center w-full h-full text-[var(--secondary-text-color)] text-base"
                  >
                    Live
                  </Link>
                </m.li>
                <m.li
                  className="w-16 h-9 border border-[var(--secondary-text-color)]"
                  initial={{ x: '40px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 1.6, opacity: { duration: 0.5 } }}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-center text-center w-full h-full text-[var(--secondary-text-color)] text-base"
                  >
                    Repo
                  </Link>
                </m.li>
                <m.li
                  className="w-16 h-9 border border-[var(--secondary-text-color)]"
                  initial={{ x: '50px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 1.7, opacity: { duration: 0.5 } }}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-center text-center w-full h-full text-[var(--secondary-text-color)] text-base"
                  >
                    Figma
                  </Link>
                </m.li>
              </ul>
            </div>
          </m.article>
        </>
      )}
      <div ref={myRef} className=""></div>
    </section>
  );
};

export default Projects;
