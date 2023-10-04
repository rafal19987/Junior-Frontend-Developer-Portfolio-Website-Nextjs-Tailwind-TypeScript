import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import SectionBody from '../shared/SectionBody';
import SectionHeader from '../shared/SectionHeader';
import reactIcon from '@/assets/react-icon.svg';
import nextIcon from '@/assets/next-icon.svg';
import typescriptIcon from '@/assets/typescript-icon.svg';
import tailwindIcon from '@/assets/tailwind-icon.svg';
import htmlIcon from '@/assets/html-icon.svg';
import javascriptIcon from '@/assets/javascript-icon.svg';
import sassIcon from '@/assets/sass-icon.svg';
import chakraIcon from '@/assets/chakra-icon.svg';
import reduxIcon from '@/assets/redux-icon.svg';
import appScreenshoot from '@/assets/books-app-2.png';
import zoniferoScreenshot from '@/assets/zonifero-app.png';
import orderlyScreenshot from '@/assets/orderly-app.png';

type TTechStack = {
  id: number;
  icon: StaticImageData;
  name: string;
  alt: string;
};

const techStack: TTechStack[] = [
  {
    id: 1,
    icon: reactIcon,
    name: 'React.js',
    alt: 'React.js icon',
  },
  {
    id: 2,
    icon: nextIcon,
    name: 'Next.js',
    alt: 'Next.js icon',
  },
  {
    id: 3,
    icon: typescriptIcon,
    name: 'TypeScript',
    alt: 'Typescript icon',
  },
  {
    id: 4,
    icon: tailwindIcon,
    name: 'Tailwind',
    alt: 'Tailwind icon',
  },
];

const zoniferoTechStack: TTechStack[] = [
  {
    id: 1,
    icon: htmlIcon,
    name: 'HTML',
    alt: 'Html icon',
  },
  {
    id: 2,
    icon: sassIcon,
    name: 'SASS',
    alt: 'Sass icon',
  },
  {
    id: 3,
    icon: javascriptIcon,
    name: 'JavaScript',
    alt: 'Jypescript icon',
  },
];

const orderlyTechStack: TTechStack[] = [
  {
    id: 1,
    icon: reactIcon,
    name: 'React.js',
    alt: 'React.js icon',
  },
  {
    id: 2,
    icon: typescriptIcon,
    name: 'TypeScript',
    alt: 'Typescript icon',
  },
  {
    id: 3,
    icon: reduxIcon,
    name: 'Redux TK',
    alt: 'Redux toolkit icon',
  },
  {
    id: 4,
    icon: chakraIcon,
    name: 'Chakra UI',
    alt: 'Chakra UI icon',
  },
];

type TProjects = {
  id: number;
  name: string;
  techstack: TTechStack[];
  description: string;
  reference: TReference;
  inProgress?: boolean;
};

type TReference = {
  repo: string;
  live: string;
  screenshot: StaticImageData;
};

const projects: TProjects[] = [
  {
    id: 1,
    name: 'OrderlyAI Web App',
    techstack: orderlyTechStack,
    description:
      'The main assumption of the OrderlyAI web application is to follow trends in the developing AI sector. The number of products based on artificial intelligence is growing day by day, and tracking changing trends is very persistent and time-consuming. The tools in question can be divided into categories in which they offer services.',
    reference: {
      repo: 'https://github.com/rafal19987/orderly-ai-1',
      live: 'https://unrivaled-cupcake-48582c.netlify.app/',
      screenshot: orderlyScreenshot,
    },
  },
  {
    id: 2,
    name: 'Hairdresser Web App',
    techstack: techStack,
    description:
      'This project is a single landing page created using pure JavaScript, HTML, and SASS (SCSS).',
    reference: {
      repo: 'https://github.com/rafal19987/hairderesser-page',
      live: 'https://hairderesser-page.vercel.app/',
      screenshot: zoniferoScreenshot,
    },
    inProgress: true,
  },
  {
    id: 3,
    name: 'Zonifero Landing Page',
    techstack: zoniferoTechStack,
    description:
      'This project is a single landing page created using pure JavaScript, HTML, and SASS (SCSS).',
    reference: {
      repo: 'https://github.com/rafal19987/_Johny',
      live: 'https://rafal19987.github.io/_Johny/',
      screenshot: zoniferoScreenshot,
    },
  },
  {
    id: 4,
    name: 'Dynamic Table',
    techstack: techStack,
    description:
      'An application created using the latest frontend technologies, including React 18, Next.js 13, Tailwind, and Typescript. The application utilizes an open-source API called Google Books API to gather. ',
    reference: {
      repo: 'https://github.com/rafal19987/dynamic-table-project',
      live: 'https://dynamic-table-project.vercel.app/',
      screenshot: appScreenshoot,
    },
  },
];

