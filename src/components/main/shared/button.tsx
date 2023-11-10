import type {MouseEventHandler, ReactNode} from 'react';

type ButtonProps = {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: 'default' | 'transparent';
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  className = '',
  type = 'button',
  style = 'default',
  disabled,
  children,
  onClick
}: ButtonProps): JSX.Element => (
  <button
    className={`border-2 border-cyan-600 py-2 font-bold tracking-wider duration-150 active:bg-cyan-700 active:text-white disabled:border-gray-300 disabled:bg-gray-300 ${
      style === 'default'
        ? 'bg-cyan-600 text-white'
        : 'text-cyan-600 hover:bg-cyan-600 hover:text-white'
    } ${className}`.trim()}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export type {ButtonProps};
export default Button;
