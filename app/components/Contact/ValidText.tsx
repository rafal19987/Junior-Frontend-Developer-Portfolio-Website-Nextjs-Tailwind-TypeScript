'use client';

type Props = {
  text: string;
  iconValid: boolean | null;
};

const ValidText = ({ text, iconValid }: Props) => {
  return (
    <span
      className={`
      ${iconValid === null ? 'hidden' : 'inline'}
      ${
        iconValid ? 'text-[var(--secondary-text-color)]' : 'text-[#984C41]'
      } pl-1 text-xs`}
    >
      {text}
    </span>
  );
};

export default ValidText;
