import {T, TBackdrop, TChatbot} from '@components/main/home/chatbot/transition';
import Close from '@components/main/home/chatbot/close';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import Online from '@components/main/home/chatbot/online';

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
          <div className='h-80'>
            <div className='mx-4 grid h-80 space-y-2 overflow-y-auto py-4'>
              <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
                Hello!
              </div>
              <div className='w-fit place-self-start bg-cyan-600 px-3 py-1 text-white'>
                Hello
              </div>
              <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
                I want to know about you.
              </div>
              <div className='w-fit bg-cyan-600 px-3 py-1 text-white'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </div>
              <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </div>
            </div>
          </div>
          <div className='border-t-2 border-gray-300'>
            <div className='mx-4 space-y-2 py-4 text-white'>
              <div className='w-fit bg-cyan-600 px-3 py-1 duration-150 hover:bg-cyan-700'>
                I want to know about you.
              </div>
              <div className='w-fit bg-cyan-600 px-3 py-1 duration-150 hover:bg-cyan-700'>
                What projects do you have?
              </div>
              <div className='w-fit bg-cyan-600 px-3 py-1 duration-150 hover:bg-cyan-700'>
                I want to know about you.
              </div>
              <div className='w-fit bg-cyan-600 px-3 py-1 duration-150 hover:bg-cyan-700'>
                What projects do you have?
              </div>
            </div>
          </div>
        </div>
      </TChatbot>
    </div>
  </T>
);

export type {ChatbotProps};
export default Chatbot;
