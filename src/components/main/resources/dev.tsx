import {LazyLoad} from '@components/main/shared';

type DevProps = {
  content: string[];
};

const Dev = ({content}: DevProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-8 md:mx-0'>
    <div className='space-y-6 text-center text-gray-600 md:mx-auto md:w-2/3 lg:w-1/2'>
      {content.map(
        (paragraph, index): JSX.Element => (
          <LazyLoad key={index}>
            <p
              className={`${
                index % 2 === 0 ? 'animate-fade-right' : 'animate-fade-left'
              } animate-duration-700`}
            >
              {paragraph}
            </p>
          </LazyLoad>
        )
      )}
    </div>
  </div>
);

export type {DevProps};
export default Dev;
