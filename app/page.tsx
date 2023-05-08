import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const Page = () => {
  return (
    <main className="flex flex-col justify-center w-full h-full">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;
