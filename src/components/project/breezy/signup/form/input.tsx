'use client';

import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import type {ChangeEvent} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {Form} from '@redux/reducers/project/breezy/signup';
import {RecaptchaV2} from '@components/project/breezy/shared';
import {TError} from '@components/project/breezy/signup/form/transition';
import useSignUp from '@hooks/project/breezy/use-signup';

type InputProps = {
  label: {
    username: string;
    displayName: string;
    password: string;
    submit: string;
  };
};

const Input = ({label}: InputProps): JSX.Element => {
  const {form, setForm} = useSignUp();

  const handleUpdateForm = (event: ChangeEvent<HTMLInputElement>): void => {
    const fieldName = event.target.name as keyof Form;
    const {value} = event.target;
    if (form[fieldName] !== value) {
      setForm({
        ...form,
        [fieldName]: value,
        error: '',
        success: ''
      });
    }
  };

  const handleTrimForm = (event: ChangeEvent<HTMLInputElement>): void => {
    const fieldName = event.target.name as keyof Form;
    const {value} = event.target;
    if (form[fieldName] !== value.trim()) {
      setForm({
        ...form,
        [fieldName]: value.trim(),
        error: '',
        success: ''
      });
    }
  };

  const handleToggleRevealPassword = (reveal: boolean): void => {
    if (reveal !== form.reveal) {
      setForm({
        ...form,
        reveal: reveal
      });
    }
  };

  const handleUpdateToken = (token: string | null): void => {
    if (form.token !== token) {
      setForm({
        ...form,
        token: token ?? '',
        error: '',
        success: ''
      });
    }
  };

  return (
    <form className='mx-4 flex flex-col space-y-3 py-6 md:py-5'>
      <input
        className='rounded-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs'
        name='username'
        type='text'
        placeholder={label.username}
        value={form.username}
        maxLength={15}
        onChange={(event): void => handleUpdateForm(event)}
        onBlur={(event): void => handleTrimForm(event)}
        disabled={form.submitting}
      />
      <input
        className='rounded-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs'
        name='displayName'
        type='text'
        placeholder={label.displayName}
        value={form.displayName}
        maxLength={120}
        onChange={(event): void => handleUpdateForm(event)}
        onBlur={(event): void => handleTrimForm(event)}
        disabled={form.submitting}
      />
      <div className='flex'>
        <input
          className='flex-1 rounded-l-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs'
          name='password'
          type={form.reveal ? 'text' : 'password'}
          placeholder={label.password}
          value={form.password}
          maxLength={64}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
          disabled={form.submitting}
        />
        <FontAwesomeIcon
          className='cursor-pointer rounded-r-lg bg-purple-500 p-4 text-xl text-white md:p-3 md:text-sm'
          icon={form.reveal ? faEyeSlash : faEye}
          onClick={(): void => handleToggleRevealPassword(!form.reveal)}
        />
      </div>
      <RecaptchaV2 onChange={(token): void => handleUpdateToken(token)} />
      <button
        className='rounded-lg bg-purple-500 py-2 text-lg font-semibold tracking-wide text-white duration-150 hover:bg-purple-600 disabled:bg-gray-300 md:text-sm'
        type='submit'
        disabled={
          form.username.trim().length === 0 ||
          form.displayName.trim().length === 0 ||
          form.password.trim().length === 0 ||
          form.token.trim().length === 0
        }
      >
        {label.submit}
      </button>
      <TError>
        <div className='rounded-lg bg-red-500 py-2 text-center text-white md:text-xs'>
          {form.error}
        </div>
      </TError>
    </form>
  );
};

export type {InputProps};
export default Input;
