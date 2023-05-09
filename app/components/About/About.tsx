import Image from 'next/image';
import dotIcon from 'assets/dot.svg';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center min-h-[calc(100vh-3.5rem)] w-screen scroll-my-0"
    >
      <div className="flex items-center justify-center w-3/5 h-full mt-14 border-b ">
        <h2 className="p-4 text-2xl">About</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-4/5 h-full mt-8 md:w-3/5">
        <span className=" self-start"> Hi there!</span>
        <p className="text-sm mt-2">
          I am an aspiring Frontend Developer based in Poland looking for
          opportunities to grow and excel in the field.
        </p>
        <p className="text-sm mt-2">
          I am highly motivated, ambitious, and ready to take on new challenges.
          Currently, I am expanding my knowledge in TypeScript and Next.js. In
          free time I like kayaking.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full mt-12">
        <h3 className="text-xl">Frontend skills</h3>
        <div className="w-4/5 h-full mt-8 ">
          <ol className="list-disc">
            <li className="flex mt-2">
              <Image src={dotIcon} alt="dot order list icon"></Image>
              <span className="ml-2 text-sm"> HTML, CSS/SASS</span>
            </li>
            <li className="flex mt-1">
              <Image src={dotIcon} alt="dot order list icon"></Image>
              <span className="ml-2 text-sm">React, Next.js</span>
            </li>
            <li className="flex mt-1">
              <Image src={dotIcon} alt="dot order list icon"></Image>
              <span className="ml-2 text-sm">Tailwind, Styled-components</span>
            </li>
            <li className="flex mt-1">
              <Image src={dotIcon} alt="dot order list icon"></Image>
              <span className="ml-2 text-sm">Conventional Commits, BEM</span>
            </li>
            <li className="flex mt-1">
              <Image src={dotIcon} alt="dot order list icon"></Image>
              <span className="ml-2 text-sm">Figma, Github</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
