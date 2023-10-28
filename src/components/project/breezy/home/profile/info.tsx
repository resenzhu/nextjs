'use client';

import useHome from '@hooks/project/breezy/use-home';

const Info = (): JSX.Element => {
  const {profile} = useHome();
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <div className='flex h-20 w-20 items-center justify-center rounded-full border-4 bg-purple-500 text-3xl font-semibold tracking-wider text-white'>
        {`${
          profile.user.displayName.split(' ')[0]?.charAt(0).toUpperCase() ?? ''
        }${
          profile.user.displayName.split(' ')[1]?.charAt(0).toUpperCase() ?? ''
        }`}
      </div>
      <div className='text-center text-white'>
        <div className='text-lg font-bold'>{profile.user.displayName}</div>
        <div className='font-light'>{`@${profile.user.username}`}</div>
      </div>
    </div>
  );
};

export default Info;
