import {T, TBackdrop, TChatbot} from '@components/main/home/chatbot/transition';
import Chat from '@components/main/home/chatbot/chat';
import Close from '@components/main/home/chatbot/close';
import Online from '@components/main/home/chatbot/online';
import Options from '@components/main/home/chatbot/options';
import {faClose} from '@fortawesome/free-solid-svg-icons';

type ChatbotProps = {
  name: string;
};

const Chatbot = ({name}: ChatbotProps): JSX.Element => (
  <T>
    <div className='fixed bottom-0 z-10 h-full'>
      <TBackdrop>
        <div className='fixed h-full w-full bg-black'></div>
      </TBackdrop>
      <TChatbot>
        <div className='fixed bottom-0 w-full bg-white'>
          <div className='bg-cyan-600'>
            <div className='mx-4 flex justify-between py-3 align-middle text-white'>
              <div className='space-x-4'>
                <span className='font-bold'>{name}</span>
                <Online
                  onlineLabel='online'
                  offlineLabel='offline'
                />
              </div>
              <Close icon={faClose} />
            </div>
          </div>
          <div className='h-[50vh]'>
            <div className='mx-4 grid h-80 space-y-2 overflow-y-auto py-4'>
              <Chat />
            </div>
          </div>
          <div className='border-t-2 border-gray-300'>
            <div className='mx-4 space-y-2 py-4 text-white'>
              <Options />
            </div>
          </div>
        </div>
      </TChatbot>
    </div>
  </T>
);

export type {ChatbotProps};
export default Chatbot;
