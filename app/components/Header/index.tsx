import Image from 'next/image';
import { Navbar } from './Navbar';
import { Hamburger } from './Navbar/Hamburger';
import { MobileMenu } from './Navbar/MobileMenu';
import logo from 'assets/headerLogo.svg';

export const Header = () => {
  return (
    <header className='fixed top-0 flex items-center justify-center w-full h-20 bg-[var(--body-bg-color)]  z-10'>
      <div className='relative flex items-center justify-between w-full max-w-[1400px] px-6 h-full'>
        <Image src={logo} width={50} height={50} alt='logo' />
        <Navbar />
        <Hamburger />
        <MobileMenu />
      </div>
    </header>
  );
};
