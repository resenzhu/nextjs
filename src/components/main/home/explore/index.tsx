import {
  TExplore,
  TExploreAbout,
  TExploreContact,
  TExploreGitHub,
  TExploreHome,
  TExplorePortfolio,
  TExploreResources
} from '@components/main/home/explore/transition';
import Home from '@components/main/home/explore/home';
import {Link} from '@navigation';

type ExploreProps = {
  route: {
    home: {
      label: string;
      url: string;
    };
    about: {
      label: string;
      url: string;
    };
    portfolio: {
      label: string;
      url: string;
    };
    resources: {
      label: string;
      url: string;
    };
    contact: {
      label: string;
      url: string;
    };
    github: {
      label: string;
      url: string;
    };
  };
};

const Explore = ({route}: ExploreProps): JSX.Element => (
  <TExplore>
    <div className='grid h-full grid-cols-2 gap-2 overflow-hidden px-4 py-6 md:row-span-2 md:p-0 lg:row-span-1 lg:animate-fade lg:duration-700'>
      <TExploreHome>
        <div>
          <Home className='group/home relative h-full w-full hover:shadow-lg md:hover:shadow-none'>
            <div className='absolute h-full w-full bg-[url("/images/main/home-explore-home.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
            <div className='relative h-full'>
              <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/home:bg-white group-hover/home:text-gray-700 group-hover/home:shadow-md'>
                {route.home.label}
              </div>
            </div>
          </Home>
        </div>
      </TExploreHome>
      <TExploreAbout>
        <div className='group/about relative'>
          <Link href={route.about.url}>
            <div className='absolute h-full w-full bg-[url("/images/main/home-explore-about.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
            <div className='relative h-full'>
              <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/about:bg-white group-hover/about:text-gray-700 group-hover/about:shadow-md'>
                {route.about.label}
              </div>
            </div>
          </Link>
        </div>
      </TExploreAbout>
      <TExplorePortfolio>
        <div className='group/portfolio relative col-span-2 md:col-span-1 md:row-span-2'>
          <Link href={route.portfolio.url}>
            <div className='absolute h-full w-full bg-[url("/images/main/home-explore-portfolio.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
            <div className='relative h-full'>
              <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/portfolio:bg-white group-hover/portfolio:text-gray-700 group-hover/portfolio:shadow-md'>
                {route.portfolio.label}
              </div>
            </div>
          </Link>
        </div>
      </TExplorePortfolio>
      <TExploreResources>
        <div className='group/resources relative col-span-2 md:col-span-1 md:row-span-2'>
          <Link href={route.resources.url}>
            <div className='absolute h-full w-full bg-[url("/images/main/home-explore-resources.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
            <div className='relative h-full'>
              <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/resources:bg-white group-hover/resources:text-gray-700 group-hover/resources:shadow-md'>
                {route.resources.label}
              </div>
            </div>
          </Link>
        </div>
      </TExploreResources>
      <TExploreContact>
        <div className='group/contact relative'>
          <Link href={route.contact.url}>
            <div className='absolute h-full w-full bg-[url("/images/main/home-explore-contact.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
            <div className='relative h-full'>
              <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/contact:bg-white group-hover/contact:text-gray-700 group-hover/contact:shadow-md'>
                {route.contact.label}
              </div>
            </div>
          </Link>
        </div>
      </TExploreContact>
      <TExploreGitHub>
        <div className='group/github relative md:col-span-2'>
          <Link href={route.github.url}>
            <div className='absolute h-full w-full bg-[url("/images/main/home-explore-github.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
            <div className='relative h-full'>
              <div className='absolute bottom-0 w-full px-2 py-1 text-start text-sm font-bold text-white duration-150 group-hover/github:bg-white group-hover/github:text-gray-700 group-hover/github:shadow-md'>
                {route.github.label}
              </div>
            </div>
          </Link>
        </div>
      </TExploreGitHub>
    </div>
  </TExplore>
);

export type {ExploreProps};
export default Explore;
