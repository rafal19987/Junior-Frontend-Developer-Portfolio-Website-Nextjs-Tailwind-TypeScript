import { motion as m, useInView } from 'framer-motion';
import Skill from './Skill';

const SkillList = () => {
  return (
    <ol className="list-disc">
      <Skill startX="30" delayTime={0.8} description="HTML, CSS/SASS" />
      <Skill startX="40" delayTime={0.9} description="React, Next.js" />
      <Skill
        startX="50"
        delayTime={1}
        description="Tailwind, Styled-components"
      />
      <Skill
        startX="60"
        delayTime={1.1}
        description="Conventional Commits, BEM"
      />
      <Skill startX="70" delayTime={1.2} description="Figma, Github" />
    </ol>
  );
};

export default SkillList;
