import Image from 'next/image';
import Navbar from './Navbar/Navbar';
import HamburgerMenu from './Navbar/HamburgerMenu.tsx/HamburgerMenu';
import logo from 'assets/headerLogo.svg';

const Header = () => {
  return (
    <header className="fixed flex items-center w-full h-14   border-b border-[#D9D9D926] z-10">
      <Image className="ml-8" src={logo} width={30} height={30} alt="logo" />
      <Navbar />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
