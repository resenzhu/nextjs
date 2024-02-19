'use client';

import {Dialog} from '@components/project/breezy/shared';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type ServerErrorProps = {
  dialog: {
    title: string;
    subtitle: string;
    confirm: string;
  };
};

const ServerError = ({dialog}: ServerErrorProps): JSX.Element => {
  const {serverError, setServerError} = useDashboard();

  const handleToggleServerError = (show: boolean): void => {
    if (serverError !== show) {
      setServerError(show);
    }
  };

  return (
    <Dialog
      open={serverError}
      label={{
        title: dialog.title,
        subtitle: dialog.subtitle,
        confirm: dialog.confirm
      }}
      onConfirm={(): void => handleToggleServerError(false)}
    />
  );
};

export type {ServerErrorProps};
export default ServerError;
