'use client';

import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { scrollToSectionHandle } from '@/helpers/functions/scrollToSectionHandle';
import { type TSelectedSection } from '@/context/AppContext';

export const NavItem = ({ section }: { section: TSelectedSection }) => {
  const { selectedSection, handleSelect } = useAppContext();

  return (
    <li
      className={`relative w-fit hover:text-green-light transition-colors ${
        selectedSection === section &&
        'text-green-light after:absolute after:-bottom-2 after:left-0 after:content-[""] after:w-full after:h-1 after:bg-green-light'
      }`}
      onClick={() => handleSelect(section)}
    >
      <Link href={`#${section}`} onClick={(e) => scrollToSectionHandle(e)}>
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </Link>
    </li>
  );
};
