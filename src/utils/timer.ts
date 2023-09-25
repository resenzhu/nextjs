import type {EffectCallback} from 'react';

export const debounce = (
  callback: (...args: any[]) => any,
  delay: number
): EffectCallback => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (): void => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout((): void => {
      if (timer) {
        clearTimeout(timer);
      }
      callback.apply(null);
    }, delay);
  };
};
