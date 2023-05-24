import { useState } from 'react';
import Article from './Article';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('company1');
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-8 p-6 xl:w-full">
      <ul className="flex flex-wrap text-sm items-center  border-b border-gray-200 xl:w-2/5 xl:justify-between ">
        <li className="mr-2">
          <button
            className={`${
              activeTab === 'company1'
                ? ' inline-block p-4 text-[var(--secondary-text-color)]  rounded-t-lg bg-[#112240] text-sm'
                : 'inline-block p-4 text-[var(--primary-text-color)]  rounded-t-lg bg-[var(--body-bg-color)] text-sm'
            } `}
            onClick={() => handleTabClick('company1')}
          >
            TIM
          </button>
        </li>
        <li>
          <button
            className={`${
              activeTab === 'company2'
                ? ' inline-block p-4 text-[var(--secondary-text-color)]  rounded-t-lg bg-[#112240] text-base'
                : 'inline-block p-4 text-[var(--primary-text-color)]  rounded-t-lg bg-[var(--body-bg-color)] text-base'
            }  `}
            onClick={() => handleTabClick('company2')}
          >
            Magelektro
          </button>
        </li>
        <li>
          <button
            className={`${
              activeTab === 'company3'
                ? ' inline-block p-4 text-[var(--secondary-text-color)]  rounded-t-lg bg-[#112240] text-base'
                : 'inline-block p-4 text-[var(--primary-text-color)]  rounded-t-lg bg-[var(--body-bg-color)] text-base'
            } `}
            onClick={() => handleTabClick('company3')}
          >
            WandleeAI
          </button>
        </li>
        <li>
          <button
            className={`${
              activeTab === 'company4'
                ? ' inline-block p-4 text-[var(--secondary-text-color)]  rounded-t-lg bg-[#112240] text-base'
                : 'inline-block p-4 text-[var(--primary-text-color)]  rounded-t-lg bg-[var(--body-bg-color)] text-base'
            } `}
            onClick={() => handleTabClick('company4')}
          >
            Asaj
          </button>
        </li>
      </ul>

      <div className="flex items-center justify-center mt-4 w-full">
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
            description="As a Public Procurement Specialist for military units my main tasks included liaising with the military clients for procurement orders, preparing bids for tenders, handling all the necessary paperwork, negotiating purchase terms with suppliers, ensuring timely delivery of goods, communicating with clients regarding tender results, reviewing competing offers to ensure compliance with client requirements, and organizing deliveries to clients. This experience provided me with valuable skills in customer communication, negotiation, documentation, and managing procurement processes."
          />
        )}
        {activeTab === 'company3' && (
          <Article
            position="JavaScript Developer Intern"
            companyName="Wandlee"
            companySite="https://wandlee.com/"
            period="08-2019 - 09-2019"
            description="
            As a JavaScript developer, I have primarily focused on web application layout programming using the Svelte framework and Express for Node.js. I have also been involved in testing scenarios involving interactions with our company's chatbot, which operates within the Facebook environment."
          />
        )}
        {activeTab === 'company4' && (
          <Article
            position="Customer Advisor"
            companyName="Asaj"
            companySite="https://www.asaj.pl/"
            period="07-2018 - 07-2020"
            description="As a Customer Advisor, I was responsible for serving retail customers, preparing commercial offers, maintaining strong relationships with assigned clients, managing the complaint department at the branch, preparing reports on logistics transport, negotiating deals with suppliers, overseeing lighting projects for clients, and collaborating with electricians, energy specialists, and photovoltaic installation technicians. This experience provided me with valuable skills in customer service, project management, logistics, and collaboration with specialists from various fields."
          />
        )}
      </div>
    </div>
  );
};

export default Tab;
