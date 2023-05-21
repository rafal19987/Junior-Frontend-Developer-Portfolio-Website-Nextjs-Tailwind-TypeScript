'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../shared/SectionHeader';
import SectionBody from '../shared/SectionBody';
import Article from './Article';

const Projects = () => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  return (
    <SectionBody id="projects">
      {isInView && (
        <>
          <SectionHeader title="projects" />
          <div className="flex flex-col items-center w-full p-6 xl:w-3/5">
            <Article />
          </div>
        </>
      )}
      <div ref={myRef} className=""></div>
    </SectionBody>
  );
};

export default Projects;
