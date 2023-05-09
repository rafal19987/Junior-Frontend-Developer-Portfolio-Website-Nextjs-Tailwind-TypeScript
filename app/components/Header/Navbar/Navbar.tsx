import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center justify-end w-full h-full lg:w-4/5">
      <ul className="flex justify-around w-4/5">
        <li className=" w-fit hover:underline">
          <Link href="#home">Home</Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#about">About</Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#experience">Experience</Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#projects">Projects</Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
