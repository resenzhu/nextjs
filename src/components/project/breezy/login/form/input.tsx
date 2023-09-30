'use client';

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  TError,
  TSubmit,
  TSubmitting
} from '@components/project/breezy/login/form/transition';
import {ValidationError, object, string} from 'yup';
import {faEye, faEyeSlash, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {Form} from '@redux/reducers/project/breezy/login';
import type Recaptcha from 'react-google-recaptcha';
import {RecaptchaV2} from '@components/project/breezy/shared';
import {breezySocket} from '@utils/socket';
import cookie from 'js-cookie';
import {sanitize} from 'isomorphic-dompurify';
import useApp from '@hooks/main/use-app';
import useLogin from '@hooks/project/breezy/use-login';
import {useRouter} from 'next/navigation';

type InputProps = {
  label: {
    username: string;
    password: string;
    submit: string;
  };
};

type LoginReq = {
  username: string;
  password: string;
  honeypot: string;
  token: string;
};

type LoginRes = {
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
  const recaptcha = useRef<Recaptcha>(null);
  const [rendered, setRendered] = useState<boolean>(false);
  const [throttle, setThrottle] = useState<boolean>(true);
  const {form, setForm} = useLogin();
  const {push} = useRouter();

  const handleUpdateForm = (event: ChangeEvent<HTMLInputElement>): void => {
    const fieldName = event.target.name as keyof Form;
    const {value} = event.target;
    if (form[fieldName] !== value) {
      setForm({
        ...form,
        [fieldName]: value,
        error: {
          field: null,
          message: ''
        }
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
        error: {
          field: null,
          message: ''
        }
      });
    }
  };

  const handleToggleRevealPassword = (reveal: boolean): void => {
    if (form.reveal !== reveal) {
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
        error: {
          field: null,
          message: ''
        }
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
      if (throttle) {
        errorMessage =
          'You are submitting too quickly. Please take a moment and try again.';
      }
      setForm({
        ...form,
        submitting: online && !throttle,
        error: {
          field: null,
          message: errorMessage
        }
      });
    }
  };

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered) {
      setTimeout((): void => {
        setThrottle(false);
      }, 5000);
    }
  }, [rendered]);

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
            /^[a-zA-Z0-9_-]+$/u,
            'Please enter a username containing only letters, numbers, hyphen, and underscore.'
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
      const request: LoginReq = {
        username: sanitize(form.username).trim(),
        password: sanitize(form.password).trim(),
        honeypot: sanitize(form.honeypot).trim(),
        token: form.token
      };
      requestSchema
        .validate(request, {abortEarly: false})
        .then((): void => {
          breezySocket
            .timeout(60000)
            .emit(
              'login',
              request,
              (error: Error, response: LoginRes): void => {
                let errorField: string = '';
                let errorMessage: string = '';
                if (error) {
                  errorMessage =
                    'Apologies, there was an unexpected error during the login process. Please retry your login later.';
                }
                if (response) {
                  if (response.success) {
                    cookie.set(
                      process.env.NODE_ENV === 'production'
                        ? '__Secure-BZ'
                        : 'BZ',
                      response.data.token,
                      {
                        path: '/project/breezy',
                        sameSite: 'strict',
                        secure: true,
                        expires: 7
                      }
                    );
                    push('/project/breezy');
                  } else {
                    switch (response.error.code) {
                      case 40001:
                      case 4220101:
                      case 4220102:
                        errorField = 'username';
                        errorMessage = 'Please enter your username.';
                        break;
                      case 4220103:
                        errorField = 'username';
                        errorMessage =
                          'Your username is too short. Please enter at least 2 characters.';
                        break;
                      case 4220104:
                        errorField = 'username';
                        errorMessage =
                          'Your username is too long. Please enter a maximum of 15 characters.';
                        break;
                      case 4220105:
                        errorField = 'username';
                        errorMessage =
                          'Please enter a username containing only letters, numbers, hyphen, and underscore.';
                        break;
                      case 40901:
                        errorField = 'username';
                        errorMessage =
                          'The username you entered is already taken. Please choose a different username.';
                        break;
                      case 40002:
                      case 4220201:
                      case 4220202:
                        errorField = 'password';
                        errorMessage = 'Please enter your password.';
                        break;
                      case 4220203:
                        errorField = 'password';
                        errorMessage =
                          'Your password is too short. Please enter at least 8 characters.';
                        break;
                      case 4220204:
                        errorField = 'password';
                        errorMessage =
                          'Your password is too long. Please enter a maximum of 64 characters.';
                        break;
                      case 40003:
                      case 4220301:
                      case 4220302:
                      case 40303:
                        errorMessage =
                          'Bot detection system triggered. Please ensure you are a human and not a bot.';
                        break;
                      case 40004:
                      case 4220401:
                      case 4220402:
                        errorMessage =
                          'Please complete the reCAPTCHA verification.';
                        break;
                      case 401:
                        errorMessage = 'Invalid username or password.';
                        break;
                      case 500:
                        errorMessage =
                          'Apologies, there was an unexpected error during the login process. Please retry your login later.';
                        break;
                      default:
                        errorMessage =
                          'Oops! There was an error with your login. Please review your information and try again.';
                        break;
                    }
                    setForm({
                      ...form,
                      token: '',
                      submitting: false,
                      error: {
                        field: errorField,
                        message: errorMessage
                      }
                    });
                    recaptcha.current?.reset();
                  }
                }
              }
            );
        })
        .catch((error: ValidationError): void => {
          setForm({
            ...form,
            submitting: false,
            error: {
              field: error.inner[0]?.path ?? error.path ?? '',
              message:
                error.inner[0]?.message ??
                error.message ??
                'Oops! There was an error with your login. Please review your information and try again.'
            }
          });
        });
    }
  }, [form.submitting]);

  return (
    <form
      className='mx-4 flex flex-col space-y-3 py-6 md:py-5'
      onSubmit={(event): void => handleSubmitForm(event)}
    >
      <input
        className={`rounded-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs ${
          form.error.field === 'username' && 'border-red-500'
        }`}
        name='username'
        type='text'
        placeholder={label.username}
        value={form.username}
        maxLength={15}
        onChange={(event): void => handleUpdateForm(event)}
        onBlur={(event): void => handleTrimForm(event)}
        disabled={form.submitting}
      />
      <div className='flex'>
        <input
          className={`flex-1 rounded-l-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs ${
            form.error.field === 'password' && 'border-red-500'
          }`}
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
          className='rounded-r-lg bg-purple-500 p-4 text-xl text-white md:p-3 md:text-sm'
          icon={form.reveal ? faEyeSlash : faEye}
          onClick={(): void => handleToggleRevealPassword(!form.reveal)}
        />
      </div>
      <RecaptchaV2
        reference={recaptcha}
        onChange={(token): void => handleUpdateToken(token)}
      />
      <button
        className={`rounded-lg bg-purple-500 py-2 text-lg font-semibold tracking-wide text-white duration-150 disabled:bg-gray-300 md:text-sm ${
          form.submitting ? 'cursor-default' : 'active:bg-purple-600'
        }`}
        type='submit'
        disabled={
          form.username.trim().length === 0 ||
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
          {form.error.message}
        </div>
      </TError>
    </form>
  );
};

export type {InputProps};
export default Input;
