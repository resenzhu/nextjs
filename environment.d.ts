declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_APP_SOCKET: string;
    NEXT_TELEMETRY_DISABLED: number;
  }
}
