import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/helpers/utils';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButton> = (props) => {
  return (
    <button
      {...props}
      className={cn(
        'flex flex-col items-center justify-center p-4 mt-[8px] bg-none border border-green-light shadow-[-8px_8px_5px_2px_#64FFDA] hover:shadow-[0px_0px_5px_2px_#64FFDA] hover:-translate-x-[8px] hover:translate-y-[8px] group transition-all duration-300',
        props.className,
      )}
    >
      <span className='text-primary font-langar group-hover:text-green-light transition'>
        {props.children}
      </span>
    </button>
  );
};
