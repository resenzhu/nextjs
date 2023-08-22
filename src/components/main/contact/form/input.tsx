'use client';

import {type ChangeEvent, type FormEvent, Fragment} from 'react';
import type {Form} from '@redux/reducers/main/contact';
import {Transition} from '@headlessui/react';
import useContact from '@hooks/main/use-contact';

type InputProps = {
  label: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
};

const Input = ({label}: InputProps): JSX.Element => {
  const {form, setForm} = useContact();

  const handleUpdateForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const property = event.target.id as keyof Form;
    const {value} = event.target;
    if (form[property] !== value) {
      setForm({
        ...form,
        [property]: value
      });
    }
  };

  const handleTrimForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const property = event.target.id as keyof Form;
    const {value} = event.target;
    if (form[property] !== value.trim()) {
      setForm({
        ...form,
        [property]: value.trim()
      });
    }
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <form
      className='flex flex-col justify-center space-y-5'
      onSubmit={(event): void => handleSubmitForm(event)}
    >
      <div className='flex animate-fade-right flex-col text-start animate-duration-700'>
        <Transition
          show={form.name.length !== 0}
          as={Fragment}
        >
          <label
            className='font-semibold'
            htmlFor='name'
          >
            {label.name}
          </label>
        </Transition>
        <input
          className='border-b-2 pb-2 pt-1 outline-0'
          id='name'
          type='text'
          placeholder={label.name}
          value={form.name}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
        />
      </div>
      <div className='flex animate-fade-left flex-col text-start animate-duration-700'>
        <Transition
          show={form.email.length !== 0}
          as={Fragment}
        >
          <label
            className='font-semibold'
            htmlFor='email'
          >
            {label.email}
          </label>
        </Transition>
        <input
          className='border-b-2 pb-2 pt-1 outline-0'
          id='email'
          type='text'
          placeholder={label.email}
          value={form.email}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
        />
      </div>
      <div className='flex animate-fade-right flex-col text-start animate-duration-700'>
        <Transition
          show={form.message.length !== 0}
          as={Fragment}
        >
          <label
            className='font-semibold'
            htmlFor='message'
          >
            {label.message}
          </label>
        </Transition>
        <textarea
          className='min-h-[20vh] resize-none border-b-2 pb-2 pt-1 outline-0'
          id='message'
          placeholder={label.message}
          value={form.message}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
        />
      </div>
      <Transition
        className='bg-red-500 py-2 text-white'
        show={form.error.length !== 0}
      >
        {form.error}
      </Transition>
      <button
        className='animate-fade-left place-self-center bg-cyan-600 px-5 py-3 font-bold tracking-wider text-white duration-150 animate-duration-700 active:bg-cyan-700 disabled:bg-gray-300'
        type='submit'
        disabled={
          form.name.trim().length === 0 ||
          form.email.trim().length === 0 ||
          form.message.trim().length === 0 ||
          form.submitting
        }
      >
        {label.submit}
      </button>
    </form>
  );
};

export type {InputProps, Form};
export default Input;
