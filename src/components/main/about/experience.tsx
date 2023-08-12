'use client';

import {Chrono} from 'react-chrono';
import {LazyLoad} from '@components/main/shared';

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
  <div className='mx-4 flex flex-col items-center space-y-6 pt-8'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <LazyLoad>
      <Chrono
        items={experience}
        mode='VERTICAL'
        timelinePointShape='diamond'
        theme={{
          primary: '#0891b2',
          secondary: '#ffffff',
          cardBgColor: '#ffffff',
          titleColor: '#0891b2',
          cardTitleColor: '#0891b2',
          cardSubtitleColor: '#191919'
        }}
        activeItemIndex={999}
        disableAutoScrollOnClick={true}
        disableClickOnCircle={true}
        disableNavOnKey={true}
        enableBreakPoint={false}
        hideControls={true}
        scrollable={false}
        useReadMore={false}
      />
    </LazyLoad>
  </div>
);

export type {ExperienceProps};
export default Experience;
