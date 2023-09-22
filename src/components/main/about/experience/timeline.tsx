'use client';

import {Chrono as ReactChrono} from 'react-chrono';
import useApp from '@hooks/main/use-app';

type TimelineProps = {
  experience: {
    title: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDetailedText: string;
  }[];
};

const Timeline = ({experience}: TimelineProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <ReactChrono
      items={experience}
      mode={viewport.width < 768 ? 'VERTICAL' : 'VERTICAL_ALTERNATING'}
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
};

export type {TimelineProps};
export default Timeline;
