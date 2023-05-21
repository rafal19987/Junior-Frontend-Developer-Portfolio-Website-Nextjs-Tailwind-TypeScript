import { motion as m } from 'framer-motion';

type StackItemProps = {
  startX: string;
  delayTime: number;
  description: string;
};

const StackItem = ({ startX, delayTime, description }: StackItemProps) => {
  return (
    <m.li
      className="flex items-center justify-center w-18 h-full"
      initial={{ x: `${startX}px`, opacity: 0 }}
      animate={{ x: '0px', opacity: 1 }}
      transition={{ delay: delayTime, opacity: { duration: 0.5 } }}
    >
      <span className="text-sm text-gray-500  md:text-base">{description}</span>
    </m.li>
  );
};

export default StackItem;
