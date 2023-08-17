'use client';

import {Chrono as ReactChrono} from 'react-chrono';

type TimelineProps = {
  experience: {
    title: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDetailedText: string;
  }[];
};

const Timeline = ({experience}: TimelineProps): JSX.Element => (
  <ReactChrono
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
);

export default Timeline;
