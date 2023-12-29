'use client';

import {object, string} from 'yup';
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Listbox} from '@headlessui/react';
import {breezySocket} from '@utils/socket';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {sanitize} from 'isomorphic-dompurify';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type Mode = {
  label: string;
  color: string;
};

type StatusProps = {
  modes: Mode[];
};

type UpdateUserStatusReq = {
  status: 'online' | 'appear away' | 'appear offline';
};

type UpdateUserStatusRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {
    user: {
      session: {
        lastOnline: string;
      };
    };
  };
};

const Status = ({modes}: StatusProps): JSX.Element => {
  const {profile, setForceLogout, setProfile} = useDashboard();
  const [rendered, setRendered] = useState<boolean>(false);

  const handleUpdateUserStatus = (status: string): void => {
    if (
      profile.user.session.status.current !== status &&
      !profile.user.session.status.updating
    ) {
      setProfile({
        ...profile,
        user: {
          ...profile.user,
          session: {
            ...profile.user.session,
            status: {
              ...profile.user.session.status,
              previous: profile.user.session.status.current,
              current: status as typeof profile.user.session.status.current,
              updating: true
            }
          }
        }
      });
    }
  };

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered && profile.user.session.status.updating) {
      const requestSchema = object().shape({
        status: string()
          .ensure()
          .required()
          .oneOf(['online', 'appear away', 'appear offline'])
      });
      const request: UpdateUserStatusReq = {
        status: sanitize(profile.user.session.status.current).trim() as
          | 'online'
          | 'appear away'
          | 'appear offline'
      };
      requestSchema.validate(request, {abortEarly: false}).then((): void => {
        breezySocket
          .timeout(60000)
          .emit(
            'update user status',
            request,
            (socketError: Error, response: UpdateUserStatusRes): void => {
              setForceLogout(
                response && !response.success && response.error.code === 500
              );
              setProfile({
                ...profile,
                user: {
                  ...profile.user,
                  session: {
                    ...profile.user.session,
                    status: {
                      ...profile.user.session.status,
                      previous:
                        socketError || (response && !response.success)
                          ? profile.user.session.status.previous
                          : profile.user.session.status.current,
                      current:
                        socketError || (response && !response.success)
                          ? profile.user.session.status.previous
                          : profile.user.session.status.current,
                      updating: false
                    },
                    lastOnline:
                      socketError || (response && !response.success)
                        ? profile.user.session.lastOnline
                        : response.data.user.session.lastOnline
                  }
                }
              });
            }
          );
      });
    }
  }, [rendered, profile]);

  return (
    <Listbox onChange={(status): void => handleUpdateUserStatus(status)}>
      <Listbox.Button
        className={`w-56 rounded-lg bg-white py-1 text-lg font-semibold ${
          modes.find(
            (mode): boolean =>
              mode.label === profile.user.session.status.current
          )?.color ?? 'text-green-600'
        }`}
      >
        {modes.find(
          (mode): boolean => mode.label === profile.user.session.status.current
        )?.label ?? 'online'}
        <div className='absolute -translate-y-full'>
          <FontAwesomeIcon
            className='ml-3 text-sm text-gray-500'
            icon={faAngleDown}
          />
        </div>
      </Listbox.Button>
      <Listbox.Options className='absolute w-56 translate-y-[9.5rem] rounded-lg bg-white text-center shadow-md'>
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

export type {Mode, StatusProps, UpdateUserStatusReq, UpdateUserStatusRes};
export default Status;
