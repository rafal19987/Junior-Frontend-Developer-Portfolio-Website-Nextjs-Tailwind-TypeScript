'use client';

import Link from 'next/link';
import { useMobileMenu } from '@/store/useMobileMenu';
import { scrollToSectionHandle } from '@/helpers/functions/scrollToSectionHandle';
import { sections } from './content';
import { TSelectedSection } from '@/context/AppContext';
import { useAppContext } from '@/context/AppContext';

export const MobileMenu = () => {
  const { isMobileMenuOpen } = useMobileMenu();

  return (
    <div
      className={`${
        isMobileMenuOpen ? '' : 'translate-x-full'
      } absolute left-0 top-20 w-screen h-[calc(100vh-3.5rem)] bg-[var(--body-bg-color)]  md:hidden z-20 transition-all duration-300`}
    >
      <ul className='flex flex-col items-center justify-evenly h-full'>
        {sections.map((s) => (
          <MobileMenuItem key={s} section={s} />
        ))}
      </ul>
    </div>
  );
};

const MobileMenuItem = ({ section }: { section: TSelectedSection }) => {
  const { toggleMobileMenu } = useMobileMenu();
  const { selectedSection, handleSelect } = useAppContext();

  return (
    <li
      className={`${
        selectedSection === section && 'text-green-light'
      } group flex flex-col items-center w-fit font-langar text-3xl `}
    >
      <Link
        href={`#${section}`}
        className='group-hover:text-white'
        onClick={(e) => {
          scrollToSectionHandle(e);
          toggleMobileMenu();
          handleSelect(section);
        }}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </Link>
    </li>
  );
};
