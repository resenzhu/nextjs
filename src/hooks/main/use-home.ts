import {
  type Explore,
  setExplore as setHomeExplore
} from '@redux/reducers/main/home';
import {useDispatch, useSelector} from '@redux/hooks';

type UseHome = {
  explore: Explore;
  setExplore: (explore: Explore) => void;
};

const useHome = (): UseHome => {
  const dispatch = useDispatch();

  const setExplore = (explore: Explore): void => {
    dispatch(setHomeExplore(explore));
  };

  return {
    explore: useSelector((state) => state.main.home.explore),
    setExplore: setExplore
  };
};

export type {UseHome};
export default useHome;
