const Projects = () => {
  return (
    <section className="flex flex-col items-center min-h-[calc(100vh-3.5rem)] w-screen">
      <div className="flex items-center justify-center w-full h-full mt-11">
        <h2 className="text-2xl">Projects</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-4/5 h-full mt-8">
        <span className=" self-start">JavaScript Interview questions App</span>
        <div className="w-full h-72 border-2"></div>
        <p className="text-sm mt-2">
          I am an aspiring Frontend Developer looking for opportunities to grow
          and excel in the field.
        </p>
        <p className="text-sm mt-2">
          I am highly motivated, ambitious, and ready to take on new challenges.
          Currently, I am expanding my knowledge in TypeScript and Next.js. In
          free time I like kayaking.
        </p>
      </div>
    </section>
  );
};

export default Projects;
