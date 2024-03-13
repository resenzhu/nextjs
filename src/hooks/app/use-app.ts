import {
  type Locale,
  type Online,
  type Viewport,
  setLocale as setAppLocale,
  setOnline as setAppOnline,
  setViewport as setAppViewport
} from '@redux/reducers/app';
import {useDispatch, useSelector} from '@redux/hooks';

type UseApp = {
  locale: Locale;
  online: Online;
  viewport: Viewport;
  setLocale: (locale: Locale) => void;
  setOnline: (online: Online) => void;
  setViewport: (viewport: Viewport) => void;
};

const useApp = (): UseApp => {
  const dispatch = useDispatch();

  const setLocale = (locale: Locale): void => {
    dispatch(setAppLocale(locale));
  };

  const setOnline = (online: Online): void => {
    dispatch(setAppOnline(online));
  };

  const setViewport = (viewport: Viewport): void => {
    dispatch(setAppViewport(viewport));
  };

  return {
    locale: useSelector((state) => state.app.locale),
    online: useSelector((state) => state.app.online),
    viewport: useSelector((state) => state.app.viewport),
    setLocale: setLocale,
    setOnline: setOnline,
    setViewport: setViewport
  };
};

export type {UseApp};
export default useApp;
