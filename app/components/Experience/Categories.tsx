'use client';

import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { expCategories, experience } from './content';
import { Exp } from './Exp';

export const Categories = () => {
  const [activeTab, setActiveTab] = useState('it');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-20 w-screen flex flex-col items-center justify-center">
      <ul className="flex text-sm items-center w-fit xl:justify-between">
        {expCategories.map((c) => (
          <li
            key={c.id}
            className={`w-[100px] border-b transition-all duration-200 ${
              activeTab === c.label
                ? 'border-[var(--secondary-text-color)]'
                : 'border-[var(--body-bg-color)]'
            }`}
          >
            <button
              className={`
            inline-block p-4 w-full rounded-t-lg text-sm text-[var(--primary-text-color)] transition-all duration-200 border-b border-transparent
            ${
              activeTab === c.label &&
              'text-[var(--secondary-text-color)] bg-[#112240]'
            }`}
              onClick={() => handleTabClick(c.label)}
            >
              {c.label.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center mt-4 w-fit">
        {expCategories.map((c) => (
          <>
            {activeTab === c.label && (
              <m.article
                className="flex flex-col w-full min-h-[200px] h-full  rounded-lg bg-[var(--secondary-bg-color)]"
                initial={{ y: '30px', opacity: 0 }}
                animate={{ y: '0px', opacity: 1 }}
                transition={{ delay: 0.2, opacity: { duration: 0.5 } }}
              >
                {experience.map(
                  (e) => c.label === e.type && <Exp key={e.id} {...e} />
                )}
              </m.article>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
