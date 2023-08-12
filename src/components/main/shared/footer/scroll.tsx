'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';

type ScrollProps = {
  icon: IconDefinition;
};

const Scroll = ({icon}: ScrollProps): JSX.Element => {
  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className='absolute -translate-y-[80%] rounded-full border-4 border-white bg-white text-5xl text-cyan-700'
      type='button'
      onClick={(): void => handleScrollToTop()}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export type {ScrollProps};
export default Scroll;
