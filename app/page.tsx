import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from './components/Contact';

const Page = () => {
  return (
    <main className='flex flex-col justify-center w-full max-w-[1400px] h-full'>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;
