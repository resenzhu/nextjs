import {Chatbot, Explore, Profile} from '@components/main/home';
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
  <section className='h-full sm:mx-12 sm:grid sm:items-center md:mx-16 lg:mx-20'>
    <div className='h-[calc(100vh-3.5rem)] max-h-[calc(100vh-3.5rem)] sm:grid sm:h-5/6 sm:grid-cols-[2fr_3fr] sm:grid-rows-2 sm:gap-2'>
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
        homeBg='bg-[url("/images/main/home-explore-home.webp")]'
        aboutBg='bg-[url("/images/main/home-explore-about.webp")]'
        portfolioBg='bg-[url("/images/main/home-explore-portfolio.webp")]'
        resourcesBg='bg-[url("/images/main/home-explore-resources.webp")]'
        contactBg='bg-[url("/images/main/home-explore-contact.webp")]'
        githubBg='bg-[url("/images/main/home-explore-github.webp")]'
      />
      <Chatbot name='RESEN [BOT]' />
    </div>
  </section>
);

export {metadata};
export default Page;
