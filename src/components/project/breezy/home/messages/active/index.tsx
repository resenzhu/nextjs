import Back from '@components/project/breezy/home/messages/active/back';
import Chat from '@components/project/breezy/home/messages/active/chat';
import Header from '@components/project/breezy/home/messages/active/header';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import Input from '@components/project/breezy/home/messages/active/input';

type ActiveProps = {
  lastSeen: string;
  placeholder: string;
  backIcon: IconDefinition;
  sendIcon: IconDefinition;
};

const Active = ({
  lastSeen,
  placeholder,
  backIcon,
  sendIcon
}: ActiveProps): JSX.Element => (
  <div className='flex h-screen flex-col'>
    <div className='border-b-2'>
      <div className='mx-4 flex space-x-5 py-2'>
        <Back icon={backIcon} />
        <div className='flex flex-1 items-center'>
          <Header lastSeen={lastSeen} />
        </div>
      </div>
    </div>
    <div className='flex flex-1 flex-col space-y-1 overflow-y-auto bg-gray-100 p-4'>
      <Chat />
    </div>
    <div className='border-t-2'>
      <Input
        placeholder={placeholder}
        sendIcon={sendIcon}
      />
    </div>
  </div>
);

export type {ActiveProps};
export default Active;
