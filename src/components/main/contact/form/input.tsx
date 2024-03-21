'use client';

import {type ChangeEvent, type FormEvent, useEffect, useState} from 'react';
import {ValidationError, object, string} from 'yup';
import {Button} from '@components/main/shared';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {mainSocket} from '@utils/socket';
import {sanitize} from 'isomorphic-dompurify';
import useApp from '@hooks/app/use-app';
import useContact from '@hooks/main/use-contact';
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';

import validator from 'validator';

type InputProps = {
  placeholder: {
    name: string;
    email: string;
    message: string;
    honeypot: string;
  };
  label: {
    submit: string;
  };
  error: {
    offline: string;
    throttle: string;
    input: {
      name: {
        empty: string;
        tooShort: string;
        tooLong: string;
        invalid: string;
      };
      email: {
        empty: string;
        tooShort: string;
        tooLong: string;
        invalid: string;
      };
      message: {
        empty: string;
        tooShort: string;
        tooLong: string;
      };
      honeypot: string;
      recaptcha: string;
    };
    client: string;
    server: string;
    limit: string;
  };
  success: string;
};

type SubmitContactFormReq = {
  name: string;
  email: string;
  message: string;
  honeypot: string;
  recaptcha: string;
};

type SubmitContactFormRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {};
};

