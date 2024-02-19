'use client';

import useDashboard from '@hooks/project/breezy/use-dashboard';

const Info = (): JSX.Element => {
  const {profile} = useDashboard();
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <div className='flex h-20 w-20 items-center justify-center rounded-full border-4 bg-purple-500 text-3xl font-semibold tracking-wider text-white'>
        {profile.user.displayName
          .split(' ')
          .map((word): string => word[0] ?? '')
          .join('')
          .slice(0, 2)
          .toUpperCase() ?? ''}
      </div>
      <div className='text-center text-white'>
        <div className='text-lg font-bold'>{profile.user.displayName}</div>
        <div className='font-light'>{`@${profile.user.userName}`}</div>
      </div>
    </div>
  );
};

export default Info;
