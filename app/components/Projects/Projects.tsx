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
        <div className="flex flex-col items-center w-full xl:w-3/5">
          <SectionHeader title="projects" />

          <m.article
            className="flex flex-col items-center justify-center w-4/5 h-full mt-14  rounded-lg bg-[var(--secondary-bg-color)] xl:w-3/5"
            initial={{ y: '30px', opacity: 0 }}
            animate={{ y: '0px', opacity: 1 }}
            transition={{ delay: 0.4, opacity: { duration: 0.5 } }}
          >
            <m.h3
              className="p-4 text-base text-[var(--secondary-text-color)] xl:text-xl"
              initial={{ x: '30px', opacity: 0 }}
              animate={{ x: '0px', opacity: 1 }}
              transition={{ delay: 0.6, opacity: { duration: 0.5 } }}
            >
              JavaScript Interview questions App
            </m.h3>
            <div className="flex flex-col justify-between w-full min-h-80 max-h-full">
              <m.div
                className="px-5 py-2"
                initial={{ y: '30px', opacity: 0 }}
                animate={{ y: '0px', opacity: 1 }}
                transition={{ delay: 0.8, opacity: { duration: 0.5 } }}
              >
                <h4 className="text-sm text-justify  xl:text-xl">
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

              <div className="flex items-center justify-center w-full h-full">
                <ul className="flex flex-wrap items-center justify-center w-full h-full px-4 pb-4 xl:py-4  xl:justify-between">
                  <m.li
                    className="flex items-center justify-center w-20 h-full"
                    initial={{ x: '30px', opacity: 0 }}
                    animate={{ x: '0px', opacity: 1 }}
                    transition={{ delay: 0.9, opacity: { duration: 0.5 } }}
                  >
                    <span className="text-sm text-gray-500  xl:text-base">
                      React{' '}
                    </span>
                  </m.li>
                  <m.li
                    className="flex items-center justify-center w-20 h-full"
                    initial={{ x: '40px', opacity: 0 }}
                    animate={{ x: '0px', opacity: 1 }}
                    transition={{ delay: 1, opacity: { duration: 0.5 } }}
                  >
                    <span className="text-sm text-gray-500 xl:text-base">
                      {' '}
                      Next.js{' '}
                    </span>
                  </m.li>
                  <m.li
                    className="flex items-center justify-center w-20 h-full"
                    initial={{ x: '50px', opacity: 0 }}
                    animate={{ x: '0px', opacity: 1 }}
                    transition={{ delay: 1.1, opacity: { duration: 0.5 } }}
                  >
                    <span className="text-sm text-gray-500 xl:text-base">
                      Tailwind
                    </span>
                  </m.li>
                  <m.li
                    className="flex items-center justify-center w-20 h-full"
                    initial={{ x: '60px', opacity: 0 }}
                    animate={{ x: '0px', opacity: 1 }}
                    transition={{ delay: 1.2, opacity: { duration: 0.5 } }}
                  >
                    <span className="text-sm text-gray-500 xl:text-base">
                      Typescript
                    </span>
                  </m.li>
                  <m.li
                    className="flex items-center justify-center w-20 h-full "
                    initial={{ x: '70px', opacity: 0 }}
                    animate={{ x: '0px', opacity: 1 }}
                    transition={{ delay: 1.3, opacity: { duration: 0.5 } }}
                  >
                    <span className="text-sm text-gray-500 xl:text-base">
                      Supabase{' '}
                    </span>
                  </m.li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 py-4 border-t border-gray-500">
              <ul className="flex justify-between">
                <m.li
                  className="group w-16 h-9 border border-[var(--secondary-text-color)] xl:w-20 xl:h-12  hover:border-violet-500 transition-colors"
                  initial={{ x: '30px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 1.5, opacity: { duration: 0.5 } }}
                >
                  <Link
                    href="https://interview-questions-app.vercel.app/"
                    className="flex items-center justify-center text-center w-full h-full text-[var(--secondary-text-color)] text-base group-hover:text-violet-500 transition-colors"
                    target="_blank"
                  >
                    Live
                  </Link>
                </m.li>
                <m.li
                  className="group w-16 h-9 border border-[var(--secondary-text-color)] xl:w-20 xl:h-12 hover:border-violet-500 transition-colors"
                  initial={{ x: '40px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 1.6, opacity: { duration: 0.5 } }}
                >
                  <Link
                    href="https://github.com/rafal19987/Interview-Questions-App"
                    className="flex items-center justify-center text-center w-full h-full text-[var(--secondary-text-color)] text-base group-hover:text-violet-500 transition-colors"
                    target="_blank"
                  >
                    Repo
                  </Link>
                </m.li>
                <m.li
                  className=" group w-16 h-9 border border-[var(--secondary-text-color)] xl:w-20 xl:h-12 hover:border-violet-500 transition-colors"
                  initial={{ x: '50px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ delay: 1.7, opacity: { duration: 0.5 } }}
                >
                  <Link
                    href="https://www.figma.com/proto/8QvtrBsjZqSzMUszJSo9qD/Interview-Questions?node-id=1-3&starting-point-node-id=1%3A3"
                    className="flex items-center justify-center text-center w-full h-full text-[var(--secondary-text-color)] text-base group-hover:text-violet-500 transition-colors"
                    target="_blank"
                  >
                    Figma
                  </Link>
                </m.li>
              </ul>
            </div>
          </m.article>
        </div>
      )}
      <div ref={myRef} className=""></div>
    </section>
  );
};

export default Projects;
