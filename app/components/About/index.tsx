import { SectionWrapper } from '../shared/SectionWrapper';
import { TLDR } from './TLDR';
import { Skills } from './Skills';

export const About = () => {
  return (
    <SectionWrapper id='about' title='about'>
      <div className='flex flex-col xl:flex-row items-center xl:justify-between'>
        <div className='flex flex-col gap-2 items-start xl:w-2/4 md:text-md'>
          <p className='text-2xl font-lato'>Hello! I'm Rafał,</p>
          <p className='w-full'>
            a self-taught developer passionate about crafting websites and
            applications. Over the past year, I've honed my skills in front-end
            development, focusing on technologies like React, Next.js,
            TypeScript.
          </p>

          <p className='w-full'>
            My design process starts in Figma, where I meticulously plan and
            design projects before seamlessly transitioning to implementation.
            With a strong foundation in JavaScript, I'm at ease with various
            front-end frameworks, and I'm excited to explore Vue or Angular if
            the opportunity arises.
          </p>
          <p className='w-full'>
            I'm constantly eager to learn and open to new technologies. While
            mobile app development isn't my current focus, I aspire to delve
            into React Native in the future.
          </p>
          <p className='w-full'>
            I've gained valuable experience through personal projects and
            teamwork, contributing to two exciting ventures. Prior to my coding
            journey, I worked as a sales specialist in the electrical industry,
            serving wholesale clients.
          </p>
          <p className='w-full'>
            Currently based in Poland, I'm keen on remote work and open to
            relocation for the right opportunity. If you're interested in
            collaboration or have questions, let's connect!
          </p>
          <TLDR />
        </div>
        <Skills />
      </div>
    </SectionWrapper>
  );
};
