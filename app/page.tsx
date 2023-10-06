import Home from './components/Home/Home';
import About from './components/About/About';

import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import Contact from './components/Contact/Contact';

const Page = () => {
  return (
    <main className=" flex flex-col justify-center w-full h-full ">
      <div className="snap-y snap-mandatory h-[calc(100vh-3.5rem)] w-screen overflow-y-scroll overflow-x-hidden mt-14 ">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Page;
