'use client';

import {type ChangeEvent, type FormEvent, useEffect, useRef} from 'react';
import {
  TError,
  TSubmit,
  TSubmitting
} from '@components/project/breezy/signup/form/transition';
import {ValidationError, object, string} from 'yup';
import {faEye, faEyeSlash, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {Form} from '@redux/reducers/project/breezy/signup';
import {RecaptchaV2} from '@components/project/breezy/shared';
import {breezySocket} from '@utils/socket';
import cookie from 'js-cookie';
import {sanitize} from 'isomorphic-dompurify';
import useApp from '@hooks/main/use-app';
import {useRouter} from 'next/navigation';
import useSignUp from '@hooks/project/breezy/use-signup';
import validator from 'validator';

type InputProps = {
  label: {
    username: string;
    displayName: string;
    password: string;
    submit: string;
  };
};

type SignUpReq = {
  username: string;
  displayName: string;
  password: string;
  honeypot: string;
  token: string;
};

type SignUpRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {
    token: string;
  };
};

const Input = ({label}: InputProps): JSX.Element => {
  const {online} = useApp();
  const router = useRouter();
  const throttleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const {form, setForm} = useSignUp();

  const handleUpdateForm = (event: ChangeEvent<HTMLInputElement>): void => {
    const fieldName = event.target.name as keyof Form;
    const {value} = event.target;
    if (form[fieldName] !== value) {
      setForm({
        ...form,
        [fieldName]: value,
        error: ''
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
        error: ''
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
        error: ''
      });
    }
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!form.submitting) {
      let errorMessage: string = '';
      if (!online) {
        errorMessage =
          'You are currently offline. Please check your internet connection and try again later.';
      }
      if (form.throttle) {
        if (throttleTimer.current) {
          clearTimeout(throttleTimer.current);
        }
        throttleTimer.current = setTimeout((): void => {
          setForm({
            ...form,
            throttle: false
          });
        }, 3000);
        errorMessage =
          'You are submitting too quickly. Please take a moment and try again.';
      }
      setForm({
        ...form,
        submitting: online && !form.throttle,
        error: errorMessage
      });
    }
  };

  useEffect((): void => {
    if (form.submitting) {
      const requestSchema = object().shape({
        username: string()
          .ensure()
          .required('Please enter your username.')
          .min(
            2,
            'Your username is too short. Please enter at least 2 characters.'
          )
          .max(
            15,
            'Your username is too long. Please enter a maximum of 15 characters.'
          )
          .matches(
            /^[a-zA-Z0-9_-]+$/,
            'Please enter a username containing only letters, numbers, hyphen, and underscore.'
          ),
        displayName: string()
          .ensure()
          .required('Please enter your display name.')
          .min(
            2,
            'Your display name is too short. Please enter at least 2 characters.'
          )
          .max(
            120,
            'Your display name is too long. Please enter a maximum of 120 characters.'
          ),
        password: string()
          .ensure()
          .required('Please enter your password.')
          .min(
            8,
            'Your password is too short. Please enter at least 8 characters.'
          )
          .max(
            64,
            'Your password is too long. Please enter a maximum of 64 characters.'
          ),
        honeypot: string()
          .ensure()
          .length(
            0,
            'Bot detection system triggered. Please ensure you are a human and not a bot.'
          ),
        token: string()
          .ensure()
          .required('Please complete the reCAPTCHA verification.')
      });
      const request: SignUpReq = {
        username: sanitize(form.username).trim(),
        displayName: sanitize(form.displayName).trim(),
        password: sanitize(form.password).trim(),
        honeypot: sanitize(form.honeypot).trim(),
        token: form.token
      };
      requestSchema
        .validate(request, {abortEarly: false})
        .then((): void => {
          if (!validator.isAlpha(request.displayName, 'en-US', {ignore: ' '})) {
            throw new ValidationError(
              'Please enter a valid display name using only letters.'
            );
          }
          breezySocket
            .timeout(60000)
            .emit(
              'signup',
              request,
              (error: Error, response: SignUpRes): void => {
                let errorMessage: string = '';
                if (error) {
                  errorMessage =
                    'Apologies, there was an unexpected error during the signup process. Please retry your signup later.';
                }
                if (response) {
                  if (!response.success) {
                    switch (response.error.code) {
                      default:
                        errorMessage =
                          'Oops! There was an error with your signup. Please review your information and try again.';
                        break;
                    }
                  } else {
                    cookie.set(
                      process.env.NODE_ENV === 'production'
                        ? '__Secure-BZ'
                        : 'BZ',
                      response.data.token,
                      {
                        path: '/project/breezy',
                        sameSite: 'strict',
                        secure: true,
                        expires: 30
                      }
                    );
                    router.push('/project/breezy');
                  }
                }
                setForm({
                  ...form,
                  submitting: false,
                  error: errorMessage
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
              'Oops! There was an error with your signup. Please review your information and try again.'
          });
        });
    }
  }, [form.submitting]);

  useEffect((): (() => void) => {
    if (form.throttle) {
      throttleTimer.current = setTimeout((): void => {
        setForm({
          ...form,
          throttle: false
        });
      }, 3000);
    }
    return (): void => {
      if (throttleTimer.current) {
        clearTimeout(throttleTimer.current);
      }
    };
  }, [
    form.throttle,
    form.error,
    form.username,
    form.displayName,
    form.password,
    form.honeypot,
    form.token
  ]);

  return (
    <form
      className='mx-4 flex flex-col space-y-3 py-6 md:py-5'
      onSubmit={(event): void => handleSubmitForm(event)}
    >
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
        className={`rounded-lg bg-purple-500 py-2 text-lg font-semibold tracking-wide text-white duration-150 disabled:bg-gray-300 md:text-sm ${
          form.submitting ? 'cursor-default' : 'active:bg-purple-600'
        }`}
        type='submit'
        disabled={
          form.username.trim().length === 0 ||
          form.displayName.trim().length === 0 ||
          form.password.trim().length === 0 ||
          form.token.trim().length === 0
        }
      >
        <TSubmit>
          <span>{label.submit}</span>
        </TSubmit>
        <TSubmitting>
          <FontAwesomeIcon
            className='animate-spin text-xl animate-infinite'
            icon={faSpinner}
          />
        </TSubmitting>
      </button>
      <TError>
        <div className='rounded-lg bg-red-500 p-2 text-center text-sm text-white md:text-xs'>
          {form.error}
        </div>
      </TError>
    </form>
  );
};

export type {InputProps};
export default Input;
