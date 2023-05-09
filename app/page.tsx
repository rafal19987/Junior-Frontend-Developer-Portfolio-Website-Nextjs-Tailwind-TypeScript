import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const Page = () => {
  return (
    <main className=" flex flex-col justify-center w-full h-full">
      <div className="snap-y snap-mandatory w-screen h-screen overflow-y-scroll">
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
