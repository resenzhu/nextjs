import {
  type IconDefinition,
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {faArrowCircleUp, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {DateTime} from 'luxon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {LazyLoad} from '@components/main/shared';
import Link from 'next/link';
import Scroll from '@components/main/shared/footer/scroll';

type Social = {
  name: string;
  icon: IconDefinition;
  url: string;
};

const Footer = (): JSX.Element => {
  const socials: Social[] = [
    {
      name: 'linkedin',
      icon: faLinkedin,
      url: 'https://linkedin.com/in/resen'
    },
    {
      name: 'github',
      icon: faGithub,
      url: 'https://github.com/resenzhu'
    },
    {
      name: 'instagram',
      icon: faInstagram,
      url: 'https://instagram.com/resenzhu'
    },
    {
      name: 'email',
      icon: faEnvelope,
      url: 'mailto:resen.zhu@gmail.com'
    }
  ];

  return (
    <LazyLoad offset={0}>
      <footer className='animate-fade bg-gradient-to-b from-cyan-700 to-cyan-900 animate-duration-700'>
        <div className='mx-4 flex flex-col items-center py-4 text-white'>
          <Scroll icon={faArrowCircleUp} />
          <div className='flex flex-col items-center space-y-5 pt-8'>
            <div className='flex flex-col items-center'>
              <div className='text-xl font-bold'>RESEN</div>
              <div className='italic'>
                Crafting Code with Passion and Purpose
              </div>
            </div>
            <div className='flex w-2/3 justify-between'>
              {socials.map(
                (social): JSX.Element => (
                  <Link
                    className='text-2xl'
                    key={social.name}
                    href={social.url}
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </Link>
                )
              )}
            </div>
            <div className='font-semibold'>
              &#169; {DateTime.local().year} RESEN
            </div>
          </div>
        </div>
      </footer>
    </LazyLoad>
  );
};

export type {Social};
export default Footer;
