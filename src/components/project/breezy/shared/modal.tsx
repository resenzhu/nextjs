const Modal = (): JSX.Element => {
  return (
    <div className='fixed left-0 top-0'>
      <div className='absolute h-screen w-screen bg-black opacity-60'></div>
      <div className='relative bg-white'>
        ABC
      </div>
    </div>
  );
};

export default Modal;
