import { motion as m } from 'framer-motion';
import SkillList from './SkillList';

const FrontendSkills = () => {
  return (
    <div className="w-full xl:w-3/5">
      <m.div
        className="flex flex-col items-center justify-center w-full h-full mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, opacity: { duration: 0.5 } }}
      >
        <h3 className="text-xl xl:text-2xl">Frontend skills</h3>
        <div className="w-4/5 h-full mt-8 xl:w-full">
          <SkillList />
        </div>
      </m.div>
    </div>
  );
};

export default FrontendSkills;
