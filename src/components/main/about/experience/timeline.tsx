'use client';

import {Chrono} from 'react-chrono';
import useApp from '@hooks/app/use-app';

type TimelineProps = {
  experiences: {
    title: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDetailedText: string;
  }[];
};

const Timeline = ({experiences}: TimelineProps): JSX.Element => {
  const {viewport} = useApp();
  return (
    <Chrono
      items={experiences}
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
      disableInteraction={true}
      disableNavOnKey={true}
      disableToolbar={true}
      enableBreakPoint={false}
      enableLayoutSwitch={false}
      enableQuickJump={false}
      hideControls={true}
      scrollable={false}
      useReadMore={false}
    />
  );
};

export type {TimelineProps};
export default Timeline;
