export type TSocials = {
  id: number;
  link: string;
  svgIcon: string;
};

export const socials: TSocials[] = [
  {
    id: 1,
    link: 'https://linkedin.com/in/rafal-izdebski',
    svgIcon:
      'M41.7778 0C43.1628 0 44.4911 0.550197 45.4704 1.52955C46.4498 2.50891 47 3.8372 47 5.22222V41.7778C47 43.1628 46.4498 44.4911 45.4704 45.4704C44.4911 46.4498 43.1628 47 41.7778 47H5.22222C3.8372 47 2.50891 46.4498 1.52955 45.4704C0.550197 44.4911 0 43.1628 0 41.7778V5.22222C0 3.8372 0.550197 2.50891 1.52955 1.52955C2.50891 0.550197 3.8372 0 5.22222 0H41.7778ZM36.8297 40.4722C38.8414 40.4722 40.4722 38.8414 40.4722 36.8297V26.6333C40.4722 24.3758 39.5754 22.2106 37.979 20.6143C36.3827 19.0179 34.2176 18.1211 31.96 18.1211C30.428 18.1211 28.7219 18.768 27.3998 19.8385C26.8987 20.2442 25.9022 19.9013 25.9022 19.2566C25.9022 18.9035 25.616 18.6172 25.2628 18.6172H22.2597C20.248 18.6172 18.6172 20.248 18.6172 22.2597V36.8297C18.6172 38.8414 20.248 40.4722 22.2597 40.4722C24.2714 40.4722 25.9022 38.8414 25.9022 36.8297V27.5994C25.9022 25.5889 27.5211 23.9439 29.5317 23.9439C30.5012 23.9439 31.431 24.329 32.1165 25.0146C32.8021 25.7001 33.1872 26.6299 33.1872 27.5994V36.8297C33.1872 38.8414 34.818 40.4722 36.8297 40.4722ZM10.1311 14.5178C11.2945 14.5178 12.4103 14.0556 13.233 13.233C14.0556 12.4103 14.5178 11.2945 14.5178 10.1311C14.5178 7.70278 12.5594 5.71833 10.1311 5.71833C8.96077 5.71833 7.83836 6.18325 7.01081 7.01081C6.18325 7.83836 5.71833 8.96077 5.71833 10.1311C5.71833 12.5594 7.70278 14.5178 10.1311 14.5178ZM10.1442 40.4722C12.1414 40.4722 13.7606 38.8531 13.7606 36.8558V22.2336C13.7606 20.2363 12.1414 18.6172 10.1442 18.6172C8.14689 18.6172 6.52778 20.2363 6.52778 22.2336V36.8558C6.52778 38.8531 8.14689 40.4722 10.1442 40.4722Z',
  },
  {
    id: 2,
    link: 'https://github.com/rafal19987',
    svgIcon:
      'M23.5 0C20.4139 0 17.3581 0.622937 14.5069 1.83324C11.6558 3.04355 9.06517 4.81752 6.88299 7.05387C2.47589 11.5704 0 17.6961 0 24.0834C0 34.4853 6.44009 43.3464 15.4392 46.7343C15.8592 46.8924 16.3054 47.0543 16.7449 46.9631C17.3978 46.8276 17.625 46.264 17.625 45.7585C17.625 43.6696 15.622 42.257 13.5881 41.7807C11.1141 41.2014 10.1275 39.4204 9.83274 38.7345C9.75529 38.5542 9.69463 38.3688 9.61911 38.1878C8.94884 36.5807 8.1395 35.7059 7.62731 35.2761C7.31068 35.0104 6.93878 34.8154 6.63042 34.5402C5.65261 33.6675 6.63031 33.5095 7.08245 33.4816C7.21741 33.4733 7.35289 33.479 7.48704 33.496C9.50215 33.7511 10.6556 35.5716 10.8508 35.9044C10.8713 35.9394 10.891 35.9755 10.911 36.0107C12.6654 39.0906 15.4312 38.7432 17.0263 38.2187C17.4638 38.0748 17.7784 37.5012 17.8964 37.056C18.1848 35.968 17.4583 34.5028 16.3683 34.2218C12.1757 33.1407 8.507 30.3901 8.507 22.8793C8.507 21.6454 8.69723 20.5245 9.05227 19.5069C9.79877 17.3674 10.4829 15.964 10.4537 13.6982C10.4307 11.9167 12.2374 9.79012 13.9058 10.415C14.1087 10.4911 14.3235 10.5786 14.5504 10.6792C16.6055 11.5908 18.873 12.0211 21.1086 11.783C21.9015 11.6986 22.7026 11.6564 23.5 11.6564C24.2974 11.6564 25.0985 11.6986 25.8914 11.783C28.127 12.0211 30.3945 11.5908 32.4496 10.6792C32.6765 10.5786 32.8913 10.4911 33.0942 10.415C34.7626 9.79012 36.5693 11.9167 36.5463 13.6982C36.5171 15.964 37.2012 17.3674 37.9477 19.5069C38.3028 20.5245 38.493 21.6454 38.493 22.8793C38.493 29.2551 35.8519 32.1839 32.486 33.5816C30.7492 34.3028 29.375 37.279 29.375 39.1597V45.7585C29.375 46.2809 29.6177 46.881 30.3344 46.9844C30.7414 47.0432 31.146 46.8976 31.5308 46.7529C40.5569 43.3584 47 34.5059 47 24.0834C47 20.9208 46.3922 17.789 45.2112 14.8671C44.0302 11.9452 42.2992 9.29023 40.117 7.05387C37.9348 4.81752 35.3442 3.04355 32.4931 1.83324C29.6419 0.622937 26.5861 0 23.5 0Z',
  },
  {
    id: 3,
    link: 'https://www.instagram.com/r_izdebski/',
    svgIcon:
      'M13.63 0H33.37C40.89 0 47 6.11 47 13.63V33.37C47 36.9849 45.564 40.4517 43.0079 43.0079C40.4517 45.564 36.9849 47 33.37 47H13.63C6.11 47 0 40.89 0 33.37V13.63C0 10.0151 1.43601 6.54826 3.99213 3.99213C6.54826 1.43601 10.0151 0 13.63 0ZM13.16 4.7C10.9163 4.7 8.76443 5.59132 7.17788 7.17788C5.59132 8.76443 4.7 10.9163 4.7 13.16V33.84C4.7 38.5165 8.4835 42.3 13.16 42.3H33.84C36.0837 42.3 38.2356 41.4087 39.8221 39.8221C41.4087 38.2356 42.3 36.0837 42.3 33.84V13.16C42.3 8.4835 38.5165 4.7 33.84 4.7H13.16ZM35.8375 8.225C36.6166 8.225 37.3637 8.53449 37.9146 9.08537C38.4655 9.63626 38.775 10.3834 38.775 11.1625C38.775 11.9416 38.4655 12.6887 37.9146 13.2396C37.3637 13.7905 36.6166 14.1 35.8375 14.1C35.0584 14.1 34.3113 13.7905 33.7604 13.2396C33.2095 12.6887 32.9 11.9416 32.9 11.1625C32.9 10.3834 33.2095 9.63626 33.7604 9.08537C34.3113 8.53449 35.0584 8.225 35.8375 8.225ZM23.5 11.75C26.6163 11.75 29.605 12.9879 31.8085 15.1915C34.0121 17.395 35.25 20.3837 35.25 23.5C35.25 26.6163 34.0121 29.605 31.8085 31.8085C29.605 34.0121 26.6163 35.25 23.5 35.25C20.3837 35.25 17.395 34.0121 15.1915 31.8085C12.9879 29.605 11.75 26.6163 11.75 23.5C11.75 20.3837 12.9879 17.395 15.1915 15.1915C17.395 12.9879 20.3837 11.75 23.5 11.75ZM23.5 16.45C21.6302 16.45 19.837 17.1928 18.5149 18.5149C17.1928 19.837 16.45 21.6302 16.45 23.5C16.45 25.3698 17.1928 27.163 18.5149 28.4851C19.837 29.8072 21.6302 30.55 23.5 30.55C25.3698 30.55 27.163 29.8072 28.4851 28.4851C29.8072 27.163 30.55 25.3698 30.55 23.5C30.55 21.6302 29.8072 19.837 28.4851 18.5149C27.163 17.1928 25.3698 16.45 23.5 16.45Z',
  },
  {
    id: 4,
    link: 'https://pwqgnabbqxslsvwfvxru.supabase.co/storage/v1/object/public/CV/aplikacje/CV.pdf?t=2023-10-07T12%3A14%3A25.033Z',
    svgIcon:
      'M5.03571 0C2.25558 0 0 2.25558 0 5.03571V41.9643C0 44.7444 2.25558 47 5.03571 47H41.9643C44.7444 47 47 44.7444 47 41.9643V5.03571C47 2.25558 44.7444 0 41.9643 0H5.03571ZM15.4093 13.9777C17.4693 13.9777 19.2996 14.6899 20.6474 15.7581C21.8937 16.7497 22.4774 17.7417 22.9867 18.6319L19.4278 20.4101C19.1732 19.8262 18.8668 19.2154 18.0801 18.555C17.2148 17.8677 16.3514 17.665 15.6122 17.665C12.7139 17.665 11.1881 20.3604 11.1881 23.3603C11.1881 27.3021 13.1983 29.2583 15.6122 29.2583C17.9517 29.2583 18.8936 27.6312 19.5023 26.5899L23.0384 28.3951C22.3759 29.4365 21.7402 30.4551 20.316 31.4448C19.5541 31.9788 17.8005 33.0223 15.3079 33.0223C10.5525 33.0223 6.71429 29.5649 6.71429 23.4864C6.71429 18.1741 10.3248 13.9777 15.4093 13.9777ZM23.3283 14.5366H28.1085L31.8205 27.302L35.5055 14.5366H40.2857L34.0562 32.4881H29.481L23.3283 14.5367V14.5366Z',
  },
];
