type TExpCategories = {
  id: number;
  label: string;
};

export type TExperience = {
  id: number;
  type?: string;
  position: string;
  city: string;
  company: string;
  site: string;
  period: string;
  description: string;
};

export const expCategories: TExpCategories[] = [
  {
    id: 1,
    label: 'it',
  },
  {
    id: 2,
    label: 'sales',
  },
];

export const experience: TExperience[] = [
  {
    id: 1,
    type: 'sales',
    position: 'Commercial Matters Specialist',
    city: 'Poznań',
    company: 'TIM S.A.',
    site: 'https://www.timsa.pl/',
    period: '08-2021 - 08-2022',
    description:
      'I had the whole sales process under my belt - from chatting with customers about what they needed to making sure their orders got fulfilled to keeping them coming back for more. I got to work with over 200 different clients, including some big names like Volkswagen, Amica, Braun, Żabka, and even a foreign partner, FlexLink. One of my biggest responsibilities was to negotiate contracts with some really big players in the electrical manufacturing space, like Schenider, Eaton, Legrand, and Hager. So I`ve picked up some pretty strong contract negotiation and vendor management skills along the way.',
  },
  {
    id: 2,
    type: 'sales',
    position: 'Public Procurement Specialist',
    city: 'Poznań',
    company: 'Magelektro',
    site: 'https://www.magelektro.pl/',
    period: '04-2021 - 08-2021',
    description:
      'As a Public Procurement Specialist for military units my main tasks included liaising with the military clients for procurement orders, preparing bids for tenders, handling all the necessary paperwork, negotiating purchase terms with suppliers, ensuring timely delivery of goods, communicating with clients regarding tender results, reviewing competing offers to ensure compliance with client requirements, and organizing deliveries to clients. This experience provided me with valuable skills in customer communication, negotiation, documentation, and managing procurement processes.',
  },
  {
    id: 3,
    type: 'sales',
    position: 'Customer Advisor',
    city: 'Łuków',
    company: 'Asaj',
    site: 'https://www.asaj.pl/',
    period: '07-2018 - 07-2020',
    description:
      'As a Customer Advisor, I was responsible for serving retail customers, preparing commercial offers, maintaining strong relationships with assigned clients, managing the complaint department at the branch, preparing reports on logistics transport, negotiating deals with suppliers, overseeing lighting projects for clients, and collaborating with electricians, energy specialists, and photovoltaic installation technicians. This experience provided me with valuable skills in customer service, project management, logistics, and collaboration with specialists from various fields.',
  },
  {
    id: 4,
    type: 'it',
    position: 'Front-end Trainee',
    city: 'Białystok',
    company: 'SoftwareHut',
    site: 'https://softwarehut.com/',
    period: '09-2023 - 09-2023',
    description:
      'My front-end internship was divided into two stages. During the first stage, I worked independently on implementing a static web page (Zonifero Landing Page) focusing primarily on HTML and SASS as per the requirements. The second stage involved the development of a web application (OrderlyAI) in a four-member front-end development team, under the supervision of a team leader. Progress related to the project was reported to the team leader on a daily basis during daily standup meetings, and the project`s advancements were tracked on GitHub using GIT Flow.',
  },
  {
    id: 5,
    type: 'it',
    position: 'JavaScript Intern',
    city: 'Warszawa',
    company: 'Wandlee',
    site: 'https://wandlee.com/',
    period: '08-2019 - 08-2019',
    description:
      'As a JavaScript Intern, I have primarily focused on web application layout programming using the HTML, SASS and JavaScript. I have also been involved in testing scenarios involving interactions with our company`s chatbot, which operates within the Facebook environment.',
  },
];
