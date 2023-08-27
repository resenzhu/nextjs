import {LazyLoad} from '@components/main/shared';

type ProjectProps = {
  title: string;
  projects: {
    name: string;
    slogan: string;
    description: string;
    url: string;
  }[];
};

const Project = ({title, projects}: ProjectProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-8 md:mx-0'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <div className='space-y-6 text-center text-gray-600 md:mx-auto md:w-2/3 lg:w-1/2'>
      {projects[0]!.name}
    </div>
  </div>
);

export type {ProjectProps};
export default Project;