export const Projects = () => {
  return (
    <SectionBody id="projects">
      <div className="flex flex-col items-center w-full xl:w-3/5">
        <SectionHeader title="projects" />
        <div className="h-full w-screen mt-12 px-6">
          <div className="flex grow overflow-x-auto py-8 space-x-8 h-full w-full styledScroll">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col flex-shrink-0 gap-6 min-h-full w-full p-4 max-w-[400px] bg-[#112240] rounded-[20px]"
              >
                <div className="relative  flex flex-1 flex-col gap-4">
                  {project.inProgress && (
                    <div className="absolute flex items-center justify-center translate-x-2 -translate-y-2 -right-6 rotate-12 w-36 h-8 border border-[#64ffda47] bg-[#112240]">
                      <h5 className="text-[#64ffda47]">In Progress</h5>
                    </div>
                  )}
                  <h3 className="text-[24px] text-[#64FFDA]">{project.name}</h3>
                  <div className="h-[1px] w-full bg-[#64ffda47]" />
                  <ul className="flex gap-4 flex-wrap w-full">
                    {project.techstack.map((t) => (
                      <li
                        key={t.id}
                        className="flex gap-1 items-center justify-center"
                      >
                        <Image
                          src={t.icon}
                          width={18}
                          height={18}
                          alt={t.alt}
                        />
                        <h4 className="text-[10px] text-[#64ffda47] break-words">
                          {t.name}
                        </h4>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[18px] text-[#CCD6F6] break-words">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-8 h-fit">
                  <Link
                    className="border border-[var(--secondary-text-color)] px-4 py-2 text-[var(--secondary-text-color)]"
                    target="_blank"
                    href={`${project.reference.repo}`}
                  >
                    Repo
                  </Link>
                  <Link
                    className="border border-[var(--secondary-text-color)] px-4 py-2 text-[var(--secondary-text-color)]"
                    target="_blank"
                    href={`${project.reference.live}`}
                  >
                    Live
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* <div className="px-8 h-full w-screen">
          <ul className="flex items-center gap-8 h-full py-8 w-full mt-12 overflow-x-auto styledScroll ">
            {projects.map((project) => (
              <li
                key={project.id}
                className="inline-block flex-shrink-0 w-full min-h-[609px] max-w-[400px] px-4 py-4 bg-[#112240] rounded-[20px] justify-between border border-green-200 md:max-w-full"
              >
                <article className="flex flex-col gap-8 w-full min-h-full border md:flex-row">
                  <div className="flex flex-1 flex-col gap-4 md:max-w-[400px]">
                    <h3 className="text-[24px] text-[#64FFDA]">
                      {project.name}
                    </h3>
                    <div className="h-[1px] w-full bg-[#64ffda47]" />
                    <ul className="flex gap-6 flex-wrap w-full">
                      {project.techstack.map((t) => (
                        <li
                          key={t.id}
                          className="flex gap-1 items-center justify-center"
                        >
                          <Image
                            src={t.icon}
                            width={18}
                            height={18}
                            alt={t.alt}
                          />
                          <h4 className="text-[10px] text-[#64ffda47] break-words">
                            {t.name}
                          </h4>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[18px] text-[#CCD6F6] break-words">
                      {project.description}
                    </p>
                  </div>
                  <Link href={project.reference.link} target="_blank">
                    <div className="relative h-56 rounded-b-[20px] ">
                      <Image
                        src={project.reference.screenshot}
                        className="rounded-b-[20px] "
                        fill
                        alt={`${project.name} app screenshot"`}
                      />
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </SectionBody>
  );
};
