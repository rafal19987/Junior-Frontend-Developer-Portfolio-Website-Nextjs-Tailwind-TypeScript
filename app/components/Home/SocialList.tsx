import SocialItem from './SocialItem';
import githubSmall from 'assets/githubSmall.svg';
import linkedInSmall from 'assets/linkedinSmall.svg';

const SocialList = () => {
  return (
    <ul className="self-center flex items-center justify-between mt-14 w-3/5 xl:w-2/12">
      <SocialItem
        startX="-100"
        reference="https://github.com/rafal19987"
        icon={githubSmall}
        description="Github"
      />
      <SocialItem
        startX="100"
        reference="https://www.linkedin.com/in/rafa%C5%82-izdebski-78023b1b0/"
        icon={linkedInSmall}
        description="LinkedIn"
      />
    </ul>
  );
};

export default SocialList;
