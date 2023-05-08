import Home from './components/Home/Home';
import About from './components/About/About';

const Page = () => {
  return (
    <main className="flex flex-col justify-center w-full h-full">
      <Home />
      <About />
    </main>
  );
};

export default Page;
