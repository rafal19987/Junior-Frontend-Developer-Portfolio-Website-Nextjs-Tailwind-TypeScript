import StackItem from './StackItem';

const StackList = () => {
  return (
    <ul className="flex gap-6 flex-wrap items-center justify-center w-full h-full px-4 pb-4 xl:py-4  xl:justify-between">
      <StackItem startX="30" delayTime={0.9} description="React" />
      <StackItem startX="40" delayTime={1} description="Next.js" />
      <StackItem startX="50" delayTime={1.1} description="Tailwind" />
      <StackItem startX="60" delayTime={1.2} description="Typescript" />
    </ul>
  );
};

export default StackList;
