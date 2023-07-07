import {
  ShowBackdrop,
  setShowBackdrop as setAppShowBackdrop
} from '@redux/reducers/main/app';
import {useDispatch, useSelector} from '@redux/hooks';

type UseApp = {
  showBackdrop: ShowBackdrop;
  setShowBackdrop: (showBackdrop: ShowBackdrop) => void;
};

const useApp = (): UseApp => {
  const dispatch = useDispatch();

  const setShowBackdrop = (showBackdrop: ShowBackdrop): void => {
    dispatch(setAppShowBackdrop(showBackdrop));
  };

  return {
    showBackdrop: useSelector((state) => state.main.app.showBackdrop),
    setShowBackdrop: setShowBackdrop
  };
};

export type {UseApp};
export default useApp;
