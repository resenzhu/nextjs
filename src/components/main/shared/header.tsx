type HeaderProps = {
  title: string;
  subtitle: string;
  description: string;
};

const Header = ({title, subtitle, description}: HeaderProps): JSX.Element => (
  <div className='relative grid h-80 animate-bounce animate-fade-down animate-duration-700 md:h-60 lg:h-52'>
    <div className='absolute h-full w-full bg-[url("/images/main/home-profile-background.webp")] bg-cover bg-center bg-no-repeat brightness-50 contrast-125'></div>
    <div className='absolute h-full w-full bg-cyan-600 opacity-40'></div>
    <div className='relative mx-4 flex flex-col space-y-6 self-center text-center'>
      <div className='space-y-1'>
        <div className='text-3xl font-extrabold tracking-widest text-amber-400'>
          {title}
        </div>
        <div className='mx-auto w-5/6 text-lg font-bold text-gray-100 lg:w-1/2'>
          {subtitle}
        </div>
      </div>
      <div className='text-md mx-auto w-5/6 flex-1 font-light text-white lg:w-1/2'>
        {description}
      </div>
    </div>
  </div>
);

export type {HeaderProps};
export default Header;
