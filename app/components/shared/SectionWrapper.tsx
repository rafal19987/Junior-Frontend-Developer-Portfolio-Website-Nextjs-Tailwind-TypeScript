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
  return (
    <section
      id={id}
      className={`${
        id === 'home' && 'max-h-[calc(100vh-5rem)]'
      } flex flex-col items-center min-h-[calc(100vh-5rem)] px-6 scroll-mt-20`}
    >
      {title && (
        <div className='flex gap-8 items-center justify-center w-full h-full p-4'>
          <div className='w-1/12 h-1 bg-[#64FFDA]' />
          <h2 className='text-2xl xl:text-3xl'>{title?.toUpperCase()}</h2>
          <div className='w-1/12 h-1 bg-[#64FFDA]' />
        </div>
      )}

      <div
        className={cn(
          'flex flex-col items-center justify-center w-full h-full mt-8 ',
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
};
