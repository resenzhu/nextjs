import {LazyLoad} from '@components/main/shared';

type MeProps = {
  title: string;
  content: string[];
};

const Me = ({title, content}: MeProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-8 md:mx-0'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <div className='space-y-6 text-center text-gray-600 md:mx-auto md:w-2/3 lg:w-1/2'>
      {content.map(
        (paragraph, index): JSX.Element => (
          <LazyLoad key={index}>
            <p
              className={`${
                index % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right'
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

export type {MeProps};
export default Me;
