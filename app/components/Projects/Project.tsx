import Image from 'next/image';
import { TProjects } from './content';
import Link from 'next/link';

export const Project = ({ project }: { project: TProjects }) => {
  return (
    <article className="flex flex-col flex-shrink-0 gap-4 md:gap-6 min-h-full w-full p-4 max-w-[300px] md:max-w-[400px] bg-[#112240] rounded-[20px] hover:-translate-y-2  transition-all duration-300 group">
      <div className="relative  flex flex-1 flex-col gap-3 md:gap-4">
        {project.inProgress && (
          <div className="absolute flex items-center justify-center translate-x-2 -translate-y-6 md:translate-x-2 -md:translate-y-2 -right-6 rotate-12 w-36 h-8 border border-[#64ffda47] bg-[#112240]">
            <h5 className="text-[#64ffda47] group-hover:text-[#64FFDA] transition-colors duration-300">
              In Progress
            </h5>
          </div>
        )}
        <h3 className="text-[20px] md:text-[24px] text-[#64ffda47] group-hover:text-[#64FFDA] transition-colors duration-300">
          {project.name}
        </h3>
        <div className="h-[1px] w-full bg-[#64ffda47]" />
        <ul className="flex gap-4 flex-wrap w-full">
          {project.techstack.map((t) => (
            <li key={t.id} className="flex gap-1 items-center justify-center">
              <Image src={t.icon} width={18} height={18} alt={t.alt} />
              <h4 className="text-[10px] text-[#64ffda47] break-words ">
                {t.name}
              </h4>
            </li>
          ))}
        </ul>
        <p className="text-[16px] md:text-[18px] text-[#94A3B8] break-words group-hover:text-[#CCD6F6] transition-colors duration-300">
          {project.description}
        </p>
      </div>
      <div className="flex gap-8 h-fit">
        <Link
          className="border border-[var(--primary-bg-color)] px-4 py-2  hover:text-[var(--secondary-text-color)] hover:border-[var(--secondary-text-color)]  text-[14px] md:text-[16px]  text-[#64ffda47] group-hover:text-[#64FFDA] transition-all duration-300 hover:scale-95"
          target="_blank"
          href={`${project.reference.repo}`}
        >
          Repo
        </Link>
        <Link
          className="border border-[var(--primary-bg-color)] px-4 py-2  hover:text-[var(--secondary-text-color)] hover:border-[var(--secondary-text-color)]  text-[14px] md:text-[16px]  text-[#64ffda47] group-hover:text-[#64FFDA] transition-all duration-300 hover:scale-95"
          target="_blank"
          href={`${project.reference.live}`}
        >
          Live
        </Link>
      </div>
    </article>
  );
};
