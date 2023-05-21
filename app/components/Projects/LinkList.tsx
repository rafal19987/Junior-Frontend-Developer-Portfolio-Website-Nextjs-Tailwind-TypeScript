import LinkItem from './LinkItem';

const LinkList = () => {
  return (
    <ul className="flex justify-between">
      <LinkItem startX="30" delayTime={1.5} description="Live" />
      <LinkItem startX="40" delayTime={1.6} description="Repo" />
      <LinkItem startX="50" delayTime={1.7} description="Figma" />
    </ul>
  );
};

export default LinkList;
