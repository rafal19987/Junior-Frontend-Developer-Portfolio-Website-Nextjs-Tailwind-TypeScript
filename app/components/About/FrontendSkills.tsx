import { motion as m } from 'framer-motion';
import SkillList from './SkillList';

const FrontendSkills = () => {
  return (
    <div className="w-full ">
      <m.div
        className="flex flex-col items-center justify-center w-full h-full mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, opacity: { duration: 0.5 } }}
      >
        <h3 className="text-xl xl:text-3xl">Frontend skills</h3>
        <div className="w-full h-full mt-8 xl:w-full">
          <SkillList />
        </div>
      </m.div>
    </div>
  );
};

export default FrontendSkills;
