import {
  TFetched,
  TFetching,
  TRetryFetch
} from '@components/project/breezy/home/profile/transition';
import {faSpinner, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Info from '@components/project/breezy/home/profile/info';
import Retry from '@components/project/breezy/home/profile/retry';
import Status from '@components/project/breezy/home/profile/status';
import {TProfile} from '@components/project/breezy/home/profile/transition';

type ProfileProps = {
  fetch: {
    message: string;
    action: string;
  };
};

const Profile = ({fetch}: ProfileProps): JSX.Element => (
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
      </div>
    </div>
    {/* <div className='flex h-[calc(100vh-3.5rem)] flex-col'>
      <section className='flex-1 bg-[url("/images/project/breezy/home-profile-cover.webp")] bg-cover bg-center bg-no-repeat'>
        <div className='flex h-full items-center justify-center'>
          <TFetching>
            <FontAwesomeIcon
              className='animate-spin text-4xl text-white animate-duration-[1400ms] animate-infinite'
              icon={faSpinner}
            />
          </TFetching>
          <TRetryFetch>
            <div className='flex items-center justify-center'>
              <div className='w-3/4 space-y-8 text-center'>
                <p className='text-white'>
                  Failed to fetch profile. Please try again later.
                </p>
                <Retry label='Retry' />
              </div>
            </div>
          </TRetryFetch>
          <div className='flex flex-col items-center justify-center space-y-5'>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center space-y-4'>
                <Info />
              </div>
              <Status
                modes={[
                  {label: 'online', color: 'text-green-600'},
                  {label: 'away', color: 'text-yellow-600'}
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div> */}
  </TProfile>
);

export type {ProfileProps};
export default Profile;
