import Input from '@components/main/contact/form/input';
import {LazyLoad} from '@components/main/shared';

type FormProps = {
  title: string;
  description: string;
  label: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
};

const Form = ({title, description, label}: FormProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-8 md:mx-0'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <div className='space-y-6 text-center text-gray-600 md:mx-auto md:w-2/3 lg:w-1/2'>
      <LazyLoad>
        <p className='animate-fade-left animate-duration-700'>{description}</p>
      </LazyLoad>
      <Input
        label={{
          name: label.name,
          email: label.email,
          message: label.message,
          submit: label.submit
        }}
      />
    </div>
  </div>
);

export type {FormProps};
export default Form;
