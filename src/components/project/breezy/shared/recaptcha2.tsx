'use client';

import type {LegacyRef} from 'react';
import Recaptcha from 'react-google-recaptcha';

type RecaptchaV2Props = {
  reference: LegacyRef<Recaptcha>;
  asyncScriptOnLoad: () => void;
  onChange: (captchaToken: string | null) => void;
};

const RecaptchaV2 = ({
  reference,
  asyncScriptOnLoad,
  onChange
}: RecaptchaV2Props): JSX.Element => (
  <Recaptcha
    ref={reference}
    sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V2_CHECKBOX}
    asyncScriptOnLoad={asyncScriptOnLoad}
    onChange={onChange}
  />
);

export type {RecaptchaV2Props};
export default RecaptchaV2;
