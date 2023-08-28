import {Chatbot, Explore, Profile} from '@components/main/home';
import {faEnvelope, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Resen | Full Stack Developer',
  description:
    'Welcome to my NextJS website, a showcase of my portfolio and projects brought to life with cutting-edge technology.',
  url: '/'
});

const Page = (): JSX.Element => (
  <section className='h-[calc(100vh-4rem)] md:mx-16 md:grid md:h-[calc(100vh-3.5rem)] md:items-center lg:mx-auto lg:w-4/6'>
    <div className='h-full md:grid md:h-4/5 md:max-h-full md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] md:gap-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_minmax(0,2fr)] lg:grid-rows-1'>
      <Profile
        picture={[
          '/images/main/home-profile-picture-original.webp',
          '/images/main/home-profile-picture-easter.webp'
        ]}
        name='RESEN'
        specialties={[
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
        home={{
          label: 'HOME',
          background: 'bg-[url("/images/main/home-explore-home.webp")]'
        }}
        about={{
          label: 'ABOUT',
          background: 'bg-[url("/images/main/home-explore-about.webp")]'
        }}
        portfolio={{
          label: 'PORTFOLIO',
          background: 'bg-[url("/images/main/home-explore-portfolio.webp")]'
        }}
        resources={{
          label: 'RESOURCES',
          background: 'bg-[url("/images/main/home-explore-resources.webp")]'
        }}
        contact={{
          label: 'CONTACT',
          background: 'bg-[url("/images/main/home-explore-contact.webp")]'
        }}
        github={{
          label: 'GITHUB',
          background: 'bg-[url("/images/main/home-explore-github.webp")]'
        }}
      />
      <Chatbot
        name='RESEN [BOT]'
        placeholder='Type a message'
        sendIcon={faPaperPlane}
      />
    </div>
  </section>
);

export {metadata};
export default Page;
