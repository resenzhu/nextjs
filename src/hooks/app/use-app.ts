import {
  type Locale,
  type IsOnline,
  type Viewport,
  setLocale as setAppLocale,
  setIsOnline as setAppIsOnline,
  setViewport as setAppViewport
} from '@redux/reducers/app';
import {useDispatch, useSelector} from '@redux/hooks';

type UseApp = {
  locale: Locale;
  isOnline: IsOnline;
  viewport: Viewport;
  setLocale: (locale: Locale) => void;
  setIsOnline: (online: IsOnline) => void;
  setViewport: (viewport: Viewport) => void;
};

const useApp = (): UseApp => {
  const dispatch = useDispatch();

  const setLocale = (locale: Locale): void => {
    dispatch(setAppLocale(locale));
  };

  const setIsOnline = (isOnline: IsOnline): void => {
    dispatch(setAppIsOnline(isOnline));
  };

  const setViewport = (viewport: Viewport): void => {
    dispatch(setAppViewport(viewport));
  };

  return {
    locale: useSelector((state) => state.app.locale),
    isOnline: useSelector((state) => state.app.isOnline),
    viewport: useSelector((state) => state.app.viewport),
    setLocale: setLocale,
    setIsOnline: setIsOnline,
    setViewport: setViewport
  };
};

export type {UseApp};
export default useApp;
