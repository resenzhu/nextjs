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
  <section className='h-96'>
    <div className='absolute h-96 w-full bg-[url("/images/main/shared-jumbotron.webp")] bg-cover bg-right bg-no-repeat brightness-50 contrast-125'></div>
    <div className='absolute h-96 w-full bg-gray-700 opacity-70'></div>
    <div className='relative mx-4 flex h-full flex-col space-y-10 py-12 text-center'>
      <div className='space-y-2'>
        <div className='text-4xl font-extrabold tracking-wide text-yellow-300'>
          {title}
        </div>
        <div className='mx-8 text-lg font-bold italic text-gray-100'>
          {subtitle}
        </div>
      </div>
      <div className='text-lg font-light text-white'>{description}</div>
    </div>
  </section>
);

export type {JumbotronProps};
export default Jumbotron;
