import {
  TProfile,
  TProfileFetchRetry,
  TProfileFetched,
  TProfileFetching
} from '@components/project/breezy/home/profile/transition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Info from '@components/project/breezy/home/profile/info';
import Logout from '@components/project/breezy/home/profile/logout';
import Retry from '@components/project/breezy/home/profile/retry';
import Settings from '@components/project/breezy/home/profile/settings';
import Status from '@components/project/breezy/home/profile/status';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

type ProfileProps = {
  fetch: {
    message: string;
    action: string;
  };
  label: {
    settings: string;
    logout: string;
  };
  dialog: {
    logout: {
      title: string;
      subtitle: string;
      cancel: string;
      confirm: string;
    };
  };
};

const Profile = ({fetch, label, dialog}: ProfileProps): JSX.Element => (
  <TProfile>
    <div className='h-[calc(100vh-3.5rem)] bg-[url("/images/project/breezy/home-profile-cover.webp")] bg-cover bg-center bg-no-repeat'>
      <div className='mx-4 flex h-full items-center justify-center'>
        <TProfileFetching>
          <FontAwesomeIcon
            className='animate-spin text-4xl text-white animate-duration-[1400ms] animate-infinite'
            icon={faSpinner}
          />
        </TProfileFetching>
        <TProfileFetchRetry>
          <div className='w-3/4 space-y-8 text-center'>
            <p className='text-white'>{fetch.message}</p>
            <Retry label={fetch.action} />
          </div>
        </TProfileFetchRetry>
        <TProfileFetched>
          <div className='flex flex-col items-center justify-center space-y-12'>
            <div className='flex flex-col items-center justify-center space-y-5'>
              <Info />
              <Status
                modes={[
                  {
                    label: 'online',
                    color: 'text-green-600'
                  },
                  {
                    label: 'appear away',
                    color: 'text-yellow-600'
                  },
                  {
                    label: 'appear offline',
                    color: 'text-gray-600'
                  }
                ]}
              />
            </div>
            <div className='flex w-64 flex-col items-center justify-center space-y-3'>
              <Settings label={label.settings} />
              <Logout
                label={label.logout}
                dialog={dialog.logout}
              />
            </div>
          </div>
        </TProfileFetched>
      </div>
    </div>
  </TProfile>
);

export type {ProfileProps};
export default Profile;
