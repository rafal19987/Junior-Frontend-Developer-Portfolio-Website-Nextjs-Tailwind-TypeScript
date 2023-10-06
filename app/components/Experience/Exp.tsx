'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

import { type TExperience } from './content';
import Link from 'next/link';

export const Exp = ({
  id: itemId,
  position,
  company,
  city,
  site,
  period,
  description,
}: TExperience) => {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Accordion open={open === itemId}>
      <AccordionHeader
        className={`${
          open === itemId ? 'text-[#CCD6F6]' : 'text-[#94A3B8]'
        } hover:text-[#CCD6F6] text-[20px]`}
        onClick={() => handleOpen(itemId)}
      >
        <div>
          {position}{' '}
          {open === itemId ? (
            <Link href={site}>
              <span className={`${open === itemId && 'text-[#64FFDA]'}`}>
                @ {company}
              </span>
            </Link>
          ) : (
            <span className={`${open === itemId && 'text-[#64FFDA]'}`}>
              @ {company}
            </span>
          )}{' '}
          {city}
        </div>
      </AccordionHeader>
      <AccordionBody className="text-[#CCD6F6] text-[16px]">
        <p>{period}</p>
        {description}
      </AccordionBody>
    </Accordion>
  );
};
