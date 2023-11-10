'use client';

import {type ChangeEvent, type FormEvent, useEffect, useState} from 'react';
import {
  TError,
  TLabelEmail,
  TLabelMessage,
  TLabelName,
  TSubmit,
  TSubmitting,
  TSuccess
} from '@components/main/contact/form/transition';
import {ValidationError, object, string} from 'yup';
import {Button} from '@components/main/shared';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {mainSocket} from '@utils/socket';
import {sanitize} from 'isomorphic-dompurify';
import useApp from '@hooks/main/use-app';
import useContact from '@hooks/main/use-contact';
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';
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

const Input = ({label}: InputProps): JSX.Element => {
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
        formError =
          'You are currently offline. Please check your internet connection and try again later.';
      }
      if (throttle) {
        formError =
          'You are submitting too quickly. Please take a moment and try again.';
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
            .required('Please enter your name.')
            .min(
              2,
              'Your name is too short. Please enter at least 2 characters.'
            )
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
            ),
          recaptcha: string()
            .ensure()
            .required(
              'Apologies, the reCAPTCHA verification is not ready yet. Please wait a moment and try again.'
            )
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
                'Please enter a valid name using only letters and spaces.',
                request.name,
                'name'
              );
            }
            if (!validator.isEmail(request.email)) {
              throw new ValidationError(
                'Please enter a valid email address.',
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
                    formError =
                      'Form submission failed due to a server error. We apologize for the inconvenience. Please try again later.';
                  }
                  if (response && !response.success) {
                    switch (response.error.code) {
                      case 40001:
                      case 4220101:
                      case 4220102:
                        formError = 'Please enter your name.';
                        break;
                      case 4220103:
                        formError =
                          'Your name is too short. Please enter at least 2 characters.';
                        break;
                      case 4220104:
                        formError =
                          'Your name is too long. Please enter a maximum of 120 characters.';
                        break;
                      case 4220105:
                        formError =
                          'Please enter a valid name using only letters and spaces.';
                        break;
                      case 40002:
                      case 4220201:
                      case 4220202:
                        formError = 'Please enter your email address.';
                        break;
                      case 4220203:
                        formError =
                          'Your email is too short. Please enter at least 3 characters.';
                        break;
                      case 4220204:
                        formError =
                          'Your email is too long. Please enter a maximum of 320 characters.';
                        break;
                      case 4220205:
                        formError = 'Please enter a valid email address.';
                        break;
                      case 40003:
                      case 4220301:
                      case 4220302:
                        formError = 'Please enter a message.';
                        break;
                      case 4220303:
                        formError =
                          'Your message is too short. Please enter at least 15 characters.';
                        break;
                      case 4220304:
                        formError =
                          'Your message is too long. Please enter a maximum of 2000 characters.';
                        break;
                      case 40004:
                      case 4220401:
                      case 4220402:
                      case 40304:
                        formError =
                          'Bot detection system triggered. Please ensure you are a human and not a bot.';
                        break;
                      case 40005:
                      case 4220501:
                      case 4220502:
                        formError =
                          'Apologies, the reCAPTCHA verification is not ready yet. Please wait a moment and try again.';
                        break;
                      case 429:
                        formError =
                          'Oops! You have exceeded the maximum number of contact form submissions for today. Please try again tomorrow.';
                        break;
                      case 500:
                        formError =
                          'Form submission failed due to a server error. We apologize for the inconvenience. Please try again later.';
                        break;
                      default:
                        formError =
                          'Oops! There was an error processing your form submission. Please review your information and try again.';
                        break;
                    }
                  }
                  setForm({
                    ...form,
                    recaptcha: '',
                    submitting: false,
                    error: formError,
                    success:
                      response && response.success
                        ? 'Thank you! Your form has been successfully submitted.'
                        : ''
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
                'Oops! There was an error processing your form submission. Please review your information and try again.'
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
      <TError>
        <div className='bg-red-500 p-2 text-white'>{form.error}</div>
      </TError>
      <TSuccess>
        <div className='bg-green-600 p-2 text-white'>{form.success}</div>
      </TSuccess>
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
        <TSubmit>
          <span>{label.submit}</span>
        </TSubmit>
        <TSubmitting>
          <FontAwesomeIcon
            className='animate-spin text-xl animate-infinite'
            icon={faSpinner}
          />
        </TSubmitting>
      </Button>
    </form>
  );
};

export type {InputProps, SubmitContactFormReq, SubmitContactFormRes};
export default Input;
