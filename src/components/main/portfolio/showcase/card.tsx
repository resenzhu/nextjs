import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  name: string;
  description: string;
  url: string;
};

const Card = ({name, description, url}: CardProps): JSX.Element => (
  <div className='border-2 border-b-0 shadow-lg md:border-[.0625rem]'>
    <Image
      className='w-full'
      src='/images/main/portfolio-project-placeholder.webp'
      width={325}
      height={325}
      alt={`${name.toLowerCase()} thumbnail`}
    />
    <div className='mx-4 space-y-6 py-6 md:mx-6 md:space-y-5 md:py-4'>
      <div className='space-y-3'>
        <div className='text-xl font-bold'>{name.toUpperCase()}</div>
        <p className='tracking-wide md:text-xs'>{description}</p>
      </div>
      <div>
        <Link href={url}>
          <button
            className='bg-cyan-600 px-5 py-3 font-bold tracking-wider text-white duration-150 active:bg-cyan-700 md:text-xs'
            type='button'
          >
            VIEW PROJECT
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export type {CardProps};
export default Card;