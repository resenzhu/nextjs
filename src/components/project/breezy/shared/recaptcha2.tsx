'use client';

import Recaptcha from 'react-google-recaptcha';

const RecaptchaV2 = (): JSX.Element => (
  <Recaptcha
    className='place-self-center'
    sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V2_CHECKBOX}
  />
);

export default RecaptchaV2;
