'use client';

import Image from 'next/image';
import Link from 'next/link';
import { scrollToSectionHandle } from '@/helpers/functions/scrollToSectionHandle';
import scrollDownIcon from 'assets/scrollDown.svg';

export const ScrollDown = () => {
  return (
    <div className='flex items-center justify-center w-[75px] h-[75px]  mt-12 rounded-full border-2 border-[#64FFDA]'>
      <Link
        className='flex items-center justify-center w-full h-full rounded-full'
        href='#about'
        onClick={(e) => scrollToSectionHandle(e)}
      >
        <Image
          className='animate-bounce'
          src={scrollDownIcon}
          alt='scroll down icon'
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
};
