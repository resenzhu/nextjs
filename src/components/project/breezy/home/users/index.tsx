import {TEmpty, TUsers} from '@components/project/breezy/home/users/transition';

type UsersProps = {
  empty: {
    message: string;
  };
};

const Users = ({empty}: UsersProps): JSX.Element => (
  <TUsers>
    <TEmpty>
      <div className='mx-4 flex h-[calc(100vh-3.5rem)] items-center justify-center'>
        <div className='w-3/4 space-y-8 text-center'>
          <p className='text-gray-500'>{empty.message}</p>
        </div>
      </div>
    </TEmpty>
  </TUsers>
);

export default Users;
