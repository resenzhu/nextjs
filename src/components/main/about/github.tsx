import {Button, LazyLoad} from '@components/main/shared';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type Repository = {
  icon: IconDefinition;
  label: string;
  url: string;
};

type GitHubProps = {
  title: string;
  content: string[];
  repositories: Repository[];
};

const GitHub = ({title, content, repositories}: GitHubProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-10 md:mx-0'>
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
      <LazyLoad>
        <div className='space-y-4'>
          {repositories.map(
            (repository): JSX.Element => (
              <div
                className='mx-auto w-fit animate-fade animate-duration-700'
                key={repository.url}
              >
                <Link
                  href={repository.url}
                  target='_blank'
                >
                  <Button className='space-x-3 px-5 py-3 font-normal'>
                    <FontAwesomeIcon
                      className='text-2xl'
                      icon={repository.icon}
                    />
                    <span>{repository.label}</span>
                  </Button>
                </Link>
              </div>
            )
          )}
        </div>
      </LazyLoad>
    </div>
  </div>
);

export type {Repository, GitHubProps};
export default GitHub;