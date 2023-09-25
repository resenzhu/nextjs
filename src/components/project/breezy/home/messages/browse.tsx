'use client';

type BrowseProps = {
  label: string;
};

const Browse = ({label}: BrowseProps): JSX.Element => (
  <button
    className='rounded-lg bg-purple-500 px-5 py-2 font-semibold text-white duration-150 hover:bg-purple-600'
    type='button'
  >
    {label}
  </button>
);

export type {BrowseProps};
export default Browse;
