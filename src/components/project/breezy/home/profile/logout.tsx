'use client';

import {Button, Dialog} from '@components/project/breezy/shared';
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {breezySocket} from '@utils/socket';
import cookie from 'js-cookie';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import useDashboard from '@hooks/project/breezy/use-dashboard';
import {useRouter} from 'next/navigation';

type LogoutProps = {
  label: string;
  dialog: {
    title: string;
    subtitle: string;
    cancel: string;
    confirm: string;
  };
};

type LogoutRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {};
};

const Logout = ({label, dialog}: LogoutProps): JSX.Element => {
  const [confirmLogout, setConfirmLogout] = useState<boolean>(false);
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const {setForceLogout} = useDashboard();
  const {push} = useRouter();

  const handleToggleConfirmLogout = (show: boolean): void => {
    if (confirmLogout !== show) {
      setConfirmLogout(show);
    }
  };

  const handleLogout = (): void => {
    if (!loggingOut) {
      setLoggingOut(true);
      setConfirmLogout(false);
    }
  };

  useEffect((): void => {
    if (loggingOut) {
      breezySocket
        .timeout(60000)
        .emit('logout', (socketError: Error, response: LogoutRes): void => {
          setLoggingOut(false);
          if (!socketError && response && response.success) {
            cookie.remove(process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY);
            push('/project/breezy/login');
          } else if (
            response &&
            !response.success &&
            response.error.code === 500
          ) {
            setForceLogout(true);
          }
        });
    }
  }, [loggingOut]);

  return (
    <>
      <Button
        style='profile'
        onClick={(): void => handleToggleConfirmLogout(true)}
      >
        <div className='text-center'>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </div>
        <span className='text-lg font-semibold'>{label}</span>
      </Button>
      <Dialog
        open={confirmLogout}
        label={{
          title: dialog.title,
          subtitle: dialog.subtitle,
          cancel: dialog.cancel,
          confirm: dialog.confirm
        }}
        onClose={(): void => handleToggleConfirmLogout(false)}
        onConfirm={(): void => handleLogout()}
      />
    </>
  );
};

export type {LogoutProps};
export default Logout;
