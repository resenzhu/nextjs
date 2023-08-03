import {
  T,
  TBio,
  TButtons,
  TName,
  TPicture,
  TSocials,
  TSpecialty
} from '@components/main/home/profile/transition';
import Explore from '@components/main/home/profile/explore';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Hello from '@components/main/home/profile/hello';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
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
  <T>
    <div className='flex h-full flex-col items-center overflow-hidden md:animate-fade-right md:shadow-2xl md:animate-duration-700'>
      <TPicture>
        <div className='relative h-1/5 w-full'>
          <div className='absolute h-full w-full bg-[url("/images/main/home-profile-background.webp")] bg-cover bg-top bg-no-repeat brightness-50 contrast-125'></div>
          <div className='absolute h-full w-full bg-cyan-600 opacity-40'></div>
          <div className='relative z-10 flex h-full translate-y-1/2 items-center justify-center'>
            <Picture src={picture} />
          </div>
        </div>
      </TPicture>
      <div className='relative flex h-full flex-col items-center justify-between pt-20 md:pt-16'>
        <div className='flex flex-1 flex-col items-center'>
          <TName>
            <span className='text-2xl font-extrabold tracking-wide text-gray-600 md:text-xl'>
              {name}
            </span>
          </TName>
          <TSpecialty>
            <span className='text-lg font-extrabold text-cyan-600 md:text-sm'>
              <Specialty title={specialty} />
            </span>
          </TSpecialty>
          <TBio>
            <span className='w-4/5 py-4 text-center text-gray-500 md:mx-auto md:w-5/6 md:text-sm lg:py-8 lg:text-base'>
              {bio}
            </span>
          </TBio>
          <TButtons>
            <div className='flex w-36 flex-1 flex-col justify-center space-y-2'>
              <Hello label='HELLO' />
              <Explore label='EXPLORE' />
            </div>
          </TButtons>
        </div>
        <TSocials>
          <div className='flex w-1/2 items-center justify-between pb-6 pt-4 md:mx-auto md:pb-6 md:pt-1'>
            {socials.map(
              (social): JSX.Element => (
                <Link
                  className='text-2xl text-cyan-600 duration-150 active:text-cyan-700 md:text-xl'
                  key={social.name}
                  href={social.url}
                  target='_blank'
                >
                  <FontAwesomeIcon icon={social.icon} />
                </Link>
              )
            )}
          </div>
        </TSocials>
      </div>
    </div>
  </T>
);

export type {ProfileProps};
export default Profile;
