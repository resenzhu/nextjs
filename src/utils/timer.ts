import type {EffectCallback} from 'react';

export const debounce = (
  callback: (...args: any[]) => any,
  delay: number
): EffectCallback => {
  let timer: ReturnType<typeof setTimeout> | number = 0;

  return (): void => {
    clearTimeout(timer);

    timer = setTimeout((): void => {
      timer = 0;
      callback.apply(null);
    }, delay);
  };
};
