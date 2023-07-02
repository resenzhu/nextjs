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
  <div className='h-[70vh]'>
    <div className='absolute h-[70vh] w-full bg-[url("/images/main/shared/background.webp")] bg-cover bg-right bg-no-repeat brightness-50 contrast-125'></div>
    <div className='absolute h-[70vh] w-full bg-gray-700 opacity-70'></div>
    <div className='relative mx-4'>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{description}</div>
      <div>SCROLL ICON</div>
    </div>
  </div>
);

export type {JumbotronProps};
export default Jumbotron;
