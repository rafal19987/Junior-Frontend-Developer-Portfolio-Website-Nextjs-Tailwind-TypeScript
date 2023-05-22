import Image from 'next/image';
import Link from 'next/link';
import { motion as m } from 'framer-motion';

type SocialItemProps = {
  startX: string;
  reference: string;
  icon: string;
  description: string;
};

const SocialItem = ({
  startX,
  reference,
  icon,
  description,
}: SocialItemProps) => {
  return (
    <m.li
      initial={{ x: `${startX}px`, opacity: 0 }}
      animate={{ x: '0', opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <Link
        className="flex flex-col items-center justify-center w-16 h-full bg-[var(--secondary-bg-color)] border border-[var(--secondary-bg-color)] rounded-lg hover:border-[var(--secondary-text-color)] transition-colors duration-200"
        href={reference}
        target="_blank"
      >
        <Image className="pt-2" src={icon} alt="github icon" />
        <span className="text-sm pt-2 px-2 pb-1">{description}</span>
      </Link>
    </m.li>
  );
};

export default SocialItem;
