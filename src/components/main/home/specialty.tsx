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
      loop: true,
      devMode: process.env.NODE_ENV !== 'production'
    }}
  />
);

export type {SpecialtyProps};
export default Specialty;
