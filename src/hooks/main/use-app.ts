import {
  type Sidebar,
  type Viewport,
  setSidebar as setAppSidebar,
  setViewport as setAppViewport
} from '@redux/reducers/main/app';
import {useDispatch, useSelector} from '@redux/hooks';

type UseApp = {
  viewport: Viewport;
  sidebar: Sidebar;
  setViewport: (viewport: Viewport) => void;
  setSidebar: (sidebar: Sidebar) => void;
};

const useApp = (): UseApp => {
  const dispatch = useDispatch();

  const setViewport = (viewport: Viewport): void => {
    dispatch(setAppViewport(viewport));
  };

  const setSidebar = (sidebar: Sidebar): void => {
    dispatch(setAppSidebar(sidebar));
  };

  return {
    viewport: useSelector((state) => state.main.app.viewport),
    sidebar: useSelector((state) => state.main.app.sidebar),
    setViewport: setViewport,
    setSidebar: setSidebar
  };
};

export type {UseApp};
export default useApp;
