import Link from 'next/link';

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center min-h-[calc(100vh-3.5rem)] w-screen scroll-my-0"
    >
      <div className="flex items-center justify-center w-3/5 h-full mt-14 border-b">
        <h2 className="p-4 text-2xl">Projects</h2>
      </div>

      <div className="flex flex-col items-center justify-center w-4/5 h-full mt-14 ">
        <span className="text-base">JavaScript Interview questions App</span>
        <div className="flex flex-col justify-between w-full h-80 mt-2 rounded-lg bg-black">
          <div className="flex w-full h-8 p-5 border-b border-gray-500">
            <ul className="flex items-center justify-around w-full">
              <li className="text-sm text-gray-500">React</li>
              <li className="text-sm text-gray-500">Next.js</li>
              <li className="text-sm text-gray-500">Tailwind</li>
              <li className="text-sm text-gray-500">Typescript</li>
              <li className="text-sm text-gray-500">Supabase</li>
            </ul>
          </div>
          <div className="px-5 py-2">
            <p className="text-sm ">
              This app was designed and developed by me. Initially, I created a
              Figma prototype with a visual concept that evolved over time. This
              app marks my first experience working with Typescript, Next.js,
              and Supabase. Several functionalities are not yet ready, such as
              creating a new pool of questions and the user registration and
              login forms. However, I am continuously working on these aspects
              during my free time.
            </p>
          </div>
          <div className="flex justify-evenly w-full p-2 border-t border-gray-500">
            <Link
              href="#"
              className="flex items-center justify-center h-8 w-20 text-yellow-400"
            >
              Live
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center h-8 w-20 text-yellow-400"
            >
              Repo
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center h-8 w-20 text-yellow-400"
            >
              Figma
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
