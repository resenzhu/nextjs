'use client';

import useApp from '@hooks/main/use-app';

type OnlineProps = {
  onlineLabel: string;
  offlineLabel: string;
};

const Online = ({onlineLabel, offlineLabel}: OnlineProps): JSX.Element => {
  const {online: appOnline} = useApp();

  return (
    <span className={`${appOnline ? 'bg-green-600' : 'bg-red-500'} px-2 py-1`}>
      {appOnline ? onlineLabel : offlineLabel}
    </span>
  );
};

export type {OnlineProps};
export default Online;
