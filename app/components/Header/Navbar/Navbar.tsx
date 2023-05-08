import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center justify-end w-full h-full lg:w-4/5">
      <ul className="flex justify-around w-4/5">
        <li className=" w-fit hover:underline">
          <Link href="#">Home</Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#">About</Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#">Projects</Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#">Experience</Link>
        </li>
        <li className=" w-fit hover:underline">
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
