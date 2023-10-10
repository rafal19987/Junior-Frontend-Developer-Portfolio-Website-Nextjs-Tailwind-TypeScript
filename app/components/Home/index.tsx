import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Avatar } from './Avatar';
import { Social } from './Social';
import { ScrollDown } from './ScrollDown';
import { socials } from './content';

export const Home = () => {
  return (
    <SectionWrapper id='home' className='relative grow h-screen mt-0'>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-8 w-full h-full'>
        <div className='flex flex-col gap-3 sm:gap-8 items-center justify-center w-full max-w-[500px] '>
          <Avatar />
          <div className='w-full self-start'>
            <span className='text-green-light font-langar text-[clamp(16px,3vw,28px)]'>
              Hi, my name is
            </span>
            <h1 className='text-4xl text-[clamp(28px,5vw,48px)]'>
              Rafał Izdebski
            </h1>
            <span className='text-[clamp(16px,3vw,28px)]'>
              I love Front-End Development
            </span>
          </div>
        </div>
        <div>
          <span className='hidden lg:inline-block text-[28px] text-primary font-langar py-4'>
            My Socials and CV
          </span>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-8 lg:gap-16 w-fit md:max-w-[800px] lg:max-w-full '>
            {socials.map((s) => (
              <Social key={s.id} link={s.link} svgIcon={s.svgIcon} />
            ))}
          </div>
        </div>
      </div>
      <ScrollDown />
    </SectionWrapper>
  );
};
