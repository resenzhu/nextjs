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

type ExploreProps = {
  label: {
    home: string;
    about: string;
    portfolio: string;
    resources: string;
    contact: string;
    github: string;
  }
};

const Explore = ({
  label
}: ExploreProps): JSX.Element => (
  <T>
    <div className='grid h-full grid-cols-2 gap-2 overflow-hidden px-4 py-6 md:row-span-2 md:p-0 lg:row-span-1 lg:animate-fade lg:duration-700'>
      <THome>
        <Home className='group/home relative h-full w-full hover:shadow-lg md:hover:shadow-none'>
          <div
            className='absolute h-full w-full bg-[url("/images/main/home-explore-home.webp")] bg-cover bg-center bg-no-repeat brightness-50'
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/home:bg-white group-hover/home:text-gray-700 group-hover/home:shadow-md'>
              {label.home}
            </div>
          </div>
        </Home>
      </THome>
      <TAbout>
        <Link
          className='group/about relative'
          href='/about'
        >
          <div
            className='absolute h-full w-full bg-[url("/images/main/home-explore-about.webp")] bg-cover bg-center bg-no-repeat brightness-50'
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/about:bg-white group-hover/about:text-gray-700 group-hover/about:shadow-md'>
              {label.about}
            </div>
          </div>
        </Link>
      </TAbout>
      <TPortfolio>
        <Link
          className='group/portfolio relative col-span-2 md:col-span-1 md:row-span-2'
          href='/portfolio'
        >
          <div
            className='absolute h-full w-full bg-[url("/images/main/home-explore-portfolio.webp")] bg-cover bg-center bg-no-repeat brightness-50'
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/portfolio:bg-white group-hover/portfolio:text-gray-700 group-hover/portfolio:shadow-md'>
              {label.portfolio}
            </div>
          </div>
        </Link>
      </TPortfolio>
      <TResources>
        <Link
          className='group/resources relative col-span-2 md:col-span-1 md:row-span-2'
          href='/resources'
        >
          <div
            className='absolute h-full w-full bg-[url("/images/main/home-explore-resources.webp")] bg-cover bg-center bg-no-repeat brightness-50'
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/resources:bg-white group-hover/resources:text-gray-700 group-hover/resources:shadow-md'>
              {label.resources}
            </div>
          </div>
        </Link>
      </TResources>
      <TContact>
        <Link
          className='group/contact relative'
          href='/contact'
        >
          <div
            className='absolute h-full w-full bg-[url("/images/main/home-explore-contact.webp")] bg-cover bg-center bg-no-repeat brightness-50'
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/contact:bg-white group-hover/contact:text-gray-700 group-hover/contact:shadow-md'>
              {label.contact}
            </div>
          </div>
        </Link>
      </TContact>
      <TGitHub>
        <Link
          className='group/github relative md:col-span-2'
          href='https://github.com/resenzhu/nextjs'
        >
          <div
            className='absolute h-full w-full bg-[url("/images/main/home-explore-github.webp")] bg-cover bg-center bg-no-repeat brightness-50'
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/github:bg-white group-hover/github:text-gray-700 group-hover/github:shadow-md'>
              {label.github}
            </div>
          </div>
        </Link>
      </TGitHub>
    </div>
  </T>
);

export type {ExploreProps};
export default Explore;
