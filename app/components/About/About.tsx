'use client';

import { useRef } from 'react';
import { motion as m, useInView } from 'framer-motion';
import { SectionWrapper } from '../shared/SectionWrapper';
import FrontendSkills from './FrontendSkills';

const About = () => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  return (
    <SectionWrapper id="about" title="about">
      {isInView && (
        <div className="flex flex-col items-center border-red-500">
          <p className=" self-start md:text-2xl">Hi there!</p>
          <p className="w-full text-sm mt-2 md:text-xl xl:mt-4 xl:text-xl">
            I am an experienced salesperson in the electrical industry, and I am
            currently transitioning into the IT field. I specialize in customer
            relations but also have knowledge in computer hardware, networks,
            and both frontend and backend programming. I have a deep
            understanding of customer needs and always strive to meet them.
          </p>
          <p className="w-full mt-2 text-sm md:text-xl xl:mt-1 xl:text-xl">
            I am highly motivated, ambitious, and ready to take on new
            challenges. Currently, I am expanding my knowledge in TypeScript and
            Next.js. In free time I like kayaking.
          </p>
          <FrontendSkills />
        </div>
      )}

      <div ref={myRef} className=""></div>
    </SectionWrapper>
  );
};

export default About;
