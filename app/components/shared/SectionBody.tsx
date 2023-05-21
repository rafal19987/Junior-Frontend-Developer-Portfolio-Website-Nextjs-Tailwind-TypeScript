type SectionProps = {
  id: string;
  children: React.ReactNode;
};

const SectionBody = ({ id, children }: SectionProps) => {
  return (
    <section
      id={id}
      className="snap-center flex flex-col items-center min-h-[calc(100vh-3.5rem)] w-screen scroll-my-0  mt-14 "
    >
      {children}
    </section>
  );
};

export default SectionBody;
