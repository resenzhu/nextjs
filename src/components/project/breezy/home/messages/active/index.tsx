import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import Back from '@components/project/breezy/home/messages/active/back';
import Chat from '@components/project/breezy/home/messages/active/chat';
import Info from '@components/project/breezy/home/messages/active/info';
import Input from '@components/project/breezy/home/messages/active/input';

const Active = (): JSX.Element => (
  <div className='flex h-screen flex-col'>
    <div className='border-b-2'>
      <div className='mx-4 flex space-x-5 py-2'>
        <Back icon={faArrowLeftLong} />
        <div className='flex flex-1 items-center'>
          <Info />
        </div>
      </div>
    </div>
    <div className='flex flex-1 flex-col space-y-1 overflow-y-auto bg-gray-100 p-4'>
      <Chat />
    </div>
    <div className='border-t-2'>
      <Input />
    </div>
  </div>
);

export default Active;
