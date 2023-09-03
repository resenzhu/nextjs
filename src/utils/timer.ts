import {type EffectCallback, useRef} from 'react';

export const debounce = (
  callback: (...args: any[]) => any,
  delay: number
): EffectCallback => {
  let timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (): void => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout((): void => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      callback.apply(null);
    }, delay);
  };
};
