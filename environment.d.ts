declare namespace NodeJS {
  interface ProcessEnv {
    JWT_KEY_PUBLIC_BASE64: string;
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_APP_SOCKET: string;
    NEXT_PUBLIC_APP_COOKIE_BREEZY: string;
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V2_CHECKBOX: string;
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V3: string;
    NEXT_TELEMETRY_DISABLED: number;
  }
}
