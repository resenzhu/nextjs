import Explore from '@components/main/home/profile/explore';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Hello from '@components/main/home/profile/hello';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Picture from '@components/main/home/profile/picture';
import Specialty from '@components/main/home/profile/specialty';

type ProfileProps = {
  picture: string | [string, string];
  name: string;
  specialty: string | string[];
  bio: string;
  socials: {name: string; icon: IconDefinition; url: string}[];
};

const Profile = ({
  picture,
  name,
  specialty,
  bio,
  socials
}: ProfileProps): JSX.Element => (
  <div className='flex h-full flex-col items-center'>
    <div className='relative h-1/5 w-full'>
      <div className='absolute h-full w-full bg-[url("/images/main/home-profile-background.webp")] bg-cover bg-top bg-no-repeat brightness-50 contrast-125'></div>
      <div className='absolute h-full w-full bg-cyan-600 opacity-40'></div>
      <div className='relative z-10 flex h-full translate-y-1/2 items-center justify-center'>
        <Picture src={picture} />
      </div>
    </div>
    <div className='relative flex h-full flex-col items-center justify-between pt-20'>
      <div className='flex flex-1 flex-col items-center'>
        <div className='text-2xl font-extrabold tracking-wide text-gray-600'>
          {name}
        </div>
        <div className='text-lg font-extrabold text-cyan-600'>
          <Specialty title={specialty} />
        </div>
        <div className='w-4/5 py-4 text-center text-gray-500'>{bio}</div>
        <div className='flex w-36 flex-1 flex-col justify-center space-y-2'>
          <Hello />
          <Explore />
        </div>
      </div>
      <div className='flex w-1/2 items-center justify-between pb-6 pt-4'>
        {socials.map(
          (social): JSX.Element => (
            <Link
              className='text-2xl text-cyan-600 duration-150 active:text-cyan-700'
              key={social.name}
              href={social.url}
              target='_blank'
            >
              <FontAwesomeIcon icon={social.icon} />
            </Link>
          )
        )}
      </div>
    </div>
  </div>
);

export type {ProfileProps};
export default Profile;
