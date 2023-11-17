import {
  type Online,
  type Viewport,
  setOnline as setAppOnline,
  setViewport as setAppViewport
} from '@redux/reducers/app';
import {useDispatch, useSelector} from '@redux/hooks';

type UseApp = {
  online: Online;
  viewport: Viewport;
  setOnline: (online: Online) => void;
  setViewport: (viewport: Viewport) => void;
};

const useApp = (): UseApp => {
  const dispatch = useDispatch();

  const setOnline = (online: Online): void => {
    dispatch(setAppOnline(online));
  };

  const setViewport = (viewport: Viewport): void => {
    dispatch(setAppViewport(viewport));
  };

  return {
    online: useSelector((state) => state.main.app.online),
    viewport: useSelector((state) => state.main.app.viewport),
    setOnline: setOnline,
    setViewport: setViewport
  };
};

export type {UseApp};
export default useApp;
