'use client';

import type {LegacyRef} from 'react';
import Recaptcha from 'react-google-recaptcha';

type RecaptchaV2Props = {
  ref: LegacyRef<Recaptcha>;
  onChange: (token: string | null) => void;
};

const RecaptchaV2 = ({ref, onChange}: RecaptchaV2Props): JSX.Element => (
  <Recaptcha
    className='place-self-center'
    ref={ref}
    sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V2_CHECKBOX}
    onChange={onChange}
  />
);

export type {RecaptchaV2Props};
export default RecaptchaV2;
