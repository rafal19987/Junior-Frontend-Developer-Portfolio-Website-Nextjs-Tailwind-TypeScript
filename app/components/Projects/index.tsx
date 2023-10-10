import { SectionWrapper } from '../shared/SectionWrapper';
import { Project } from './Project';

import { projects } from './content';

export const Projects = () => {
  return (
    <SectionWrapper id='projects' title='projects'>
      <div className='flex grow overflow-x-auto py-6 md:py-8 space-x-4 md:space-x-8 h-full w-full styledScroll'>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
