import {
  TProfile,
  TProfileBio,
  TProfileButtons,
  TProfileName,
  TProfilePicture,
  TProfileSocials,
  TProfileSpecialty
} from '@components/main/home/profile/transition';
import Chatbot from '@components/main/home/profile/chatbot';
import Explore from '@components/main/home/profile/explore';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Link} from '@navigation';
import Picture from '@components/main/home/profile/picture';
import Specialty from '@components/main/home/profile/specialty';
import {useTranslations} from 'next-intl';

type ProfileProps = {
  picture: {
    src: string;
    alt: string;
  };
  name: string;
  specialties: string[];
  bio: string;
  socials: {
    name: string;
    icon: IconDefinition;
    url: string;
  }[];
};

const Profile = ({
  picture,
  name,
  specialties,
  bio,
  socials
}: ProfileProps): JSX.Element => {
  const translate = useTranslations('main');
  return (
    <TProfile>
      <div className='flex h-full flex-col items-center overflow-hidden md:animate-fade-right md:shadow-2xl md:animate-duration-700'>
        <TProfilePicture>
          <div className='relative h-1/5 w-full'>
            <div className='absolute h-full w-full bg-[url("/images/main/home-profile-background.webp")] bg-cover bg-top bg-no-repeat brightness-50 contrast-125'></div>
            <div className='absolute h-full w-full bg-cyan-600 opacity-40'></div>
            <div className='relative z-10 flex h-full translate-y-1/2 items-center justify-center'>
              <Picture
                src={picture.src}
                alt={picture.alt}
              />
            </div>
          </div>
        </TProfilePicture>
        <div className='relative flex h-full flex-col items-center justify-between pt-20 md:pt-16'>
          <div className='flex flex-1 flex-col items-center'>
            <TProfileName>
              <span className='text-2xl font-extrabold tracking-wide text-gray-600 md:text-xl'>
                {name}
              </span>
            </TProfileName>
            <TProfileSpecialty>
              <span className='text-lg font-extrabold text-cyan-600 md:text-sm'>
                <Specialty titles={specialties} />
              </span>
            </TProfileSpecialty>
            <TProfileBio>
              <p className='w-4/5 py-4 text-center text-gray-500 md:mx-auto md:w-5/6 md:text-sm lg:py-8 lg:text-base'>
                {bio}
              </p>
            </TProfileBio>
            <TProfileButtons>
              <div className='flex w-36 flex-1 flex-col justify-center space-y-2'>
                <Chatbot label={translate('home.profile.chatbot')} />
                <Explore label={translate('home.profile.explore')} />
              </div>
            </TProfileButtons>
          </div>
          <TProfileSocials>
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
          </TProfileSocials>
        </div>
      </div>
    </TProfile>
  );
};

export type {ProfileProps};
export default Profile;
