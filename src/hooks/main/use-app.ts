import {
  type Online,
  type Sidenav,
  type Viewport,
  setOnline as setAppOnline,
  setSidenav as setAppSidenav,
  setViewport as setAppViewport
} from '@redux/reducers/main/app';
import {useDispatch, useSelector} from '@redux/hooks';

type UseApp = {
  online: Online,
  viewport: Viewport;
  sidenav: Sidenav;
  setOnline: (online: Online) => void;
  setViewport: (viewport: Viewport) => void;
  setSidenav: (sidenav: Sidenav) => void;
};

const useApp = (): UseApp => {
  const dispatch = useDispatch();

  const setOnline = (online: Online): void => {
    dispatch(setAppOnline(online));
  };

  const setViewport = (viewport: Viewport): void => {
    dispatch(setAppViewport(viewport));
  };

  const setSidenav = (sidenav: Sidenav): void => {
    dispatch(setAppSidenav(sidenav));
  };

  return {
    online: useSelector((state) => state.main.app.online),
    viewport: useSelector((state) => state.main.app.viewport),
    sidenav: useSelector((state) => state.main.app.sidenav),
    setOnline: setOnline,
    setViewport: setViewport,
    setSidenav: setSidenav
  };
};

export type {UseApp};
export default useApp;
