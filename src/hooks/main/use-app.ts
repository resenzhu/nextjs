import {
  type Sidenav,
  type Viewport,
  setSidenav as setAppSidenav,
  setViewport as setAppViewport
} from '@redux/reducers/main/app';
import {useDispatch, useSelector} from '@redux/hooks';

type UseApp = {
  viewport: Viewport;
  sidenav: Sidenav;
  setViewport: (viewport: Viewport) => void;
  setSidenav: (sidenav: Sidenav) => void;
};

const useApp = (): UseApp => {
  const dispatch = useDispatch();

  const setViewport = (viewport: Viewport): void => {
    dispatch(setAppViewport(viewport));
  };

  const setSidenav = (sidenav: Sidenav): void => {
    dispatch(setAppSidenav(sidenav));
  };

  return {
    viewport: useSelector((state) => state.main.app.viewport),
    sidenav: useSelector((state) => state.main.app.sidenav),
    setViewport: setViewport,
    setSidenav: setSidenav
  };
};

export type {UseApp};
export default useApp;
