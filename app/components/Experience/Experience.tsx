'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion as m, useInView } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import Article from './Article';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('company1');
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section
      id="experience"
      className="snap-center flex flex-col items-center min-h-[calc(100vh-3.5rem)] w-screen scroll-my-0 mt-14"
    >
      {isInView && (
        <>
          <SectionHeader title="Experience" />
          <div className="flex flex-col items-center justify-center w-4/5 h-full mt-8">
            <ul className="flex text-sm text-center border-b border-gray-200  ">
              <li className="mr-2">
                <button
                  className={`${
                    activeTab === 'company1'
                      ? ' inline-block p-4 text-[var(--secondary-text-color)]  rounded-t-lg bg-[#112240]'
                      : 'inline-block p-4 text-[var(--primary-text-color)]  rounded-t-lg bg-[var(--body-bg-color)]'
                  } `}
                  onClick={() => handleTabClick('company1')}
                >
                  TIM S.A
                </button>
              </li>
              <li>
                <button
                  className={`${
                    activeTab === 'company2'
                      ? ' inline-block p-4 text-[var(--secondary-text-color)]  rounded-t-lg bg-[#112240]'
                      : 'inline-block p-4 text-[var(--primary-text-color)]  rounded-t-lg bg-[var(--body-bg-color)]'
                  }  `}
                  onClick={() => handleTabClick('company2')}
                >
                  MAGELEKTRO
                </button>
              </li>
              <li>
                <button
                  className={`${
                    activeTab === 'company3'
                      ? ' inline-block p-4 text-[var(--secondary-text-color)]  rounded-t-lg bg-[#112240]'
                      : 'inline-block p-4 text-[var(--primary-text-color)]  rounded-t-lg bg-[var(--body-bg-color)]'
                  } `}
                  onClick={() => handleTabClick('company3')}
                >
                  Asaj
                </button>
              </li>
            </ul>

            <div className="flex items-center justify-center mt-4">
              {activeTab === 'company1' && (
                <Article
                  position="Commercial Matters Specialist"
                  companyName="TIM S.A"
                  companySite="https://www.timsa.pl/"
                  period="08-2022 - 08-2023"
                  description=" I had the whole sales process under my belt - from
                chatting with customers about what they needed to making
                sure their orders got fulfilled to keeping them coming
                back for more. I got to work with over 200 different
                clients, including some big names like Volkswagen,
                Amica, Braun, Żabka, and even a foreign partner,
                FlexLink. One of my biggest responsibilities was to
                negotiate contracts with some really big players in the
                electrical manufacturing space, like Schenider, Eaton,
                Legrand, and Hager. So I`ve picked up some pretty strong
                contract negotiation and vendor management skills along
                the way."
                />
              )}
              {activeTab === 'company2' && (
                <Article
                  position="Public Procurement Specialist"
                  companyName="Magelektro"
                  companySite="https://www.magelektro.pl/"
                  period="04-2022 - 07-2022"
                  description=" I had the whole sales process under my belt - from
              chatting with customers about what they needed to making
              sure their orders got fulfilled to keeping them coming
              back for more. I got to work with over 200 different
              clients, including some big names like Volkswagen,
              Amica, Braun, Żabka, and even a foreign partner,
              FlexLink. One of my biggest responsibilities was to
              negotiate contracts with some really big players in the
              electrical manufacturing space, like Schenider, Eaton,
              Legrand, and Hager. So I`ve picked up some pretty strong
              contract negotiation and vendor management skills along
              the way."
                />
              )}
              {activeTab === 'company3' && (
                <Article
                  position="Customer Advisor"
                  companyName="Asaj"
                  companySite="https://www.asaj.pl/"
                  period="07-2018 - 07-2020"
                  description=" I had the whole sales process under my belt - from
            chatting with customers about what they needed to making
            sure their orders got fulfilled to keeping them coming
            back for more. I got to work with over 200 different
            clients, including some big names like Volkswagen,
            Amica, Braun, Żabka, and even a foreign partner,
            FlexLink. One of my biggest responsibilities was to
            negotiate contracts with some really big players in the
            electrical manufacturing space, like Schenider, Eaton,
            Legrand, and Hager. So I`ve picked up some pretty strong
            contract negotiation and vendor management skills along
            the way."
                />
              )}
            </div>
          </div>
        </>
      )}
      <div ref={myRef} className=""></div>
    </section>
  );
};

export default Experience;
