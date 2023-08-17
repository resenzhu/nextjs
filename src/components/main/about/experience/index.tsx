import {LazyLoad} from '@components/main/shared';
import Timeline from '@components/main/about/experience/timeline';

type ExperienceProps = {
  title: string;
  experience: {
    title: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDetailedText: string;
  }[];
};

const Experience = ({title, experience}: ExperienceProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-8 pt-8'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <LazyLoad>
      <div className='animate-fade-left animate-duration-700'>
        <Timeline experience={experience} />
      </div>
    </LazyLoad>
  </div>
);

export type {ExperienceProps};
export default Experience;
