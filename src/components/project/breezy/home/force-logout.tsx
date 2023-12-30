'use client';

import {Dialog} from '@components/project/breezy/shared';
import cookie from 'js-cookie';
import useDashboard from '@hooks/project/breezy/use-dashboard';
import {useRouter} from 'next/navigation';

type ForceLogoutProps = {
  dialog: {
    title: string;
    subtitle: string;
    confirm: string;
  };
};

const ForceLogout = ({dialog}: ForceLogoutProps): JSX.Element => {
  const {forceLogout} = useDashboard();
  const {push} = useRouter();

  const handleForceLogout = (): void => {
    cookie.remove(process.env.NEXT_PUBLIC_APP_COOKIE_BREEZY);
    push('/project/breezy/login');
  };

  return (
    <Dialog
      open={forceLogout}
      label={{
        title: dialog.title,
        subtitle: dialog.subtitle,
        confirm: dialog.confirm
      }}
      onConfirm={(): void => handleForceLogout()}
    />
  );
};

export type {ForceLogoutProps};
export default ForceLogout;
