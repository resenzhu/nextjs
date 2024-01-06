'use client';

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  TFormError,
  TFormSubmit,
  TFormSubmitting
} from '@components/project/breezy/signup/form/transition';
import {ValidationError, object, string} from 'yup';
import {faEye, faEyeSlash, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type Recaptcha from 'react-google-recaptcha';
import {RecaptchaV2} from '@components/project/breezy/shared';
import {breezySocket} from '@utils/socket';
import cookie from 'js-cookie';
import {initialState} from '@redux/reducers/project/breezy/signup';
import {sanitize} from 'isomorphic-dompurify';
import useApp from '@hooks/app/use-app';
import {useRouter} from 'next/navigation';
import useSignUp from '@hooks/project/breezy/use-signup';
import validator from 'validator';

type Label = {
  username: string;
  displayName: string;
  password: string;
  submit: string;
};

type Message = {
  error: {
    offline: string;
    throttle: string;
    input: {
      username: {
        empty: string;
        tooShort: string;
        tooLong: string;
        invalid: string;
        taken: string;
      };
      displayName: {
        empty: string;
        tooShort: string;
        tooLong: string;
        invalid: string;
      };
      password: {
        empty: string;
        tooShort: string;
        tooLong: string;
      };
      honeypot: string;
      recaptcha: string;
    };
    client: string;
    server: string;
  };
};

type InputProps = {
  label: Label;
  message: Message;
};

type SignUpReq = {
  username: string;
  displayName: string;
  password: string;
  honeypot: string;
  recaptcha: string;
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

const Input = ({label, message}: InputProps): JSX.Element => {
  const {online} = useApp();
  const recaptcha = useRef<Recaptcha>(null);
  const {form, setForm} = useSignUp();
  const [rendered, setRendered] = useState<boolean>(false);
  const [throttle, setThrottle] = useState<boolean>(true);
  const {push} = useRouter();

  const handleUpdateForm = (event: ChangeEvent<HTMLInputElement>): void => {
    const fieldName = event.target.name as keyof typeof form;
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
    const fieldName = event.target.name as keyof typeof form;
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

  const handleUpdateRecaptcha = (captchaToken: string | null): void => {
    if (form.recaptcha !== captchaToken) {
      setForm({
        ...form,
        recaptcha: captchaToken ?? '',
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
      let formError: string = '';
      if (!online) {
        formError = message.error.offline;
      }
      if (throttle) {
        formError = message.error.throttle;
      }
      setForm({
        ...form,
        submitting: online && !throttle,
        error: {
          field: null,
          message: formError
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
      setForm(initialState.form);
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
          .required(message.error.input.username.empty)
          .min(2, message.error.input.username.tooShort)
          .max(15, message.error.input.username.tooLong)
          .matches(/^[a-zA-Z0-9_-]+$/u, message.error.input.username.invalid),
        displayName: string()
          .ensure()
          .required(message.error.input.displayName.empty)
          .min(2, message.error.input.displayName.tooShort)
          .max(25, message.error.input.displayName.tooLong),
        password: string()
          .ensure()
          .required(message.error.input.password.empty)
          .min(8, message.error.input.password.tooShort)
          .max(64, message.error.input.password.tooLong),
        honeypot: string().ensure().length(0, message.error.input.honeypot),
        recaptcha: string().ensure().required(message.error.input.recaptcha)
      });
      const request: SignUpReq = {
        username: sanitize(form.username).trim().toLowerCase(),
        displayName: sanitize(form.displayName).trim(),
        password: form.password,
        honeypot: sanitize(form.honeypot).trim(),
        recaptcha: sanitize(form.recaptcha).trim()
      };
      requestSchema
        .validate(request, {abortEarly: false})
        .then((): void => {
          if (!validator.isAlpha(request.displayName, 'en-US', {ignore: ' '})) {
            throw new ValidationError(
              message.error.input.displayName.invalid,
              request.displayName,
              'displayName'
            );
          }
          breezySocket
            .timeout(60000)
            .emit(
              'signup',
              request,
              (socketError: Error, response: SignUpRes): void => {
                let formErrorField: string = '';
                let formErrorMessage: string = '';
                if (socketError) {
                  formErrorMessage = message.error.server;
                }
                if (response) {
                  if (response.success) {
                    setForm(initialState.form);
                    cookie.set(
                      process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY,
                      response.data.token,
                      {
                        sameSite: 'strict',
                        secure: true,
                        expires: 2
                      }
                    );
                    push('/project/breezy');
                  } else {
                    switch (response.error.code) {
                      case 40001:
                      case 4220101:
                      case 4220102:
                        formErrorField = 'username';
                        formErrorMessage = message.error.input.username.empty;
                        break;
                      case 4220103:
                        formErrorField = 'username';
                        formErrorMessage =
                          message.error.input.username.tooShort;
                        break;
                      case 4220104:
                        formErrorField = 'username';
                        formErrorMessage = message.error.input.username.tooLong;
                        break;
                      case 4220105:
                        formErrorField = 'username';
                        formErrorMessage = message.error.input.username.invalid;
                        break;
                      case 40901:
                        formErrorField = 'username';
                        formErrorMessage = message.error.input.username.taken;
                        break;
                      case 40002:
                      case 4220201:
                      case 4220202:
                        formErrorField = 'displayName';
                        formErrorMessage =
                          message.error.input.displayName.empty;
                        break;
                      case 4220203:
                        formErrorField = 'displayName';
                        formErrorMessage =
                          message.error.input.displayName.tooShort;
                        break;
                      case 4220204:
                        formErrorField = 'displayName';
                        formErrorMessage =
                          message.error.input.displayName.tooLong;
                        break;
                      case 4220205:
                        formErrorField = 'displayName';
                        formErrorMessage =
                          message.error.input.displayName.invalid;
                        break;
                      case 40003:
                      case 4220301:
                      case 4220302:
                        formErrorField = 'password';
                        formErrorMessage = message.error.input.password.empty;
                        break;
                      case 4220303:
                        formErrorField = 'password';
                        formErrorMessage =
                          message.error.input.password.tooShort;
                        break;
                      case 4220304:
                        formErrorField = 'password';
                        formErrorMessage = message.error.input.password.tooLong;
                        break;
                      case 40004:
                      case 4220401:
                      case 4220402:
                      case 40304:
                        formErrorMessage = message.error.input.honeypot;
                        break;
                      case 40005:
                      case 4220501:
                      case 4220502:
                        formErrorMessage = message.error.input.recaptcha;
                        break;
                      case 500:
                      case 503:
                        formErrorMessage = message.error.server;
                        break;
                      default:
                        formErrorMessage = message.error.client;
                        break;
                    }
                    setForm({
                      ...form,
                      recaptcha: '',
                      submitting: false,
                      error: {
                        field: formErrorField,
                        message: formErrorMessage
                      }
                    });
                    recaptcha.current?.reset();
                  }
                }
              }
            );
        })
        .catch((validationError: ValidationError): void => {
          setForm({
            ...form,
            submitting: false,
            error: {
              field:
                validationError.inner[0]?.path ?? validationError.path ?? '',
              message:
                validationError.inner[0]?.message ??
                validationError.message ??
                message.error.client
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
      <input
        className={`rounded-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs ${
          form.error.field === 'displayName' && 'border-red-500'
        }`}
        name='displayName'
        type='text'
        placeholder={label.displayName}
        value={form.displayName}
        maxLength={25}
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
          className='cursor-pointer rounded-r-lg bg-purple-500 p-4 text-xl text-white md:p-3 md:text-sm'
          icon={form.reveal ? faEyeSlash : faEye}
          onClick={(): void => handleToggleRevealPassword(!form.reveal)}
        />
      </div>
      <div className='place-self-center'>
        <RecaptchaV2
          reference={recaptcha}
          onChange={(captcha): void => handleUpdateRecaptcha(captcha)}
        />
      </div>
      <button
        className={`rounded-lg bg-purple-500 py-2 text-lg font-semibold tracking-wide text-white duration-150 disabled:bg-gray-300 md:text-sm ${
          form.submitting ? 'cursor-default' : 'active:bg-purple-600'
        }`}
        type='submit'
        disabled={
          form.username.trim().length === 0 ||
          form.displayName.trim().length === 0 ||
          form.password.trim().length === 0 ||
          form.recaptcha.trim().length === 0
        }
      >
        <TFormSubmit>
          <span>{label.submit}</span>
        </TFormSubmit>
        <TFormSubmitting>
          <FontAwesomeIcon
            className='animate-spin text-xl animate-infinite'
            icon={faSpinner}
          />
        </TFormSubmitting>
      </button>
      <TFormError>
        <div className='rounded-lg bg-red-500 p-2 text-center text-sm text-white md:text-xs'>
          {form.error.message}
        </div>
      </TFormError>
    </form>
  );
};

export type {Label, Message, InputProps, SignUpReq, SignUpRes};
export default Input;
