'use client';

import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';
import type {ReactNode} from 'react';

type RecaptchaProps = {
  children: ReactNode;
};

const Recaptcha = ({children}: RecaptchaProps): JSX.Element => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V3}
  >
    {children}
  </GoogleReCaptchaProvider>
);

export type {RecaptchaProps};
export default Recaptcha;
