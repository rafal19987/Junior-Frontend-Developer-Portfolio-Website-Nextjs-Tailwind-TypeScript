import { motion as m } from 'framer-motion';
import Image from 'next/image';
import dotIcon from 'assets/dot.svg';

type SkillProps = {
  startX: string;
  delayTime: number;
  description: string;
};

const Skill = ({ startX, delayTime, description }: SkillProps) => {
  return (
    <m.li
      className="flex mt-2"
      initial={{ x: `${startX}px`, opacity: 0 }}
      animate={{ x: '0px', opacity: 1 }}
      transition={{ delay: delayTime, opacity: { duration: 0.5 } }}
    >
      <Image src={dotIcon} alt="dot order list icon"></Image>
      <span className="ml-2 text-sm xl:ml-4 xl:text-xl">{description}</span>
    </m.li>
  );
};

export default Skill;
