'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Social } from './Social';
import { socials } from './content';

import avatar from '@/assets/avatar-lg.png';
import scrollDownIcon from 'assets/scrollDown.svg';

export const Home = () => {
  return (
    <SectionWrapper id='home'>
      <div className='flex flex-col items-center justify-center gap-8 w-full lg:flex-row lg:mt-14'>
        <div className='flex flex-col gap-8 items-center justify-center w-full max-w-[500px] '>
          <div className='relative flex items-center justify-center lg:self-start w-[clamp(100px,50vw,255px)] h-[clamp(100px,50vw,255px)] lg:w-80 lg:h-80 p-2 rounded-full bg-gradient-to-b from-teal-500/50 to-cyan-600/0'>
            <Image
              className='object-cover w-full'
              src={avatar}
              alt='developer image'
            />
          </div>
          <div className='w-full self-start'>
            <span className='text-green-light font-langar text-[clamp(16px,3vw,28px)]'>
              Hi, my name is
            </span>
            <h1 className='text-4xl text-[clamp(32px,5vw,48px)]'>
              Rafał Izdebski
            </h1>
            <span className='text-[clamp(16px,3vw,28px)]'>
              I love Front-End Development
            </span>
          </div>
        </div>
        <div>
          <span className='hidden lg:inline-block text-[28px] text-primary font-langar py-4'>
            My Socials and CV
          </span>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-8 lg:gap-16 w-fit md:max-w-[800px] lg:max-w-full '>
            {socials.map((s) => (
              <Social key={s.id} link={s.link} svgIcon={s.svgIcon} />
            ))}
          </div>
        </div>
      </div>
      <ScrollDown />
    </SectionWrapper>
  );
};

const ScrollDown = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex items-center justify-center w-[75px] h-[75px]  mt-12 rounded-full border-2 border-[#64FFDA]'>
      <Link
        className='flex items-center justify-center w-full h-full rounded-full'
        href='#about'
        onClick={handleScroll}
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
