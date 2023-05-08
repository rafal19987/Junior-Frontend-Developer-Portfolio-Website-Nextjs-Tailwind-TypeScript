import Navbar from './Navbar/Navbar';
import HamburgerMenu from './Navbar/HamburgerMenu.tsx/HamburgerMenu';

const Header = () => {
  return (
    <header className="fixed flex items-center w-full h-14  backdrop-blur-sm  border-b border-[#D9D9D926] z-10">
      <Navbar />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
