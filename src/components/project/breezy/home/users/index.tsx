import {
  TEmpty,
  TFetched,
  TFetching,
  TList,
  TRetryFetch,
  TUsers
} from '@components/project/breezy/home/users/transition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import List from '@components/project/breezy/home/users/list';
import Retry from '@components/project/breezy/home/users/retry';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

type UsersProps = {
  fetch: {
    message: string;
    action: string;
  };
  empty: {
    message: string;
  };
};

const Users = ({fetch, empty}: UsersProps): JSX.Element => (
  <TUsers>
    <div>
      <TFetching>
        <div className='mx-4 flex h-[calc(100vh-3.5rem)] items-center justify-center'>
          <FontAwesomeIcon
            className='animate-spin text-4xl text-purple-500 animate-duration-[1400ms] animate-infinite'
            icon={faSpinner}
          />
        </div>
      </TFetching>
      <TRetryFetch>
        <div className='mx-4 flex h-[calc(100vh-3.5rem)] items-center justify-center'>
          <div className='w-3/4 space-y-8 text-center'>
            <p className='text-gray-500'>{fetch.message}</p>
            <Retry label={fetch.action} />
          </div>
        </div>
      </TRetryFetch>
      <TFetched>
        <div>
          <TEmpty>
            <div className='mx-4 flex h-[calc(100vh-3.5rem)] items-center justify-center'>
              <div className='w-3/4 text-center'>
                <p className='text-gray-500'>{empty.message}</p>
              </div>
            </div>
          </TEmpty>
          <TList>
            <div className='pb-14'>
              <List label={{chat: 'CHAT'}} />
            </div>
          </TList>
        </div>
      </TFetched>
    </div>
  </TUsers>
);

export type {UsersProps};
export default Users;
