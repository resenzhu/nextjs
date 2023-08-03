import {T, TBackdrop, TChatbot} from '@components/main/home/chatbot/transition';
import {faClose, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import Chat from '@components/main/home/chatbot/chat';
import Close from '@components/main/home/chatbot/close';
import Input from '@components/main/home/chatbot/input';

type ChatbotProps = {
  name: string;
};

const Chatbot = ({name}: ChatbotProps): JSX.Element => (
  <T>
    <div className='fixed bottom-0 z-10 h-full md:relative md:z-0 md:animate-fade-right md:shadow-2xl md:animate-duration-700 lg:animate-fade-left'>
      <TBackdrop>
        <div className='fixed h-full w-full bg-black'></div>
      </TBackdrop>
      <TChatbot>
        <div className='fixed bottom-0 flex h-[80vh] w-full flex-col bg-white md:relative md:h-full'>
          <div className='bg-cyan-600'>
            <div className='mx-4 flex justify-between py-3 align-middle text-white md:py-2'>
              <span className='font-bold'>{name}</span>
              <Close icon={faClose} />
            </div>
          </div>
          <div className='flex h-full flex-1 flex-col space-y-2 overflow-y-auto p-4'>
            <Chat />
          </div>
          <div className='border-t-2'>
            <Input
              placeholder='Type a message'
              sendIcon={faPaperPlane}
            />
          </div>
        </div>
      </TChatbot>
    </div>
  </T>
);

export type {ChatbotProps};
export default Chatbot;
