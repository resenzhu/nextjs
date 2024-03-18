import {
  TChatbot,
  TChatbotBackdrop,
  TChatbotBox
} from '@components/main/home/chatbot/transition';
import Chat from '@components/main/home/chatbot/chat';
import Close from '@components/main/home/chatbot/close';
import Input from '@components/main/home/chatbot/input';
import {useTranslations} from 'next-intl';

type ChatbotProps = {
  botName: string;
};

const Chatbot = ({botName}: ChatbotProps): JSX.Element => {
  const translate = useTranslations('main');
  return (
    <TChatbot>
      <div className='fixed bottom-0 z-10 h-full md:relative md:z-0 md:animate-fade-right md:shadow-2xl md:animate-duration-700 lg:animate-fade-left'>
        <TChatbotBackdrop>
          <div className='fixed h-full w-full bg-black opacity-60'></div>
        </TChatbotBackdrop>
        <TChatbotBox>
          <div className='fixed bottom-0 flex h-[80vh] w-full flex-col bg-white md:relative md:h-full'>
            <div className='bg-cyan-600'>
              <div className='mx-4 flex justify-between py-3 align-middle text-white md:py-2'>
                <span className='font-bold'>{botName}</span>
                <Close />
              </div>
            </div>
            <div className='flex h-full flex-1 flex-col space-y-2 overflow-y-auto p-4'>
              <Chat
                error={{offline: translate('home.chatbot.error.offline')}}
              />
            </div>
            <div className='border-t-2'>
              <Input
                placeholder={translate('home.chatbot.input.placeholder')}
                error={{
                  empty: translate('home.chatbot.error.empty'),
                  tooShort: translate('home.chatbot.error.tooShort'),
                  tooLong: translate('home.chatbot.error.tooLong'),
                  client: translate('home.chatbot.error.client'),
                  server: translate('home.chatbot.error.server')
                }}
              />
            </div>
          </div>
        </TChatbotBox>
      </div>
    </TChatbot>
  );
};

export type {ChatbotProps};
export default Chatbot;
