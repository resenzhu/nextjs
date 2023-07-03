type JumbotronProps = {
  title: string;
  subtitle: string;
  description: string;
};

const Jumbotron = ({
  title,
  subtitle,
  description
}: JumbotronProps): JSX.Element => (
  <div className='h-96'>
    <div className='absolute h-96 w-full bg-[url("/images/main/shared/background.webp")] bg-cover bg-right bg-no-repeat brightness-50 contrast-125'></div>
    <div className='absolute h-96 w-full bg-gray-700 opacity-70'></div>
    <div className='relative mx-4 flex h-full flex-col justify-between py-12 text-center'>
      <div className='space-y-3'>
        <div className='text-4xl font-extrabold tracking-wider text-yellow-300'>
          {title}
        </div>
        <div className='text-lg font-bold italic text-gray-200'>{subtitle}</div>
      </div>
      <div className=' text-lg font-light text-white'>{description}</div>
    </div>
  </div>
);

export type {JumbotronProps};
export default Jumbotron;
