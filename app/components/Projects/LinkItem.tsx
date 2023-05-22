import Link from 'next/link';
import { motion as m } from 'framer-motion';

type LinkItemProps = {
  startX: string;
  delayTime: number;
  description: string;
};

const LinkItem = ({ startX, delayTime, description }: LinkItemProps) => {
  return (
    <m.li
      className="group w-16 h-9 bg-[var(--body-bg-color)] border border-[var(--secondary-bg-color)] rounded-lg md:w-20 md:h-12  hover:border-[var(--secondary-text-color)] transition-colors duration-200"
      initial={{ x: `${startX}px`, opacity: 0 }}
      animate={{ x: '0px', opacity: 1 }}
      transition={{ delay: delayTime, opacity: { duration: 0.5 } }}
    >
      <Link
        href="https://interview-questions-app.vercel.app/"
        className="flex items-center justify-center text-center w-full h-full text-[var(--secondary-text-color)] text-base "
        target="_blank"
      >
        {description}
      </Link>
    </m.li>
  );
};

export default LinkItem;
