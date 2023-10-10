import { NavItem } from './NavItem';
import { sections } from './content';

export const Navbar = () => {
  return (
    <nav className='hidden md:flex items-center justify-end w-full h-full  lg:w-4/5'>
      <ul className='flex justify-between w-4/5 text-xl font-langar tracking-widest'>
        {sections.map((s) => (
          <NavItem key={s} section={s} />
        ))}
      </ul>
    </nav>
  );
};
