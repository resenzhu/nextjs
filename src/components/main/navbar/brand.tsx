import Image from 'next/image';
import Link from 'next/link';

type BrandProps = {
  logo: string;
  label: string;
};

const Brand = ({logo, label}: BrandProps): JSX.Element => (
  <Link
    className='flex items-center justify-center'
    href='/'
  >
    <Image
      className='mr-2 rounded-md'
      src={logo}
      width={30}
      height={30}
      alt='web brand logo'
    />
    <span className='mb-auto text-xl font-bold text-gray-700'>{label}</span>
  </Link>
);

export type {BrandProps};
export default Brand;
