'use client';

import { useRef } from 'react';
import { motion as m, useInView } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import SectionBody from '../shared/SectionBody';
import Tab from './Tab';

const Experience = () => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  return (
    <SectionBody id="experience">
      {isInView && (
        <div className="flex flex-col items-center w-full xl:w-3/5">
          <SectionHeader title="Experience" />
          <Tab />
        </div>
      )}
      <div ref={myRef} className=""></div>
    </SectionBody>
  );
};

export default Experience;
