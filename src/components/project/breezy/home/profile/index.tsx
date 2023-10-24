import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Info from '@components/project/breezy/home/profile/info';
import Status from '@components/project/breezy/home/profile/status';
import {TProfile} from '@components/project/breezy/home/profile/transition';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

const Profile = (): JSX.Element => (
  <TProfile>
    <div className='flex h-[calc(100vh-3.5rem)] flex-col'>
      <section className='flex-1 bg-[url("/images/project/breezy/home-profile-cover.webp")] bg-cover bg-center bg-no-repeat'>
        <div className='flex h-full items-center justify-center'>
          <div className='flex flex-col items-center justify-center space-y-5'>
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
      </section>
      <section className='mx-4 flex flex-col space-y-5 py-5'>
        <button
          className='flex w-fit items-baseline justify-center space-x-4 text-xl text-gray-600 duration-150 hover:text-red-500'
          type='button'
        >
          <div className='w-6 text-center'>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>{' '}
          <span className='text-lg'>Logout</span>
        </button>
      </section>
    </div>
  </TProfile>
);

export default Profile;
