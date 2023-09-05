'use client';

import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';
import type {ReactNode} from 'react';

type RecaptchaV3Props = {
  children: ReactNode;
};

const RecaptchaV3 = ({children}: RecaptchaV3Props): JSX.Element => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V3}
  >
    {children}
  </GoogleReCaptchaProvider>
);

export type {RecaptchaV3Props};
export default RecaptchaV3;
