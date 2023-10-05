import SectionBody from '../shared/SectionBody';
import SectionHeader from '../shared/SectionHeader';
import { Project } from './Project';

import { projects } from './content';

export const Projects = () => {
  return (
    <SectionBody id="projects">
      <div className="flex flex-col items-center w-full xl:w-3/5">
        <SectionHeader title="projects" />
        <div className="h-full w-screen mt-12 px-6 xl:w-full">
          <div className="flex grow overflow-x-auto py-6 md:py-8 space-x-4 md:space-x-8 h-full w-full styledScroll">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </SectionBody>
  );
};
