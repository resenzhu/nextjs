import {LazyLoad, Tooltip} from '@components/main/shared';
import Image from 'next/image';

type SkillProps = {
  title: string;
  skills: string[];
};

const Skill = ({title, skills}: SkillProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-8 pt-8 md:mx-0'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <LazyLoad>
      <div className='mx-auto flex w-5/6 animate-fade-left flex-wrap items-start justify-center gap-6 text-gray-600 animate-duration-700 md:w-1/2'>
        {skills.map(
          (skill): JSX.Element => (
            <Tooltip
              key={skill.toLowerCase()}
              id={skill.toLowerCase()}
            >
              <Image
                className='place-self-center'
                src={`/images/main/about-skill-${skill.toLowerCase()}.webp`}
                width={50}
                height={50}
                alt={`${skill.toLowerCase()} icon`}
                data-tooltip-id={skill.toLowerCase()}
                data-tooltip-content={skill}
                data-tooltip-place='top'
              />
            </Tooltip>
          )
        )}
      </div>
    </LazyLoad>
  </div>
);

export type {SkillProps};
export default Skill;
