'use client';

import { useMobileMenu } from '@/store/useMobileMenu';

export const Hamburger = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <button
      className='flex flex-col items-center justify-evenly w-12 h-9 bg-[var(--secondary-bg-color)] rounded-lg  md:hidden'
      onClick={toggleMobileMenu}
    >
      {!isMobileMenuOpen ? (
        <>
          <span className='w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg transition-all duration-300'></span>
          <span className='w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg transition-all duration-100'></span>
          <span className='w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg transition-all duration-300'></span>
        </>
      ) : (
        <>
          <span className='w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg translate-y-2.5 rotate-45 transition-all duration-300'></span>
          <span className='w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg opacity-0 duration-100'></span>
          <span className='w-7 h-1 bg-[var(--secondary-text-color)] rounded-lg -translate-y-2.5 -rotate-45 transition-all duration-300'></span>
        </>
      )}
    </button>
  );
};
