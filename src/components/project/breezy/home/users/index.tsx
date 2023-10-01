import {T} from '@components/project/breezy/home/users/transition';

const Users = (): JSX.Element => (
  <T>
    <div className='pb-14'>
      <div className='mx-4 py-4'>
        <input
          className='w-full bg-gray-100 px-3 py-2 outline-0'
          type='text'
          placeholder='Search user'
        />
      </div>
      <p className='mx-4 rounded-lg bg-purple-500 px-4 py-3 text-center text-sm text-white'>
        Currently, there are no users online for chat. To utilize the chat
        feature, kindly create a new account on a different browser or device
        while staying logged in to your current session. This will allow you to
        experience the chat functionality with the newly created account. Thank
        you for your understanding and cooperation.
      </p>
    </div>
  </T>
);

export default Users;
