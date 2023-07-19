import {Explore, Profile} from '@components/main/home';
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {createMetadata} from '@utils/metadata';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const metadata = createMetadata({
  title: 'Resen | Full Stack Developer',
  description:
    'Welcome to my NextJS website, a showcase of my portfolio and projects brought to life with cutting-edge technology.',
  url: '/'
});

const Page = (): JSX.Element => (
  <section className='h-full'>
    <Profile
      picture={[
        '/images/main/home-profile-picture-original.webp',
        '/images/main/home-profile-picture-easter.webp'
      ]}
      name='RESEN'
      specialty={[
        'FULL STACK DEVELOPER',
        'FRONT END DEVELOPER',
        'BACK END DEVELOPER',
        'MIDDLEWARE DEVELOPER',
        'MOBILE LEGENDS PLAYER',
        'HORROR ENTHUSIAST'
      ]}
      bio='Analytical programmer with a strong problem-solving mindset, adept at optimizing code for performance and efficiency.'
      socials={[
        {
          name: 'linkedin',
          icon: faLinkedin,
          url: 'https://linkedin.com/in/resen'
        },
        {name: 'github', icon: faGithub, url: 'https://github.com/resenzhu'},
        {
          name: 'instagram',
          icon: faInstagram,
          url: 'https://instagram.com/resenzhu'
        },
        {name: 'email', icon: faEnvelope, url: 'mailto:resen.zhu@gmail.com'}
      ]}
    />
    <Explore
      background={{
        home: 'bg-[url("/images/main/home-explore-home.webp")]',
        about: 'bg-[url("/images/main/home-explore-about.webp")]',
        portfolio: 'bg-[url("/images/main/home-explore-portfolio.webp")]',
        resources: 'bg-[url("/images/main/home-explore-resources.webp")]',
        contact: 'bg-[url("/images/main/home-explore-contact.webp")]',
        github: 'bg-[url("/images/main/home-explore-github.webp")]'
      }}
    />
  </section>
);

export {metadata};
export default Page;
