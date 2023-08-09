'use client';

import Typewriter from 'typewriter-effect';

type SpecialtyProps = {
  titles: string[];
};

const Specialty = ({titles}: SpecialtyProps): JSX.Element => (
  <Typewriter
    options={{
      strings: titles,
      autoStart: true,
      loop: true
    }}
  />
);

export type {SpecialtyProps};
export default Specialty;
