import {
  type Viewport,
  setViewport as setAppViewport
} from '@redux/reducers/main/app';
import {useDispatch, useSelector} from '@redux/hooks';

type UseApp = {
  viewport: Viewport;
  setViewport: (viewport: Viewport) => void;
};

const useApp = (): UseApp => {
  const dispatch = useDispatch();

  const setViewport = (viewport: Viewport): void => {
    dispatch(setAppViewport(viewport));
  };

  return {
    viewport: useSelector((state) => state.main.app.viewport),
    setViewport: setViewport
  };
};

export type {UseApp};
export default useApp;
