import Image from 'next/image';
import Link from 'next/link';

type SocialItemProps = {
  reference: string;
  icon: string;
  description: string;
};

const SocialItem = ({ reference, icon, description }: SocialItemProps) => {
  return (
    <li>
      <Link
        className="flex flex-col items-center justify-center w-16 h-full bg-[var(--secondary-bg-color)] border border-[var(--secondary-bg-color)] rounded-lg hover:border-[var(--secondary-text-color)] transition-colors duration-200"
        href={reference}
        target="_blank"
      >
        <Image className="pt-2" src={icon} alt="github icon" />
        <span className="text-sm pt-2 px-2 pb-1">{description}</span>
      </Link>
    </li>
  );
};

export default SocialItem;
