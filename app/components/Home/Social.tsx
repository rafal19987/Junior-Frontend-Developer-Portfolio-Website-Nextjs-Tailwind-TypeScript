import Link from 'next/link';
import { type TSocials } from './content';

export const Social = ({ link, svgIcon }: Omit<TSocials, 'id'>) => {
  return (
    <div className='flex items-center justify-center w-fit lg:w-52 h-fit lg:h-52 p-4 bg-blue-light border border-blue-light rounded-lg md:rounded-2xl hover:border-green-light transition-colors duration-200 group'>
      <Link
        href={link}
        target='_blank'
        className='flex items-center justify-center w-full h-full'
      >
        <svg
          className='w-[calc(12vw)] h-[calc(12vw)] md:w-[80px] md:h-[80px] max-w-[116px] max-h-[116px]  fill-green-dark group-hover:fill-green-light transition-colors duration-200'
          viewBox='0 0 47 47'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d={svgIcon} />
        </svg>
      </Link>
    </div>
  );
};
