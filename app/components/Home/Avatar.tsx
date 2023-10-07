import Image from 'next/image';
import avatar from '@/assets/avatar-lg.png';

export const Avatar = () => {
  return (
    <div className='relative flex items-center justify-center lg:self-start w-[clamp(100px,50vw,255px)] h-[clamp(100px,50vw,255px)] lg:w-80 lg:h-80 p-2 rounded-full bg-gradient-to-b from-teal-500/50 to-cyan-600/0'>
      <Image
        className='object-cover w-full'
        src={avatar}
        alt='developer image'
      />
    </div>
  );
};
