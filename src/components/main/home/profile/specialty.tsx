'use client';

import Typewriter from 'typewriter-effect';

type SpecialtyProps = {
  title: string | string[];
};

const Specialty = ({title}: SpecialtyProps): JSX.Element => (
  <Typewriter
    options={{
      strings: title,
      autoStart: true,
      loop: true
    }}
  />
);

export type {SpecialtyProps};
export default Specialty;
