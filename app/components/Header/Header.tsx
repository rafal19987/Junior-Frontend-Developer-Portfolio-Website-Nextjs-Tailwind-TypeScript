import Image from 'next/image';
import Navbar from './Navbar/Navbar';
import HamburgerMenu from './Navbar/HamburgerMenu.tsx/HamburgerMenu';
import logo from 'assets/headerLogo.svg';

const Header = () => {
  return (
    <header className="fixed flex items-center w-full h-14  border-b border-[var(--secondary-text-color)] z-10 xl:justify-center ">
      <div className="flex items-center justify-center w-full h-full xl:w-3/5 xl:justify-between ">
        <Image className="ml-8" src={logo} width={30} height={30} alt="logo" />
        <Navbar />
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
