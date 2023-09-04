declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_APP_SOCKET: string;
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V2_CHECKBOX: string;
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V3: string;
    NEXT_TELEMETRY_DISABLED: number;
  }
}
