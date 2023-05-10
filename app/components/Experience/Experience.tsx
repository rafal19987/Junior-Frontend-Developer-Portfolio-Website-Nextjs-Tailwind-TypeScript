'use client';

import { motion as m, useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  return (
    <section
      id="experience"
      className="snap-center flex flex-col items-center min-h-[calc(100vh-3.5rem)] w-screen scroll-my-0 mt-14"
    >
      {isInView && (
        <>
          <m.div
            className="flex items-center justify-center w-3/5 h-full border-b"
            initial={{ y: '30px', opacity: 0 }}
            animate={{ y: '0px', opacity: 1 }}
            transition={{ delay: 0.3, opacity: { duration: 0.5 } }}
          >
            <h2 className="p-4 text-2xl">Experience</h2>
          </m.div>
          <div className="flex flex-col items-center justify-center w-4/5 h-full mt-8">
            <m.p
              className="text-sm mt-2"
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.4, opacity: { duration: 0.5 } }}
            >
              My career so far (3.5 years exp) has consisted mainly of contact
              with the client. I have had some really great experience in
              customer service, sales, and account management. In my last job as
              a Commercial Matters Specialist at TIM S.A., a big-time
              distributor of electrical goods in Poland, I had the whole sales
              process under my belt - from chatting with customers about what
              they needed to making sure their orders got fulfilled to keeping
              them coming back for more.
            </m.p>
            <m.p
              className="text-sm mt-2"
              initial={{ y: '30px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{ delay: 0.5, opacity: { duration: 0.5 } }}
            >
              Oh, and one more thing - I have also had some experience working
              in a hybrid system, which has helped me get pretty good at working
              remotely. So, overall, I think my background in sales and account
              management, coupled with my negotiation skills and remote work
              experience, could be a real asset to any team.
            </m.p>
          </div>
        </>
      )}
      <div ref={myRef} className=""></div>
    </section>
  );
};

export default Experience;
