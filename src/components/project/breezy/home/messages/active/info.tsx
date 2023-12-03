const Info = (): JSX.Element => (
  <>
    <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 font-semibold tracking-wider text-white'>
      {`${
        'Batman'.split(' ')[0]?.charAt(0).toUpperCase() ?? ''
      }${
        'Batman'.split(' ')[1]?.charAt(0).toUpperCase() ?? ''
      }`}
    </div>
    <div className='flex flex-col'>
      <div className='font-bold text-gray-700'>Batman</div>
      <div className='text-sm font-semibold text-gray-500'>last seen yesterday at 06:02 PM</div>
    </div>
  </>
);

export default Info;
