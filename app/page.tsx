import Home from './components/Home/Home';
import About from './components/About/About';

import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import Contact from './components/Contact/Contact';

const Page = () => {
  return (
    <main className="flex flex-col justify-center w-full max-w-[1400px] h-full mt-20">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;
