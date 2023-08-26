'use client';

import {type ChangeEvent, type FormEvent, Fragment, useEffect} from 'react';
import {ValidationError, object, string} from 'yup';
import type {Form} from '@redux/reducers/main/contact';
import {Transition} from '@headlessui/react';
import {mainSocket} from '@utils/socket';
import {sanitize} from 'isomorphic-dompurify';
import useApp from '@hooks/main/use-app';
import useContact from '@hooks/main/use-contact';
import validator from 'validator';

type InputProps = {
  label: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
};

type SubmitContactFormReq = {
  name: string;
  email: string;
  message: string;
  honeypot: string;
};

type SubmitContactFormRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {};
};

const Input = ({label}: InputProps): JSX.Element => {
  const {online} = useApp();
  const {form, setForm} = useContact();

  const handleUpdateForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const property =
      event.target.id === 'phone'
        ? 'honeypot'
        : (event.target.id as keyof Form);
    const {value} = event.target;
    if (form[property] !== value) {
      setForm({
        ...form,
        [property]: value,
        error: '',
        success: ''
      });
    }
  };

  const handleTrimForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const property =
      event.target.id === 'phone'
        ? 'honeypot'
        : (event.target.id as keyof Form);
    const {value} = event.target;
    if (form[property] !== value.trim()) {
      setForm({
        ...form,
        [property]: value.trim(),
        error: '',
        success: ''
      });
    }
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!form.submitting) {
      if (online) {
        setForm({
          ...form,
          submitting: true
        });
      } else {
        setForm({
          ...form,
          error:
            'You are currently offline. Please check your internet connection and try again later.'
        });
      }
    }
  };

  useEffect((): void => {
    if (form.submitting) {
      const requestSchema = object().shape({
        name: string()
          .ensure()
          .required('Please enter your name.')
          .min(2, 'Your name is too short. Please enter at least 2 characters.')
          .max(
            120,
            'Your name is too long. Please enter a maximum of 120 characters.'
          ),
        email: string()
          .ensure()
          .required('Please enter your email address.')
          .min(
            3,
            'Your email is too short. Please enter at least 3 characters.'
          )
          .max(
            320,
            'Your email is too long. Please enter a maximum of 320 characters.'
          ),
        message: string()
          .ensure()
          .required('Please enter a message.')
          .min(
            15,
            'Your message is too short. Please enter at least 15 characters.'
          )
          .max(
            2000,
            'Your message is too long. Please enter a maximum of 2000 characters.'
          ),
        honeypot: string()
          .ensure()
          .length(
            0,
            'Bot detection system triggered. Please ensure you are a human and not a bot.'
          )
      });
      const request: SubmitContactFormReq = {
        name: sanitize(form.name).trim(),
        email: sanitize(form.email).trim(),
        message: sanitize(form.message).trim(),
        honeypot: sanitize(form.honeypot).trim()
      };
      requestSchema
        .validate(request, {abortEarly: false})
        .then((): void => {
          if (!validator.isAlpha(request.name, 'en-US', {ignore: ' '})) {
            throw new ValidationError(
              'Please enter a valid name using only letters.'
            );
          }
          if (!validator.isEmail(request.email)) {
            throw new ValidationError('Please enter a valid email address.');
          }
          mainSocket
            .timeout(60000)
            .emit(
              'submit-contact-form',
              request,
              (error: Error, response: SubmitContactFormRes): void => {
                let errorMessage: string = '';
                if (error) {
                  errorMessage =
                    'Form submission failed due to a server error. We apologize for the inconvenience. Please try again later.';
                }
                if (response && !response.success) {
                  switch (response.error.code) {
                    case 40001:
                    case 4220101:
                    case 4220102:
                      errorMessage = 'Please enter your name.';
                      break;
                    case 4220103:
                      errorMessage =
                        'Your name is too short. Please enter at least 2 characters.';
                      break;
                    case 4220104:
                      errorMessage =
                        'Your name is too long. Please enter a maximum of 120 characters.';
                      break;
                    case 4220105:
                      errorMessage =
                        'Please enter a valid name using only letters.';
                      break;
                    case 40002:
                    case 4220201:
                    case 4220202:
                      errorMessage = 'Please enter your email address.';
                      break;
                    case 4220203:
                      errorMessage =
                        'Your email is too short. Please enter at least 3 characters.';
                      break;
                    case 4220204:
                      errorMessage =
                        'Your email is too long. Please enter a maximum of 320 characters.';
                      break;
                    case 4220205:
                      errorMessage = 'Please enter a valid email address.';
                      break;
                    case 40003:
                    case 4220301:
                    case 4220302:
                      errorMessage = 'Please enter a message.';
                      break;
                    case 4220303:
                      errorMessage =
                        'Your message is too short. Please enter at least 15 characters.';
                      break;
                    case 4220304:
                      errorMessage =
                        'Your message is too long. Please enter a maximum of 2000 characters.';
                      break;
                    case 40004:
                    case 4220401:
                    case 4220402:
                      errorMessage =
                        'Bot detection system triggered. Please ensure you are a human and not a bot.';
                      break;
                    default:
                      errorMessage =
                        'Oops! There was an error processing your form submission. Please review your information and try again.';
                      break;
                  }
                }
                setForm({
                  ...form,
                  submitting: false,
                  error: errorMessage,
                  success:
                    response && response.success
                      ? 'Thank you! Your form has been successfully submitted.'
                      : ''
                });
              }
            );
        })
        .catch((error: ValidationError): void => {
          setForm({
            ...form,
            submitting: false,
            error:
              error.errors[0] ??
              'Oops! There was an error processing your form submission. Please review your information and try again.'
          });
        });
    }
  }, [form.submitting]);

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
          maxLength={120}
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
          maxLength={320}
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
          maxLength={2000}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
        />
      </div>
      <div className='hidden'>
        <input
          className='w-full border-b-2 pb-2 pt-1 outline-0'
          id='phone'
          type='text'
          placeholder='Phone'
          value={form.honeypot}
          onChange={(event): void => handleUpdateForm(event)}
        />
      </div>
      <Transition
        className='bg-red-500 p-2 text-white'
        show={form.error.length !== 0}
      >
        {form.error}
      </Transition>
      <Transition
        className='bg-green-600 p-2 text-white'
        show={form.success.length !== 0}
      >
        {form.success}
      </Transition>
      <button
        className='w-36 animate-fade-left place-self-center bg-cyan-600 py-3 font-bold tracking-wider text-white duration-150 animate-duration-700 active:bg-cyan-700 disabled:bg-gray-300'
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
