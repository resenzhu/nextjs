type InputProps = {
  label: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
};

const Input = ({label}: InputProps): JSX.Element => (
  <form></form>
);

export type {InputProps};
export default Input;
