'use client';

import Link from 'next/link';

const Navbar = () => {
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
    <nav className="hidden md:flex items-center justify-end w-full h-full lg:w-4/5">
      <ul className="flex justify-around w-4/5">
        <li className="w-fit hover:underline">
          <Link href="#home" onClick={handleScroll}>
            Home
          </Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#about" onClick={handleScroll}>
            About
          </Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#experience" onClick={handleScroll}>
            Experience
          </Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#projects" onClick={handleScroll}>
            Projects
          </Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#contact" onClick={handleScroll}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
