import LinkItem from './LinkItem';

const LinkList = () => {
  return (
    <ul className="flex justify-between md:justify-evenly">
      <LinkItem
        startX="30"
        delayTime={1.5}
        description="Live"
        href="https://dynamic-table-project.vercel.app/"
      />
      <LinkItem
        startX="40"
        delayTime={1.6}
        description="Repo"
        href="https://github.com/rafal19987/dynamic-table-project"
      />
    </ul>
  );
};

export default LinkList;
