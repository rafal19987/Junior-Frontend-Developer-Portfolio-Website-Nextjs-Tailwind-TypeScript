'use client';

import Link from 'next/link';
import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="relative flex items-center justify-end w-full h-full md:hidden ">
      <button
        className="flex flex-col items-center justify-evenly w-12 h-9 mr-8 bg-[#D9D9D9]/20 rounded-lg"
        onClick={toggleMenu}
      >
        {!isOpen ? (
          <>
            <span className="w-7 h-1 bg-[#FFB800] rounded-lg transition-all duration-300"></span>
            <span className="w-7 h-1 bg-[#FFB800] rounded-lg transition-all duration-100"></span>
            <span className="w-7 h-1 bg-[#FFB800] rounded-lg transition-all duration-300"></span>
          </>
        ) : (
          <>
            <span className="w-7 h-1 bg-[#FFB800] rounded-lg translate-y-2.5 rotate-45 transition-all duration-300"></span>
            <span className="w-7 h-1 bg-[#FFB800] rounded-lg opacity-0 duration-100"></span>
            <span className="w-7 h-1 bg-[#FFB800] rounded-lg -translate-y-2.5 -rotate-45 transition-all duration-300"></span>
          </>
        )}
      </button>
      {!isOpen ? (
        <nav className="absolute top-14 w-screen h-[calc(100vh-3.5rem)] bg-[var(--body-bg-color)] translate-x-full z-10 transition-all duration-300">
          <ul className="flex flex-col items-center justify-evenly h-full ">
            <li className="w-fit hover:underline">
              <Link href="#" className="text-xl">
                Home
              </Link>
            </li>
            <li className=" w-fit hover:underline">
              <Link href="#" className="text-xl">
                About
              </Link>
            </li>
            <li className=" w-fit hover:underline">
              <Link href="#" className="text-xl">
                Projects
              </Link>
            </li>
            <li className=" w-fit hover:underline">
              <Link href="#" className="text-xl">
                Experience
              </Link>
            </li>
            <li className=" w-fit hover:underline">
              <Link href="#" className="text-xl">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="absolute top-14 w-screen h-[calc(100vh-3.5rem)] bg-[var(--body-bg-color)] z-10 transition-all duration-300">
          <ul className="flex flex-col items-center justify-evenly h-full">
            <li className=" w-fit hover:underline">
              <Link href="#" className="text-xl">
                Home
              </Link>
            </li>
            <li className=" w-fit hover:underline">
              <Link href="#" className="text-xl">
                About
              </Link>
            </li>
            <li className=" w-fit hover:underline">
              <Link href="#" className="text-xl">
                Projects
              </Link>
            </li>
            <li className=" w-fit hover:underline">
              <Link href="#" className="text-xl">
                Experience
              </Link>
            </li>
            <li className=" w-fit hover:underline">
              <Link href="#" className="text-xl">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
