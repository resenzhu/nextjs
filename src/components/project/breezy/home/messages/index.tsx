import Browse from '@components/project/breezy/home/messages/browse';
import {TMessages} from '@components/project/breezy/home/messages/transition';

type MessagesProps = {
  empty: {
    message: string;
    action: string;
  };
};

const Messages = ({empty}: MessagesProps): JSX.Element => (
  <TMessages>
    <div className='mx-4 flex h-[calc(100vh-3.5rem)] items-center justify-center'>
      <div className='w-2/3 space-y-8 text-center'>
        <p className='text-gray-500'>{empty.message}</p>
        <Browse label={empty.action} />
      </div>
    </div>
  </TMessages>
);

export type {MessagesProps};
export default Messages;