const Input = ({
  placeholder,
  label,
  error,
  success
}: InputProps): JSX.Element => {
  const {isOnline} = useApp();
  const {form, setForm} = useContact();
  const [rendered, setRendered] = useState<boolean>(false);
  const [throttle, setThrottle] = useState<boolean>(true);
  const {executeRecaptcha} = useGoogleReCaptcha();

  const handleUpdateForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const fieldName =
      event.target.name === 'phone'
        ? 'honeypot'
        : (event.target.name as keyof typeof form);
    const {value} = event.target;
    if (form[fieldName] !== value) {
      setForm({
        ...form,
        [fieldName]: value,
        isSuccess: false,
        error: ''
      });
    }
  };

  const handleTrimForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const fieldName =
      event.target.name === 'phone'
        ? 'honeypot'
        : (event.target.name as keyof typeof form);
    const {value} = event.target;
    if (form[fieldName] !== value.trim()) {
      setForm({
        ...form,
        [fieldName]: value.trim(),
        isSuccess: false,
        error: ''
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
        isSuccess: false,
        error: formError
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
    if (form.isSubmitting) {
      new Promise<string>(async (resolve): Promise<void> => {
        let newRecaptcha: string = '';
        if (executeRecaptcha && form.recaptcha.length === 0) {
          newRecaptcha = await executeRecaptcha();
        }
        resolve(newRecaptcha);
      }).then((newRecaptcha): void => {
        const requestSchema = object().shape({
          name: string()
            .ensure()
            .required(error.input.name.empty)
            .min(2, error.input.name.tooShort)
            .max(120, error.input.name.tooLong),
          email: string()
            .ensure()
            .required(error.input.email.empty)
            .min(3, error.input.email.tooShort)
            .max(320, error.input.email.tooLong),
          message: string()
            .ensure()
            .required(error.input.message.empty)
            .min(15, error.input.message.tooShort)
            .max(2000, error.input.message.tooLong),
          honeypot: string().ensure().length(0, error.input.honeypot),
          recaptcha: string().ensure().required(error.input.recaptcha)
        });
        const request: SubmitContactFormReq = {
          name: sanitize(form.name).trim(),
          email: sanitize(form.email).trim(),
          message: sanitize(form.message).trim(),
          honeypot: sanitize(form.honeypot).trim(),
          recaptcha: sanitize(
            form.recaptcha.length === 0 ? newRecaptcha : form.recaptcha
          ).trim()
        };
        requestSchema
          .validate(request, {abortEarly: false})
          .then((): void => {
            if (!validator.isAlpha(request.name, 'en-US', {ignore: ' '})) {
              throw new ValidationError(
                error.input.name.invalid,
                request.name,
                'name'
              );
            }
            if (!validator.isEmail(request.email)) {
              throw new ValidationError(
                error.input.email.invalid,
                request.email,
                'email'
              );
            }
            mainSocket
              .timeout(60000)
              .emit(
                'submit contact form',
                request,
                (socketError: Error, response: SubmitContactFormRes): void => {
                  let formError: string = '';
                  if (socketError) {
                    formError = error.server;
                  }
                  if (response && !response.success) {
                    switch (response.error.code) {
                      case 40001:
                      case 4220101:
                      case 4220102:
                        formError = error.input.name.empty;
                        break;
                      case 4220103:
                        formError = error.input.name.tooShort;
                        break;
                      case 4220104:
                        formError = error.input.name.tooLong;
                        break;
                      case 4220105:
                        formError = error.input.name.invalid;
                        break;
                      case 40002:
                      case 4220201:
                      case 4220202:
                        formError = error.input.email.empty;
                        break;
                      case 4220203:
                        formError = error.input.email.tooShort;
                        break;
                      case 4220204:
                        formError = error.input.email.tooLong;
                        break;
                      case 4220205:
                        formError = error.input.email.invalid;
                        break;
                      case 40003:
                      case 4220301:
                      case 4220302:
                        formError = error.input.message.empty;
                        break;
                      case 4220303:
                        formError = error.input.message.tooShort;
                        break;
                      case 4220304:
                        formError = error.input.message.tooLong;
                        break;
                      case 40004:
                      case 4220401:
                      case 4220402:
                      case 40304:
                        formError = error.input.honeypot;
                        break;
                      case 40005:
                      case 4220501:
                      case 4220502:
                        formError = error.input.recaptcha;
                        break;
                      case 429:
                        formError = error.limit;
                        break;
                      case 500:
                      case 503:
                        formError = error.server;
                        break;
                      default:
                        formError = error.client;
                        break;
                    }
                  }
                  setForm({
                    ...form,
                    recaptcha: '',
                    isSubmitting: false,
                    isSuccess: response && response.success,
                    error: formError
                  });
                }
              );
          })
          .catch((validationError: ValidationError): void => {
            setForm({
              ...form,
              recaptcha: request.recaptcha,
              isSubmitting: false,
              error:
                validationError.inner[0]?.message ??
                validationError.message ??
                error.client
            });
          });
      });
    }
  }, [form.isSubmitting]);

  useEffect((): (() => void) => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (form.recaptcha.length !== 0) {
      timer = setTimeout((): void => {
        setForm({
          ...form,
          recaptcha: ''
        });
      }, 90000);
    }
    return (): void => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [form.recaptcha]);

  return (
    <form
      className='flex flex-col justify-center space-y-5'
      onSubmit={(event): void => handleSubmitForm(event)}
    >
      <div className='flex animate-fade-right flex-col text-start animate-duration-700'>
        {form.name.length !== 0 && (
          <label
            className='font-semibold'
            htmlFor='name'
          >
            {placeholder.name}
          </label>
        )}
        <input
          className='border-b-2 pb-2 pt-1 outline-0 disabled:border-b-0 disabled:bg-white'
          name='name'
          type='text'
          placeholder={placeholder.name}
          value={form.name}
          maxLength={120}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
          disabled={form.isSubmitting}
        />
      </div>
      <div className='flex animate-fade-left flex-col text-start animate-duration-700'>
        {form.email.length !== 0 && (
          <label
            className='font-semibold'
            htmlFor='email'
          >
            {placeholder.email}
          </label>
        )}
        <input
          className='border-b-2 pb-2 pt-1 outline-0 disabled:border-b-0 disabled:bg-white'
          name='email'
          type='text'
          placeholder={placeholder.email}
          value={form.email}
          maxLength={320}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
          disabled={form.isSubmitting}
        />
      </div>
      <div className='flex animate-fade-right flex-col text-start animate-duration-700'>
        {form.message.length !== 0 && (
          <label
            className='font-semibold'
            htmlFor='message'
          >
            {placeholder.message}
          </label>
        )}
        <textarea
          className='min-h-[20vh] resize-none border-b-2 pb-2 pt-1 outline-0 disabled:border-b-0 disabled:bg-white'
          name='message'
          placeholder={placeholder.message}
          value={form.message}
          maxLength={2000}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
          disabled={form.isSubmitting}
        />
      </div>
      <div className='hidden'>
        <input
          className='w-full border-b-2 pb-2 pt-1 outline-0 disabled:border-b-0 disabled:bg-white'
          name='phone'
          type='text'
          placeholder={placeholder.honeypot}
          value={form.honeypot}
          onChange={(event): void => handleUpdateForm(event)}
          disabled={form.isSubmitting}
        />
      </div>
      {!form.isSuccess && form.error.length !== 0 && (
        <div className='bg-red-500 p-2 text-white'>{form.error}</div>
      )}
      {form.isSuccess && (
        <div className='bg-green-600 p-2 text-white'>{success}</div>
      )}
      <Button
        className={`w-36 animate-fade-left place-self-center animate-duration-700 ${
          form.isSubmitting ? 'cursor-default' : 'active:bg-cyan-700'
        }`}
        type='submit'
        disabled={
          form.name.trim().length === 0 ||
          form.email.trim().length === 0 ||
          form.message.trim().length === 0
        }
      >
        {!form.isSubmitting && <span>{label.submit}</span>}
        {form.isSubmitting && (
          <FontAwesomeIcon
            className='animate-spin text-xl animate-infinite'
            icon={faSpinner}
          />
        )}
      </Button>
    </form>
  );
};

export type {InputProps, SubmitContactFormReq, SubmitContactFormRes};
export default Input;
