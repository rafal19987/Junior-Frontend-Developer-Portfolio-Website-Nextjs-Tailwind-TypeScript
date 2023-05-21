'use client';

import { motion as m } from 'framer-motion';

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <m.div
      className="flex items-center justify-center w-full h-full border-[#64FFDA] border-b xl:w-full"
      initial={{ y: '30px', opacity: 0 }}
      animate={{ y: '0px', opacity: 1 }}
      transition={{ delay: 0.3, opacity: { duration: 0.5 } }}
    >
      <h2 className="p-4 text-2xl xl:text-3xl">{title.toUpperCase()}</h2>
    </m.div>
  );
};

export default SectionHeader;
