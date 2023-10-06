'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import SocialList from './SocialList';
import avatarLarge from 'assets/avatar-lg.png';
import avatarMedium from 'assets/avatar-md.png';
import avatarSmall from 'assets/avatarSmall.png';

import { Permanent_Marker } from 'next/font/google';
import scrollDownIcon from 'assets/scrollDown.svg';

const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

const Home = () => {
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
    <SectionWrapper id="home">
      <div className="md:hidden">
        <Image
          src={avatarSmall}
          width={130}
          height={130}
          alt="avatar small"
          priority={true}
        />
      </div>

      <div className="">
        <span className="text-sm text-[var(--secondary-text-color)] md:text-xl">
          Hi, my name is
        </span>
        <h1
          className={`${permamentMarker.className} text-4xl text-[#CCD6F6] md:mt-6 md:text-5xl lg:mt-8`}
        >
          Rafal Izdebski
        </h1>
        <h2 className="mt-5 text-sm md:w-[400px] md:mt-4 md:text-xl ">
          I have several years of experience in sales, and I am currently
          seeking remote or hybrid work opportunities related to IT, such as
          frontend development, IT support, or project management.
        </h2>
      </div>
      <SocialList />

      <div className="absolute bottom-8 flex items-center justify-center w-full h-20 mt-28 z-0 xl:flex xl:w-3/5 xl:bottom-24 ">
        <button className="flex items-center justify-center w-[75px] h-[75px] rounded-full border-2 border-[#64FFDA]">
          <Link href="#about" onClick={handleScroll}>
            <Image
              className="mt-2 animate-bounce"
              src={scrollDownIcon}
              alt="scroll down icon"
            />
          </Link>
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Home;
