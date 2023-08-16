import Image from 'next/image';
import {LazyLoad} from '@components/main/shared';

type SkillProps = {
  title: string;
  skills: string[];
};

const Skill = ({title, skills}: SkillProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-8'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <LazyLoad>
      <div className='flex animate-fade-down flex-wrap items-start justify-center gap-4 text-gray-600 animate-duration-700'>
        {skills.map(
          (skill): JSX.Element => (
            <Image
              key={skill}
              src={`/images/main/about-skill-${skill}.webp`}
              width={50}
              height={50}
              alt={`${skill} icon`}
            />
          )
        )}
      </div>
    </LazyLoad>
  </div>
);

export type {SkillProps};
export default Skill;
