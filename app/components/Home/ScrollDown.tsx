'use client';

import Image from 'next/image';
import Link from 'next/link';
import { scrollToSectionHandle } from '@/helpers/functions/scrollToSectionHandle';
import scrollDownIcon from 'assets/scrollDown.svg';

export const ScrollDown = () => {
  return (
    <div className='absolute bottom-8 flex items-center justify-center w-[60px] sm:w-[75px] sm:h-[75px] h-[60px] rounded-full border sm:border-2 border-[#64FFDA]'>
      <Link
        className='flex items-center justify-center w-full h-full rounded-full'
        href='#about'
        onClick={(e) => scrollToSectionHandle(e)}
      >
        <Image
          className='animate-bounce'
          src={scrollDownIcon}
          alt='scroll down icon'
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
};
