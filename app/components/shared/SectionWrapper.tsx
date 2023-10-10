'use client';

import { useEffect, useRef } from 'react';
import { useAppContext } from '@/context/AppContext';
import { cn } from '@/helpers/utils';

export const SectionWrapper = ({
  id,
  title,
  className,
  children,
}: {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const { selectedSection, handleSelect } = useAppContext();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          handleSelect(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`
      flex flex-col items-center min-h-[calc(100vh-5rem)] px-6 scroll-mt-20
      ${id === 'home' && 'max-h-[calc(100vh-20rem)]'} `}
    >
      {title && (
        <div className='flex gap-8 items-center justify-center w-full h-full p-4'>
          <div
            className={`${
              id === selectedSection
                ? 'bg-green-light w-1/12'
                : 'bg-primary w-0'
            } h-1 transition-all duration-500`}
          />
          <h2
            className={`${
              id === selectedSection && 'text-green-light'
            } text-2xl xl:text-3xl font-langar transition duration-500`}
          >
            {title?.toUpperCase()}
          </h2>
          <div
            className={`${
              id === selectedSection
                ? 'bg-green-light w-1/12'
                : 'bg-primary w-0'
            } h-1 transition-all duration-500`}
          />
        </div>
      )}

      <div
        className={cn(
          'flex flex-col items-center justify-center w-full h-full mt-8 pb-20 ',
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
};
