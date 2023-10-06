import SocialItem from './SocialItem';
import githubSmall from 'assets/githubSmall.svg';
import linkedInSmall from 'assets/linkedinSmall.svg';

const SocialList = () => {
  return (
    <ul className="self-center flex items-center justify-between mt-14 w-3/5  md:w-2/5 md:mt-20  lg:w-52 lg:h-56 lg:mt-2 lg:ml-8 ">
      <SocialItem
        reference="https://github.com/rafal19987"
        icon={githubSmall}
        description="Github"
      />
      <SocialItem
        reference="https://www.linkedin.com/in/rafa%C5%82-izdebski-78023b1b0/"
        icon={linkedInSmall}
        description="LinkedIn"
      />
    </ul>
  );
};

export default SocialList;
