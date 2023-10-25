'use client';

import {Listbox} from '@headlessui/react';
import useHome from '@hooks/project/breezy/use-home';

type Mode = {
  label: string;
  color: string;
};

type StatusProps = {
  modes: Mode[];
};

const Status = ({modes}: StatusProps): JSX.Element => {
  const {profile} = useHome();
  return (
    <Listbox>
      <Listbox.Button
        className={`w-40 rounded-lg bg-white py-1 text-lg font-semibold ${
          modes.find(
            (mode): boolean => mode.label === profile.user.session.status
          )?.color ?? 'text-green-600'
        } hover:animate-shake hover:animate-duration-700 hover:animate-ease-in`}
      >
        {modes.find(
          (mode): boolean => mode.label === profile.user.session.status
        )?.label ?? 'online'}
      </Listbox.Button>
      <Listbox.Options className='absolute w-40 translate-y-[8.3rem] rounded-lg bg-white text-center shadow-md'>
        {modes.map(
          (mode): JSX.Element => (
            <Listbox.Option
              className={`cursor-pointer py-2 font-semibold ${mode.color} hover:rounded-lg hover:bg-gray-100`}
              key={mode.label}
              value={mode.label}
            >
              {mode.label}
            </Listbox.Option>
          )
        )}
      </Listbox.Options>
    </Listbox>
  );
};

export type {Mode, StatusProps};
export default Status;
