import Card from '@components/main/portfolio/project/card';
import {LazyLoad} from '@components/main/shared';

type ProjectProps = {
  title: string;
  projects: {
    name: string;
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
    <div className='flex animate-fade flex-col space-y-6 text-center text-gray-600 animate-duration-700 md:flex-row md:flex-wrap md:justify-center md:gap-4 md:space-y-0'>
      {projects.map(
        (project, index): JSX.Element => (
          <div
            className='md:w-2/5 lg:w-1/5'
            key={index}
          >
            <Card
              name={project.name}
              description={project.description}
              url={project.url}
            />
          </div>
        )
      )}
    </div>
  </div>
);

export type {ProjectProps};
export default Project;
