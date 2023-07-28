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
  homeBg: string;
  aboutBg: string;
  portfolioBg: string;
  resourcesBg: string;
  contactBg: string;
  githubBg: string;
};

const Explore = ({
  homeBg,
  aboutBg,
  portfolioBg,
  resourcesBg,
  contactBg,
  githubBg
}: ExploreProps): JSX.Element => (
  <T>
    <div className='grid h-full grid-cols-2 gap-2 overflow-hidden px-4 py-6'>
      <THome>
        <Home className='group/home relative h-full w-full hover:shadow-lg'>
          <div
            className={`absolute h-full w-full ${homeBg} bg-cover bg-center bg-no-repeat brightness-50`}
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/home:bg-white group-hover/home:text-gray-700 group-hover/home:shadow-md'>
              HOME
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
            className={`absolute h-full w-full ${aboutBg} bg-cover bg-center bg-no-repeat brightness-50`}
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/about:bg-white group-hover/about:text-gray-700 group-hover/about:shadow-md'>
              ABOUT
            </div>
          </div>
        </Link>
      </TAbout>
      <TPortfolio>
        <Link
          className='group/portfolio relative col-span-2'
          href='/portfolio'
        >
          <div
            className={`absolute h-full w-full ${portfolioBg} bg-cover bg-center bg-no-repeat brightness-50`}
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/portfolio:bg-white group-hover/portfolio:text-gray-700 group-hover/portfolio:shadow-md'>
              PORTFOLIO
            </div>
          </div>
        </Link>
      </TPortfolio>
      <TResources>
        <Link
          className='group/resources relative col-span-2'
          href='/resources'
        >
          <div
            className={`absolute h-full w-full ${resourcesBg} bg-cover bg-center bg-no-repeat brightness-50`}
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/resources:bg-white group-hover/resources:text-gray-700 group-hover/resources:shadow-md'>
              RESOURCES
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
            className={`absolute h-full w-full ${contactBg} bg-cover bg-center bg-no-repeat brightness-50`}
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/contact:bg-white group-hover/contact:text-gray-700 group-hover/contact:shadow-md'>
              CONTACT
            </div>
          </div>
        </Link>
      </TContact>
      <TGitHub>
        <Link
          className='group/github relative'
          href='https://github.com/resenzhu/nextjs'
        >
          <div
            className={`absolute h-full w-full ${githubBg} bg-cover bg-center bg-no-repeat brightness-50`}
          ></div>
          <div className='relative h-full'>
            <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/github:bg-white group-hover/github:text-gray-700 group-hover/github:shadow-md'>
              GITHUB
            </div>
          </div>
        </Link>
      </TGitHub>
    </div>
  </T>
);

export type {ExploreProps};
export default Explore;
