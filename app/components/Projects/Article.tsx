import { motion as m } from 'framer-motion';
import LinkList from './LinkList';
import StackList from './StackList';

const Article = () => {
  return (
    <m.article
      className="flex flex-col items-center justify-center w-4/5 max-w-[400px] min-h-[400px] h-full mt-14   rounded-lg bg-[var(--secondary-bg-color)]  md:w-4/5 "
      initial={{ y: '30px', opacity: 0 }}
      animate={{ y: '0px', opacity: 1 }}
      transition={{ delay: 0.4, opacity: { duration: 0.5 } }}
    >
      <m.h3
        className="p-4 text-base text-[var(--secondary-text-color)] md:text-2xl md:self-start"
        initial={{ x: '30px', opacity: 0 }}
        animate={{ x: '0px', opacity: 1 }}
        transition={{ delay: 0.6, opacity: { duration: 0.5 } }}
      >
        Dynamic table using Google Books API
      </m.h3>
      <div className="flex flex-col justify-between w-full min-h-80 max-h-full">
        <m.div
          className="px-5 py-2"
          initial={{ y: '30px', opacity: 0 }}
          animate={{ y: '0px', opacity: 1 }}
          transition={{ delay: 0.8, opacity: { duration: 0.5 } }}
        >
          <h4 className="text-sm text-justify  md:text-xl">
            An application created using the latest frontend technologies,
            including React 18, Next.js 13, Tailwind, and Typescript. The
            application utilizes an open-source API called Google Books API to
            gather information about books, allowing users to check their
            details and explore other books written by the same author.
          </h4>
        </m.div>

        <div className="flex items-center justify-center w-full h-full">
          <StackList />
        </div>
      </div>

      <div className="w-full px-4 py-4 border-t border-gray-500">
        <LinkList />
      </div>
    </m.article>
  );
};

export default Article;
