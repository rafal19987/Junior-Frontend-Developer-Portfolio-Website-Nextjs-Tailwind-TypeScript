import SectionBody from '../shared/SectionBody';
import SectionHeader from '../shared/SectionHeader';
import { Categories } from './Categories';

export const Experience = () => {
  return (
    <SectionBody id="experience">
      <div className="flex flex-col items-center w-full xl:w-3/5">
        <SectionHeader title="Experience" />
        <Categories />
      </div>
    </SectionBody>
  );
};
