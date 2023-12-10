'use client';

import {type ChangeEvent, type FormEvent, useEffect, useState} from 'react';
import {
  TFormError,
  TFormSubmit,
  TFormSubmitting,
  TFormSuccess,
  TLabelEmail,
  TLabelMessage,
  TLabelName
} from '@components/main/contact/form/transition';
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

type Label = {
  name: string;
  email: string;
  message: string;
  submit: string;
};

type Message = {
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

type InputProps = {
  label: Label;
  message: Message;
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

const Input = ({label, message}: InputProps): JSX.Element => {
  const {online} = useApp();
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
        error: '',
        success: ''
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
        error: '',
        success: ''
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
        error: formError,
        success: ''
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
            .required(message.error.input.name.empty)
            .min(2, message.error.input.name.tooShort)
            .max(120, message.error.input.name.tooLong),
          email: string()
            .ensure()
            .required(message.error.input.email.empty)
            .min(3, message.error.input.email.tooShort)
            .max(320, message.error.input.email.tooLong),
          message: string()
            .ensure()
            .required(message.error.input.message.empty)
            .min(15, message.error.input.message.tooShort)
            .max(2000, message.error.input.message.tooLong),
          honeypot: string().ensure().length(0, message.error.input.honeypot),
          recaptcha: string().ensure().required(message.error.input.recaptcha)
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
                message.error.input.name.invalid,
                request.name,
                'name'
              );
            }
            if (!validator.isEmail(request.email)) {
              throw new ValidationError(
                message.error.input.email.invalid,
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
                    formError = message.error.server;
                  }
                  if (response && !response.success) {
                    switch (response.error.code) {
                      case 40001:
                      case 4220101:
                      case 4220102:
                        formError = message.error.input.name.empty;
                        break;
                      case 4220103:
                        formError = message.error.input.name.tooShort;
                        break;
                      case 4220104:
                        formError = message.error.input.name.tooLong;
                        break;
                      case 4220105:
                        formError = message.error.input.name.invalid;
                        break;
                      case 40002:
                      case 4220201:
                      case 4220202:
                        formError = message.error.input.email.empty;
                        break;
                      case 4220203:
                        formError = message.error.input.email.tooShort;
                        break;
                      case 4220204:
                        formError = message.error.input.email.tooLong;
                        break;
                      case 4220205:
                        formError = message.error.input.email.invalid;
                        break;
                      case 40003:
                      case 4220301:
                      case 4220302:
                        formError = message.error.input.message.empty;
                        break;
                      case 4220303:
                        formError = message.error.input.message.tooShort;
                        break;
                      case 4220304:
                        formError = message.error.input.message.tooLong;
                        break;
                      case 40004:
                      case 4220401:
                      case 4220402:
                      case 40304:
                        formError = message.error.input.honeypot;
                        break;
                      case 40005:
                      case 4220501:
                      case 4220502:
                        formError = message.error.input.recaptcha;
                        break;
                      case 429:
                        formError = message.error.limit;
                        break;
                      case 500:
                        formError = message.error.server;
                        break;
                      default:
                        formError = message.error.client;
                        break;
                    }
                  }
                  setForm({
                    ...form,
                    recaptcha: '',
                    submitting: false,
                    error: formError,
                    success: response && response.success ? message.success : ''
                  });
                }
              );
          })
          .catch((validationError: ValidationError): void => {
            setForm({
              ...form,
              recaptcha: request.recaptcha,
              submitting: false,
              error:
                validationError.inner[0]?.message ??
                validationError.message ??
                message.error.client
            });
          });
      });
    }
  }, [form.submitting]);

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
        <TLabelName>
          <label
            className='font-semibold'
            htmlFor='name'
          >
            {label.name}
          </label>
        </TLabelName>
        <input
          className='border-b-2 pb-2 pt-1 outline-0 disabled:border-b-0 disabled:bg-white'
          name='name'
          type='text'
          placeholder={label.name}
          value={form.name}
          maxLength={120}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
          disabled={form.submitting}
        />
      </div>
      <div className='flex animate-fade-left flex-col text-start animate-duration-700'>
        <TLabelEmail>
          <label
            className='font-semibold'
            htmlFor='email'
          >
            {label.email}
          </label>
        </TLabelEmail>
        <input
          className='border-b-2 pb-2 pt-1 outline-0 disabled:border-b-0 disabled:bg-white'
          name='email'
          type='text'
          placeholder={label.email}
          value={form.email}
          maxLength={320}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
          disabled={form.submitting}
        />
      </div>
      <div className='flex animate-fade-right flex-col text-start animate-duration-700'>
        <TLabelMessage>
          <label
            className='font-semibold'
            htmlFor='message'
          >
            {label.message}
          </label>
        </TLabelMessage>
        <textarea
          className='min-h-[20vh] resize-none border-b-2 pb-2 pt-1 outline-0 disabled:border-b-0 disabled:bg-white'
          name='message'
          placeholder={label.message}
          value={form.message}
          maxLength={2000}
          onChange={(event): void => handleUpdateForm(event)}
          onBlur={(event): void => handleTrimForm(event)}
          disabled={form.submitting}
        />
      </div>
      <div className='hidden'>
        <input
          className='w-full border-b-2 pb-2 pt-1 outline-0 disabled:border-b-0 disabled:bg-white'
          name='phone'
          type='text'
          placeholder='Phone'
          value={form.honeypot}
          onChange={(event): void => handleUpdateForm(event)}
          disabled={form.submitting}
        />
      </div>
      <TFormError>
        <div className='bg-red-500 p-2 text-white'>{form.error}</div>
      </TFormError>
      <TFormSuccess>
        <div className='bg-green-600 p-2 text-white'>{form.success}</div>
      </TFormSuccess>
      <Button
        className={`w-36 animate-fade-left place-self-center animate-duration-700 ${
          form.submitting ? 'cursor-default' : 'active:bg-cyan-700'
        }`}
        type='submit'
        disabled={
          form.name.trim().length === 0 ||
          form.email.trim().length === 0 ||
          form.message.trim().length === 0
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
      </Button>
    </form>
  );
};

export type {
  Label,
  Message,
  InputProps,
  SubmitContactFormReq,
  SubmitContactFormRes
};
export default Input;
