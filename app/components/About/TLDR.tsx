import Image, { StaticImageData } from 'next/image';
import { type TSkills } from './Skills';

import pcIcon from '@/assets/skills/pc-icon.svg';
import bookIcon from '@/assets/skills/book-icon.svg';
import atomIcon from '@/assets/skills/atom-icon.svg';
import homeIcon from '@/assets/skills/home-icon.svg';
import studentIcon from '@/assets/skills/student-icon.svg';
import suitcaseIcon from '@/assets/skills/suitcase-icon.svg';

const tldrInfo: TSkills[] = [
  {
    id: 1,
    icon: pcIcon,
    title: 'Front-End',
  },
  {
    id: 2,
    icon: bookIcon,
    title: 'Self-taught +1 year',
  },
  {
    id: 3,
    icon: atomIcon,
    title: 'Main: React, Next, Typescript',
  },
  {
    id: 4,
    icon: homeIcon,
    title: 'Open for relocation',
  },
  {
    id: 5,
    icon: studentIcon,
    title: 'Internship expirenced',
  },
  {
    id: 6,
    icon: suitcaseIcon,
    title: '4 years as sales specialist',
  },
];

export const TLDR = () => {
  return (
    <div className='flex items-center justify-centerw-full'>
      <section className='flex flex-col gap-4 items-center justify-center p-4 mt-8 w-full max-w-[600px] bg-blue-light rounded-2xl'>
        <span className='text-primary font-langar'>TL;DR</span>
        <div className='grid grid-cols-3 items-start justify-center gap-8 w-full'>
          {tldrInfo.map((t) => (
            <TldrItem key={t.id} icon={t.icon} title={t.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

const TldrItem = ({ icon, title }: Omit<TSkills, 'id'>) => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      <Image src={icon} width={20} height={20} alt={`icon`} />
      <h6 className='text-xs text-center w-20 text-secondary'>{title}</h6>
    </div>
  );
};
