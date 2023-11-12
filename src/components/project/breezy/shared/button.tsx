import type {MouseEventHandler, ReactNode} from 'react';

type ButtonProps = {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: 'default' | 'profile';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  className = '',
  type = 'button',
  style = 'default',
  children,
  onClick
}: ButtonProps): JSX.Element => (
  <button
    className={`bg-purple-500 px-5 py-2 font-semibold text-white duration-150 hover:bg-purple-600 ${
      style === 'default'
        ? 'rounded-lg'
        : 'flex w-64 items-center justify-start space-x-3 rounded-full'
    } ${className}`.trim()}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export type {ButtonProps};
export default Button;
