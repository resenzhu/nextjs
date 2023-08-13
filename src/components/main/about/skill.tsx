import {LazyLoad} from '@components/main/shared';

type SkillProps = {
  title: string;
};

const Skill = ({title}: SkillProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-8'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
  </div>
);

export default Skill;
