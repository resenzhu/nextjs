import {type IconDefinition, faClose} from '@fortawesome/free-solid-svg-icons';
import {
  TChatbot,
  TChatbotBackdrop,
  TChatbotBox
} from '@components/main/home/chatbot/transition';
import Chat from '@components/main/home/chatbot/chat';
import Close from '@components/main/home/chatbot/close';
import Input from '@components/main/home/chatbot/input';

type ChatbotProps = {
  name: string;
  input: {
    placeholder: string;
    sendIcon: IconDefinition;
  };
  error: {
    offline: string;
    empty: string;
    tooShort: string;
    tooLong: string;
    client: string;
    server: string;
  };
};

const Chatbot = ({name, input, error}: ChatbotProps): JSX.Element => (
  <TChatbot>
    <div className='fixed bottom-0 z-10 h-full md:relative md:z-0 md:animate-fade-right md:shadow-2xl md:animate-duration-700 lg:animate-fade-left'>
      <TChatbotBackdrop>
        <div className='fixed h-full w-full bg-black'></div>
      </TChatbotBackdrop>
      <TChatbotBox>
        <div className='fixed bottom-0 flex h-[80vh] w-full flex-col bg-white md:relative md:h-full'>
          <div className='bg-cyan-600'>
            <div className='mx-4 flex justify-between py-3 align-middle text-white md:py-2'>
              <span className='font-bold'>{name}</span>
              <Close icon={faClose} />
            </div>
          </div>
          <div className='flex h-full flex-1 flex-col space-y-2 overflow-y-auto p-4'>
            <Chat offline={error.offline} />
          </div>
          <div className='border-t-2'>
            <Input
              placeholder={input.placeholder}
              sendIcon={input.sendIcon}
              error={{
                empty: error.empty,
                tooShort: error.tooShort,
                tooLong: error.tooLong,
                client: error.client,
                server: error.server
              }}
            />
          </div>
        </div>
      </TChatbotBox>
    </div>
  </TChatbot>
);

export type {ChatbotProps};
export default Chatbot;
