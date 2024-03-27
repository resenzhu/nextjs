'use client';

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState
} from 'react';
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
import {useRouter} from '@navigation';
import useSignUp from '@hooks/project/breezy/use-signup';
import validator from 'validator';

type InputProps = {
  placeholder: {
    userName: string;
    displayName: string;
    password: string;
  };
  label: {
    submit: string;
  };
  error: {
    offline: string;
    throttle: string;
    input: {
      userName: {
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

type SignUpReq = {
  userName: string;
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

const Input = ({placeholder, label, error}: InputProps): JSX.Element => {
  const {isOnline} = useApp();
  const recaptcha = useRef<Recaptcha>(null);
  const {form, setForm} = useSignUp();
  const [rendered, setRendered] = useState<boolean>(false);
  const [throttle, setThrottle] = useState<boolean>(true);
  const {push} = useRouter();

  const handleUpdateInput = (event: ChangeEvent<HTMLInputElement>): void => {
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

  const handleTrimInput = (event: ChangeEvent<HTMLInputElement>): void => {
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

  const handleToggleRevealPassword = (visible: boolean): void => {
    if (form.isPasswordVisible !== visible) {
      setForm({
        ...form,
        isPasswordVisible: visible
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
    if (!form.isSubmitting) {
      let formError: string = '';
      if (!isOnline) {
        formError = error.offline;
      }
      if (throttle) {
        formError = error.throttle;
      }
      setForm({
        ...form,
        isSubmitting: isOnline && !throttle,
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
    if (form.isSubmitting) {
      const requestSchema = object().shape({
        userName: string()
          .ensure()
          .required(error.input.userName.empty)
          .min(2, error.input.userName.tooShort)
          .max(15, error.input.userName.tooLong)
          .matches(/^[a-zA-Z0-9_-]+$/u, error.input.userName.invalid),
        displayName: string()
          .ensure()
          .required(error.input.displayName.empty)
          .min(2, error.input.displayName.tooShort)
          .max(25, error.input.displayName.tooLong),
        password: string()
          .ensure()
          .required(error.input.password.empty)
          .min(8, error.input.password.tooShort)
          .max(64, error.input.password.tooLong),
        honeypot: string().ensure().length(0, error.input.honeypot),
        recaptcha: string().ensure().required(error.input.recaptcha)
      });
      const request: SignUpReq = {
        userName: sanitize(form.userName).trim().toLowerCase(),
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
              error.input.displayName.invalid,
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
                  formErrorMessage = error.server;
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
                        formErrorField = 'userName';
                        formErrorMessage = error.input.userName.empty;
                        break;
                      case 4220103:
                        formErrorField = 'userName';
                        formErrorMessage = error.input.userName.tooShort;
                        break;
                      case 4220104:
                        formErrorField = 'userName';
                        formErrorMessage = error.input.userName.tooLong;
                        break;
                      case 4220105:
                        formErrorField = 'userName';
                        formErrorMessage = error.input.userName.invalid;
                        break;
                      case 40901:
                        formErrorField = 'userName';
                        formErrorMessage = error.input.userName.taken;
                        break;
                      case 40002:
                      case 4220201:
                      case 4220202:
                        formErrorField = 'displayName';
                        formErrorMessage = error.input.displayName.empty;
                        break;
                      case 4220203:
                        formErrorField = 'displayName';
                        formErrorMessage = error.input.displayName.tooShort;
                        break;
                      case 4220204:
                        formErrorField = 'displayName';
                        formErrorMessage = error.input.displayName.tooLong;
                        break;
                      case 4220205:
                        formErrorField = 'displayName';
                        formErrorMessage = error.input.displayName.invalid;
                        break;
                      case 40003:
                      case 4220301:
                      case 4220302:
                        formErrorField = 'password';
                        formErrorMessage = error.input.password.empty;
                        break;
                      case 4220303:
                        formErrorField = 'password';
                        formErrorMessage = error.input.password.tooShort;
                        break;
                      case 4220304:
                        formErrorField = 'password';
                        formErrorMessage = error.input.password.tooLong;
                        break;
                      case 40004:
                      case 4220401:
                      case 4220402:
                      case 40304:
                        formErrorMessage = error.input.honeypot;
                        break;
                      case 40005:
                      case 4220501:
                      case 4220502:
                        formErrorMessage = error.input.recaptcha;
                        break;
                      case 500:
                      case 503:
                        formErrorMessage = error.server;
                        break;
                      default:
                        formErrorMessage = error.client;
                        break;
                    }
                    setForm({
                      ...form,
                      recaptcha: '',
                      isSubmitting: false,
                      error: {
                        field: formErrorField as typeof form.error.field,
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
            isSubmitting: false,
            error: {
              field: (validationError.inner[0]?.path ??
                validationError.path) as typeof form.error.field,
              message:
                validationError.inner[0]?.message ??
                validationError.message ??
                error.client
            }
          });
        });
    }
  }, [form.isSubmitting]);

  return (
    <form
      className='mx-4 flex flex-col space-y-3 py-6 md:py-5'
      onSubmit={(event): void => handleSubmitForm(event)}
    >
      <input
        className={`rounded-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs ${
          form.error.field === 'userName' && 'border-red-500'
        }`}
        name='userName'
        type='text'
        placeholder={placeholder.userName}
        value={form.userName}
        maxLength={15}
        onChange={(event): void => handleUpdateInput(event)}
        onBlur={(event): void => handleTrimInput(event)}
        disabled={form.isSubmitting}
      />
      <input
        className={`rounded-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs ${
          form.error.field === 'displayName' && 'border-red-500'
        }`}
        name='displayName'
        type='text'
        placeholder={placeholder.displayName}
        value={form.displayName}
        maxLength={25}
        onChange={(event): void => handleUpdateInput(event)}
        onBlur={(event): void => handleTrimInput(event)}
        disabled={form.isSubmitting}
      />
      <div className='flex'>
        <input
          className={`flex-1 rounded-l-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs ${
            form.error.field === 'password' && 'border-red-500'
          }`}
          name='password'
          type={form.isPasswordVisible ? 'text' : 'password'}
          placeholder={placeholder.password}
          value={form.password}
          maxLength={64}
          onChange={(event): void => handleUpdateInput(event)}
          onBlur={(event): void => handleTrimInput(event)}
          disabled={form.isSubmitting}
        />
        <FontAwesomeIcon
          className='cursor-pointer rounded-r-lg bg-purple-500 p-4 text-xl text-white md:p-3 md:text-sm'
          icon={form.isPasswordVisible ? faEyeSlash : faEye}
          onClick={(): void =>
            handleToggleRevealPassword(!form.isPasswordVisible)
          }
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
          form.isSubmitting ? 'cursor-default' : 'active:bg-purple-600'
        }`}
        type='submit'
        disabled={
          form.userName.trim().length === 0 ||
          form.displayName.trim().length === 0 ||
          form.password.trim().length === 0 ||
          form.recaptcha.trim().length === 0
        }
      >
        {!form.isSubmitting && <span>{label.submit}</span>}
        {form.isSubmitting && (
          <FontAwesomeIcon
            className='animate-spin text-xl animate-infinite'
            icon={faSpinner}
          />
        )}
      </button>
      {form.error.message.length !== 0 && (
        <div className='rounded-lg bg-red-500 p-2 text-center text-sm text-white md:text-xs'>
          {form.error.message}
        </div>
      )}
    </form>
  );
};

export type {InputProps, SignUpReq, SignUpRes};
export default Input;
