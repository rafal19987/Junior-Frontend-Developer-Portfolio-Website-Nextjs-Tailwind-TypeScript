import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

const Page = () => {
  return (
    <main className="flex flex-col justify-center w-full h-full">
      <Home />
      <About />
      <Experience />
    </main>
  );
};

export default Page;
