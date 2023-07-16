import {
  T,
  TAbout,
  TContact,
  TGitHub,
  THome,
  TPortfolio,
  TResources
} from '@components/main/home/explore/transition';
import Home from '@components/main/home/explore/home';
import Link from 'next/link';

const Explore = (): JSX.Element => (
  <T>
    <div className='grid h-full grid-cols-2 gap-2 px-4 py-6'>
      <THome>
        <Home className='relative h-full w-full'>
          <div className='absolute h-full w-full bg-[url("/images/main/home-explore-home.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
              HOME
            </div>
          </div>
        </Home>
      </THome>
      <TAbout>
        <Link
          className='relative'
          href='/about'
        >
          <div className='absolute h-full w-full bg-[url("/images/main/home-explore-about.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
              ABOUT
            </div>
          </div>
        </Link>
      </TAbout>
      <TPortfolio>
        <Link
          className='relative col-span-2'
          href='/portfolio'
        >
          <div className='absolute h-full w-full bg-[url("/images/main/home-explore-portfolio.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
              PORTFOLIO
            </div>
          </div>
        </Link>
      </TPortfolio>
      <TResources>
        <Link
          className='relative col-span-2'
          href='/resources'
        >
          <div className='absolute h-full w-full bg-[url("/images/main/home-explore-resources.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
              RESOURCES
            </div>
          </div>
        </Link>
      </TResources>
      <TContact>
        <Link
          className='relative'
          href='/contact'
        >
          <div className='absolute h-full w-full bg-[url("/images/main/home-explore-contact.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
              CONTACT
            </div>
          </div>
        </Link>
      </TContact>
      <TGitHub>
        <Link
          className='relative'
          href='https://github.com/resenzhu/nextjs'
        >
          <div className='absolute h-full w-full bg-[url("/images/main/home-explore-github.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
              GITHUB
            </div>
          </div>
        </Link>
      </TGitHub>
    </div>
  </T>
);

export default Explore;
