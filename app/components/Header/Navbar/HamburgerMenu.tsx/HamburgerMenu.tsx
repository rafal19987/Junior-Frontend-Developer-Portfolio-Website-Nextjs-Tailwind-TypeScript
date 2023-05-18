'use client';

import Link from 'next/link';
import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

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
    <div className="relative flex items-center justify-end w-full h-full md:hidden ">
      <button
        className="flex flex-col items-center justify-evenly w-12 h-9 mr-8 bg-[#D9D9D9]/20 rounded-lg"
        onClick={toggleMenu}
      >
        {!isOpen ? (
          <>
            <span className="w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg transition-all duration-300"></span>
            <span className="w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg transition-all duration-100"></span>
            <span className="w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg transition-all duration-300"></span>
          </>
        ) : (
          <>
            <span className="w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg translate-y-2.5 rotate-45 transition-all duration-300"></span>
            <span className="w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg opacity-0 duration-100"></span>
            <span className="w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg -translate-y-2.5 -rotate-45 transition-all duration-300"></span>
          </>
        )}
      </button>
      {!isOpen ? (
        <div className="absolute top-14 w-screen h-[calc(100vh-3.5rem)] bg-[var(--body-bg-color)] translate-x-full z-10 transition-all duration-300">
          <ul className="flex flex-col items-center h-full mt-14 ">
            <li className="group flex flex-col items-center w-fit">
              <Link
                href="#home"
                className="group-hover:text-white text-2xl"
                onClick={(e) => {
                  handleScroll(e);
                  toggleMenu();
                }}
              >
                Home
              </Link>
            </li>
            <li className="flex flex-col items-center w-fit mt-20">
              <Link
                href="#about"
                className="group-hover:text-white text-2xl"
                onClick={(e) => {
                  handleScroll(e);
                  toggleMenu();
                }}
              >
                About
              </Link>
            </li>
            <li className="flex flex-col items-center w-fit mt-20">
              <Link
                href="#experience"
                className="group-hover:text-white text-2xl"
                onClick={(e) => {
                  handleScroll(e);
                  toggleMenu();
                }}
              >
                Experience
              </Link>
            </li>
            <li className="flex flex-col items-center w-fit mt-20">
              <Link
                href="#projects"
                className="group-hover:text-white text-2xl"
                onClick={(e) => {
                  handleScroll(e);
                  toggleMenu();
                }}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="absolute top-14 w-screen h-[calc(100vh-3.5rem)] bg-[var(--body-bg-color)] z-10 transition-all duration-300">
          <ul className="flex flex-col items-center h-full mt-14">
            <li className="group flex flex-col items-center w-fit">
              <Link
                href="#home"
                className="group-hover:text-white text-2xl"
                onClick={(e) => {
                  handleScroll(e);
                  toggleMenu();
                }}
              >
                Home
              </Link>
            </li>
            <li className="flex flex-col items-center w-fit mt-20">
              <Link
                href="#about"
                className="text-2xl"
                onClick={(e) => {
                  handleScroll(e);
                  toggleMenu();
                }}
              >
                About
              </Link>
            </li>
            <li className="flex flex-col items-center w-fit mt-20">
              <Link
                href="#experience"
                className="text-2xl"
                onClick={(e) => {
                  handleScroll(e);
                  toggleMenu();
                }}
              >
                Experience
              </Link>
            </li>
            <li className="flex flex-col items-center w-fit mt-20">
              <Link
                href="#projects"
                className="text-2xl"
                onClick={(e) => {
                  handleScroll(e);
                  toggleMenu();
                }}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
