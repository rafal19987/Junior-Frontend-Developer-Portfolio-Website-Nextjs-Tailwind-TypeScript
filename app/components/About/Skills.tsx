import Image, { StaticImageData } from 'next/image';

import htmlIcon from '@/assets/skills/html-icon.svg';
import cssIcon from '@/assets/skills/css-icon.svg';
import sassIcon from '@/assets/skills/sass-icon.svg';
import tailwindIcon from '@/assets/skills/tailwind-icon.svg';
import chakraIcon from '@/assets/skills/chakraui-icon.svg';
import jsIcon from '@/assets/skills/javascript-icon.svg';
import tsIcon from '@/assets/skills/typescript-icon.svg';
import reactIcon from '@/assets/skills/react-icon.svg';
import reduxIcon from '@/assets/skills/redux-icon.svg';
import nextIcon from '@/assets/skills/nextjs-icon.svg';
import gitIcon from '@/assets/skills/git-icon.svg';
import ghIcon from '@/assets/skills/github-icon.svg';
import vscIcon from '@/assets/skills/vsc-icon.svg';
import figmaIcon from '@/assets/skills/figma-icon.svg';
import windowsIcon from '@/assets/skills/windows-icon.svg';

export type TSkills = {
  id: number;
  icon: StaticImageData;
  title: string;
};

const skills: TSkills[] = [
  {
    id: 1,
    icon: htmlIcon,
    title: 'HTML5',
  },
  {
    id: 2,
    icon: cssIcon,
    title: 'CSS3',
  },
  {
    id: 3,
    icon: sassIcon,
    title: 'SASS',
  },
  {
    id: 4,
    icon: tailwindIcon,
    title: 'Tailwind',
  },
  {
    id: 5,
    icon: chakraIcon,
    title: 'Chakra UI',
  },
  {
    id: 6,
    icon: jsIcon,
    title: 'JavaScript',
  },
  {
    id: 7,
    icon: tsIcon,
    title: 'TypeScript',
  },
  {
    id: 8,
    icon: reactIcon,
    title: 'React.js',
  },
  {
    id: 9,
    icon: reduxIcon,
    title: 'Redux',
  },
  {
    id: 10,
    icon: nextIcon,
    title: 'Next.js',
  },
  {
    id: 11,
    icon: gitIcon,
    title: 'GIT',
  },
  {
    id: 12,
    icon: ghIcon,
    title: 'GitHub',
  },
  {
    id: 13,
    icon: vscIcon,
    title: 'VSC',
  },
  {
    id: 14,
    icon: figmaIcon,
    title: 'Figma',
  },
  {
    id: 15,
    icon: windowsIcon,
    title: 'Windows',
  },
];

export const Skills = () => {
  return (
    <div className='flex flex-col items-center gap-4 mt-6 xl:mt-0  w-full sm:w-fit xl:self-start'>
      <h4 className='p-2 xl:p-0 self-center sm:self-start text-xl font-langar text-primary'>
        I am familiar with:
      </h4>
      <ul className='grid grid-cols-3 sm:grid-cols-5 place-items-center justify-center w-full sm:w-fit gap-4 sm:gap-6 p-2'>
        {skills.map((s) => (
          <Skill key={s.id} icon={s.icon} title={s.title} />
        ))}
      </ul>
    </div>
  );
};

const Skill = ({ icon, title }: Omit<TSkills, 'id'>) => {
  return (
    <li className='flex flex-col items-center justify-center gap-2 w-20 sm:w-24 h-20 sm:h-24 p-2 bg-blue-light rounded-lg text-secondary transition hover:-translate-y-1 hover:cursor-pointer'>
      <Image src={icon} width={40} height={40} alt={`${title} icon`} />
      <h5 className='text-xs sm:text-base'>{title}</h5>
    </li>
  );
};
