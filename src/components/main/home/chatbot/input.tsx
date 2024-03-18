'use client';

import {type ChangeEvent, type FormEvent, useEffect} from 'react';
import {ValidationError, object, string} from 'yup';
import {Button} from '@components/main/shared';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {mainSocket} from '@utils/socket';
import {sanitize} from 'isomorphic-dompurify';
import useApp from '@hooks/app/use-app';
import useHome from '@hooks/main/use-home';
import {useTranslations} from 'next-intl';

type AskChatbotReq = {
  input: string;
};

type AskChatbotRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {
    reply: string;
  };
};

const Input = (): JSX.Element => {
  const {isOnline} = useApp();
  const translate = useTranslations('main');
  const {chatbot, setChatbot} = useHome();

  const handleUpdateInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    if (chatbot.input !== value) {
      setChatbot({
        ...chatbot,
        input: value
      });
    }
  };

  const handleTrimInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    if (chatbot.input !== value.trim()) {
      setChatbot({
        ...chatbot,
        input: value.trim()
      });
    }
  };

  const handleSendInput = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      isOnline &&
      chatbot.input.trim().length > 0 &&
      chatbot.input.length <= 160 &&
      !chatbot.isSending
    ) {
      setChatbot({
        ...chatbot,
        isSending: true,
        chats: [
          ...chatbot.chats,
          {
            sender: 'user',
            message: sanitize(chatbot.input).trim()
          }
        ]
      });
    }
  };

  useEffect(() => {
    if (chatbot.isSending) {
      const requestSchema = object().shape({
        input: string()
          .ensure()
          .required(translate('home.chatbot.error.empty'))
          .min(1, translate('home.chatbot.error.tooShort'))
          .max(160, translate('home.chatbot.error.tooLong'))
      });
      const request: AskChatbotReq = {
        input: sanitize(chatbot.input).trim()
      };
      requestSchema
        .validate(request)
        .then((): void => {
          setChatbot({
            ...chatbot,
            input: ''
          });
          mainSocket
            .timeout(60000)
            .emit(
              'ask chatbot',
              request,
              (socketError: Error, response: AskChatbotRes): void => {
                let chatError: string = '';
                if (socketError) {
                  chatError = translate('home.chatbot.error.server');
                }
                if (response && !response.success) {
                  switch (response.error.code) {
                    case 40001:
                    case 4220101:
                    case 4220102:
                      chatError = translate('home.chatbot.error.empty');
                      break;
                    case 4220103:
                      chatError = translate('home.chatbot.error.tooShort');
                      break;
                    case 4220104:
                      chatError = translate('home.chatbot.error.tooLong');
                      break;
                    default:
                      chatError = translate('home.chatbot.error.client');
                      break;
                  }
                }
                setChatbot({
                  ...chatbot,
                  input: '',
                  isSending: false,
                  chats: [
                    ...chatbot.chats,
                    {
                      sender: 'bot',
                      message:
                        response && response.success
                          ? response.data.reply
                          : chatError
                    }
                  ]
                });
              }
            );
        })
        .catch((validationError: ValidationError): void => {
          setChatbot({
            ...chatbot,
            input: '',
            isSending: false,
            chats: [
              ...chatbot.chats,
              {
                sender: 'bot',
                message:
                  validationError.inner[0]?.message ??
                  validationError.message ??
                  translate('home.chatbot.error.client')
              }
            ]
          });
        });
    }
  }, [chatbot.isSending]);

  return (
    <form
      className='mx-4 flex items-center justify-between space-x-3 py-3 md:py-2'
      onSubmit={handleSendInput}
    >
      <input
        className='w-full flex-1 bg-gray-100 px-3 py-2 outline-0 md:text-sm'
        type='text'
        placeholder={translate('home.chatbot.input.placeholder')}
        value={chatbot.input}
        maxLength={160}
        onChange={(event): void => handleUpdateInput(event)}
        onBlur={handleTrimInput}
      />
      <Button
        className='h-9 w-9 rounded-full py-0 hover:bg-cyan-700'
        type='submit'
        disabled={
          !isOnline ||
          chatbot.input.trim().length === 0 ||
          chatbot.input.length > 160 ||
          chatbot.isSending
        }
      >
        <FontAwesomeIcon
          className='w-6 text-white'
          icon={faPaperPlane}
        />
      </Button>
    </form>
  );
};

export type {AskChatbotReq, AskChatbotRes};
export default Input;
