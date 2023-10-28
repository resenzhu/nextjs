import {
  TFetched,
  TFetching,
  TProfile,
  TRetryFetch
} from '@components/project/breezy/home/profile/transition';
import {
  faAngleRight,
  faCog,
  faSignOutAlt,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Info from '@components/project/breezy/home/profile/info';
import Retry from '@components/project/breezy/home/profile/retry';
import Status from '@components/project/breezy/home/profile/status';

type ProfileProps = {
  fetch: {
    message: string;
    action: string;
  };
  label: {
    settings: string;
    logout: string;
  };
};

const Profile = ({fetch, label}: ProfileProps): JSX.Element => (
  <TProfile>
    <div className='h-[calc(100vh-3.5rem)] bg-[url("/images/project/breezy/home-profile-cover.webp")] bg-cover bg-center bg-no-repeat'>
      <div className='mx-4 flex h-full items-center justify-center'>
        <TFetching>
          <FontAwesomeIcon
            className='animate-spin text-4xl text-white animate-duration-[1400ms] animate-infinite'
            icon={faSpinner}
          />
        </TFetching>
        <TRetryFetch>
          <div className='w-3/4 space-y-8 text-center'>
            <p className='text-white'>{fetch.message}</p>
            <Retry label={fetch.action} />
          </div>
        </TRetryFetch>
        <TFetched>
          <div className='flex flex-col items-center justify-center space-y-12'>
            <div className='flex flex-col items-center justify-center space-y-5'>
              <Info />
              <Status
                modes={[
                  {label: 'online', color: 'text-green-600'},
                  {label: 'away', color: 'text-yellow-600'}
                ]}
              />
            </div>
            <div className='flex w-64 flex-col items-center justify-center space-y-3'>
              <button
                className='flex w-64 items-center justify-start space-x-3 rounded-full bg-purple-500 px-5 py-2 text-gray-100 duration-150 hover:bg-purple-600'
                type='button'
              >
                <div className='text-center'>
                  <FontAwesomeIcon icon={faCog} />
                </div>
                <span className='flex-1 text-start text-lg font-semibold'>
                  {label.settings}
                </span>
                <div className='text-center'>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </button>
              <button
                className='flex w-64 items-center justify-start space-x-3 rounded-full bg-purple-500 px-5 py-2 text-gray-100 duration-150 hover:bg-purple-600'
                type='button'
              >
                <div className='text-center'>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
                <span className='text-lg font-semibold'>{label.logout}</span>
              </button>
            </div>
          </div>
        </TFetched>
      </div>
    </div>
  </TProfile>
);

export type {ProfileProps};
export default Profile;
