import Timeline, {
  type TimelineProps
} from '@components/main/about/experience/timeline';
import {LazyLoad} from '@components/main/shared';

type ExperienceProps = {
  title: string;
  experiences: TimelineProps['experiences'];
};

const Experience = ({title, experiences}: ExperienceProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-8 pt-8 md:mx-0'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <LazyLoad>
      <div className='animate-fade-left animate-duration-700 md:mx-auto md:w-5/6'>
        <Timeline experiences={experiences} />
      </div>
    </LazyLoad>
  </div>
);

export type {ExperienceProps};
export default Experience;
