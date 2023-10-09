import Image from 'next/image';
import Link from 'next/link';

import ghIcon from '@/assets/skills/github-icon.svg';

export const Footer = () => {
  return (
    <footer className='absolute bottom-0 flex items-center justify-center gap-8  w-full h-fit'>
      <div className='w-full h-1 bg-[#64FFDA] opacity-20' />
      <Image src={ghIcon} width={50} height={40} alt='github icon' />
      <div className='w-full h-1 bg-[#64FFDA] opacity-20' />
    </footer>
  );
};
