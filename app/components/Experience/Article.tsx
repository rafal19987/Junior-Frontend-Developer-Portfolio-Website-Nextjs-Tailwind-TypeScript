'use client';

import Link from 'next/link';
import { motion as m } from 'framer-motion';

type ArticleProps = {
  position: string;
  companyName: string;
  companySite: string;
  period: string;
  description: string;
};

const Article = ({
  position,
  companyName,
  companySite,
  period,
  description,
}: ArticleProps) => {
  return (
    <m.article
      className="flex flex-col w-full min-h-[400px] h-full p-4 rounded-lg bg-[var(--secondary-bg-color)] md:w-4/5"
      initial={{ y: '30px', opacity: 0 }}
      animate={{ y: '0px', opacity: 1 }}
      transition={{ delay: 0.2, opacity: { duration: 0.5 } }}
    >
      <m.h3
        className="text-base text-[var(--primary-text-color)] md:text-xl xl:text-xl"
        initial={{ x: '30px', opacity: 0 }}
        animate={{ x: '0px', opacity: 1 }}
        transition={{ delay: 0.3, opacity: { duration: 0.5 } }}
      >
        {position}
        <span>
          <Link
            className="text-base text-[var(--secondary-text-color)] xl:text-xl hover:text-violet-500 transition-colors"
            href={`${companySite}`}
            target="_blank"
          >
            {' '}
            @ {companyName}
          </Link>
        </span>
      </m.h3>
      <m.p
        className="text-sm xl:text-base"
        initial={{ y: '30px', opacity: 0 }}
        animate={{ y: '0px', opacity: 1 }}
        transition={{ delay: 0.4, opacity: { duration: 0.5 } }}
      >
        {period}
      </m.p>
      <div className="flex flex-col justify-between w-full min-h-80 max-h-full">
        <m.div
          className="mt-4"
          initial={{ y: '30px', opacity: 0 }}
          animate={{ y: '0px', opacity: 1 }}
          transition={{ delay: 0.5, opacity: { duration: 0.5 } }}
        >
          <h4 className="pb-2 text-sm text-justify md:text-xl xl:text-xl">
            {description}
          </h4>
        </m.div>
      </div>
    </m.article>
  );
};

export default Article;
