import Skill from './Skill';

const SkillList = () => {
  return (
    <ol className="list-disc">
      <Skill startX="30" delayTime={0.8} description="HTML/BEM" />
      <Skill
        startX="40"
        delayTime={0.9}
        description="CSS/SASS/Styled-components/CSS Modules"
      />
      <Skill startX="50" delayTime={1} description="Tailwind" />
      <Skill startX="60" delayTime={1.1} description="JavaScript/TypeScript" />
      <Skill startX="70" delayTime={1.2} description="Next.js" />
      <Skill startX="80" delayTime={1.3} description="REST API" />
      <Skill startX="90" delayTime={1.4} description="Git/Github" />
      <Skill startX="100" delayTime={1.5} description="Figma" />
      <Skill startX="100" delayTime={1.6} description="OpenAI ChatGPT" />
    </ol>
  );
};

export default SkillList;
