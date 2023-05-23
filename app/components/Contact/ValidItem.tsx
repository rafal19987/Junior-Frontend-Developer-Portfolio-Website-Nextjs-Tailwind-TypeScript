import ValidCheckSvgIcon from './ValidCheckSvgIcon';
import ValidText from './ValidText';

type Props = {
  text: string;
  iconValid: boolean | null;
};

const ValidItem = ({ text, iconValid }: Props) => {
  return (
    <li className="flex items-center mt-1">
      <ValidCheckSvgIcon iconValid={iconValid} />
      <ValidText text={text} iconValid={iconValid} />
    </li>
  );
};

export default ValidItem;
