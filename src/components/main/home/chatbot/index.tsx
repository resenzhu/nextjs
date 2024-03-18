import {
  TChatbot,
  TChatbotBackdrop,
  TChatbotBox
} from '@components/main/home/chatbot/transition';
import Chat from '@components/main/home/chatbot/chat';
import Close from '@components/main/home/chatbot/close';
import Input from '@components/main/home/chatbot/input';

type ChatbotProps = {
  botName: string;
};

const Chatbot = ({botName}: ChatbotProps): JSX.Element => (
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
            <Chat />
          </div>
          <div className='border-t-2'>
            <Input />
          </div>
        </div>
      </TChatbotBox>
    </div>
  </TChatbot>
);

export type {ChatbotProps};
export default Chatbot;
