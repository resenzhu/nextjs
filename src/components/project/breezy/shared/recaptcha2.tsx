'use client';

import Recaptcha from 'react-google-recaptcha';

type RecaptchaV2Props = {
  onChange: (token: string | null) => void;
};

const RecaptchaV2 = ({onChange}: RecaptchaV2Props): JSX.Element => (
  <Recaptcha
    className='place-self-center'
    sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V2_CHECKBOX}
    onChange={onChange}
  />
);

export type {RecaptchaV2Props};
export default RecaptchaV2;
