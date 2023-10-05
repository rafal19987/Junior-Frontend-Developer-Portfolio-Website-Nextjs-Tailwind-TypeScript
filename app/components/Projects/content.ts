import { StaticImageData } from 'next/image';

import reactIcon from '@/assets/react-icon.svg';
import nextIcon from '@/assets/next-icon.svg';
import typescriptIcon from '@/assets/typescript-icon.svg';
import tailwindIcon from '@/assets/tailwind-icon.svg';
import htmlIcon from '@/assets/html-icon.svg';
import javascriptIcon from '@/assets/javascript-icon.svg';
import sassIcon from '@/assets/sass-icon.svg';
import chakraIcon from '@/assets/chakra-icon.svg';
import reduxIcon from '@/assets/redux-icon.svg';
import supabaseIcon from '@/assets/supabase-icon.svg';
import appScreenshoot from '@/assets/books-app-2.png';
import zoniferoScreenshot from '@/assets/zonifero-app.png';
import orderlyScreenshot from '@/assets/orderly-app.png';

export type TProjects = {
  id: number;
  name: string;
  techstack: TTechStack[];
  description: string;
  reference: TReference;
  inProgress?: boolean;
};

type TTechStack = {
  id: number;
  icon: StaticImageData;
  name: string;
  alt: string;
};

type TReference = {
  repo: string;
  live: string;
  screenshot: StaticImageData;
};

const dynamicTableTechStack: TTechStack[] = [
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

const hairdresserTechStak: TTechStack[] = [
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

const questionsTechStack: TTechStack[] = [
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
  {
    id: 4,
    icon: supabaseIcon,
    name: 'Supabase',
    alt: 'Supabase icon',
  },
];

export const projects: TProjects[] = [
  {
    id: 1,
    name: 'OrderlyAI Web App',
    techstack: orderlyTechStack,
    description:
      'A web application was created during my internship at a software house. In a team of four members, we developed an application that aggregates AI solutions and categorizes them. The application is divided into different views based on the users role (guest, regular user, admin). It also utilizes communication with the OpenAI API to generate categories and products based on specific prompts. All the functionalities are described in the ReadMe.',
    reference: {
      repo: 'https://github.com/rafal19987/orderly-ai-1',
      live: 'https://unrivaled-cupcake-48582c.netlify.app/',
      screenshot: orderlyScreenshot,
    },
  },
  {
    id: 2,
    name: 'Zonifero Landing Page',
    techstack: zoniferoTechStack,
    description:
      'I created a website as part of the first phase of my internship at a software house. The main focus of this task was to replicate the website`s design using HTML and SASS. Although JavaScript was also used, it was considered an additional component. To ensure a clear and organized coding style, I implemented the BEM methodology.',
    reference: {
      repo: 'https://github.com/rafal19987/_Johny',
      live: 'https://rafal19987.github.io/_Johny/',
      screenshot: zoniferoScreenshot,
    },
  },
  {
    id: 3,
    name: 'Hairdresser Web App',
    techstack: hairdresserTechStak,
    description:
      'The website is for a hair salon and provides features such as contacting the salon through a form, displaying salon reviews using the Google Places API, and allowing users to make appointments with specific hairstylists. The project is in the development phase and will be expanded in the future, including the addition of an admin dashboard panel.',
    reference: {
      repo: 'https://github.com/rafal19987/hairderesser-page',
      live: 'https://hairderesser-page.vercel.app/',
      screenshot: zoniferoScreenshot,
    },
    inProgress: true,
  },
  {
    id: 4,
    name: 'Dynamic Table',
    techstack: dynamicTableTechStack,
    description:
      'The project is an application designed for visualizing data from an external API (Google Books API) in the form of a table. By default, the table displays information about books, including ID, title, and author. Users can navigate to the details of a specific book or a list of books by the same author, with the current location indicated using breadcrumbs.',
    reference: {
      repo: 'https://github.com/rafal19987/dynamic-table-project',
      live: 'https://dynamic-table-project.vercel.app/',
      screenshot: appScreenshoot,
    },
  },
  {
    id: 5,
    name: 'Interview Questions App',
    techstack: questionsTechStack,
    description:
      'My first web application is designed to serve as a tool for preparing for job interviews focused on JavaScript. Users can fetch questions from a pool of interview questions, and after a few seconds, the application displays the answers. Learning sessions are saved in the browser, allowing users to resume their learning from where they left off.',
    reference: {
      repo: 'https://github.com/rafal19987/Interview-Questions-App',
      live: 'https://interview-questions-app.vercel.app/',
      screenshot: appScreenshoot,
    },
  },
];
