'use client';

import { useRef } from 'react';
import { motion as m, useInView } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import SectionBody from '../shared/SectionBody';
import FrontendSkills from './FrontendSkills';

const About = () => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  return (
    <SectionBody id="about">
      {isInView && (
        <div className="flex flex-col items-center border-red-500 xl:w-3/5">
          <SectionHeader title="about" />
          <div className="flex flex-col items-center justify-center w-full  h-full mt-8 p-6 md:w-3/5 xl:w-full">
            <m.p
              className=" self-start xl:text-2xl"
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.4, opacity: { duration: 0.5 } }}
            >
              Hi there!
            </m.p>
            <m.p
              className="w-full text-sm mt-2 xl:mt-4 xl:text-xl"
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.5, opacity: { duration: 0.5 } }}
            >
              I am an aspiring Frontend Developer based in Poland looking for
              opportunities to grow and excel in the field.
            </m.p>
            <m.p
              className="text-sm mt-2 xl:mt-3 xl:text-xl"
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.6, opacity: { duration: 0.5 } }}
            >
              I am highly motivated, ambitious, and ready to take on new
              challenges. Currently, I am expanding my knowledge in TypeScript
              and Next.js. In free time I like kayaking.
            </m.p>
          </div>
        </div>
      )}
      {isInView && <FrontendSkills />}
      <div ref={myRef} className=""></div>
    </SectionBody>
  );
};

export default About;
