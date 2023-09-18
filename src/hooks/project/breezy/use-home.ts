import {
  type Menu,
  setMenu as setHomeMenu
} from '@redux/reducers/project/breezy/home';
import {useDispatch, useSelector} from '@redux/hooks';

type UseHome = {
  menu: Menu;
  setMenu: (menu: Menu) => void;
};

const useHome = (): UseHome => {
  const dispatch = useDispatch();

  const setMenu = (menu: Menu): void => {
    dispatch(setHomeMenu(menu));
  };

  return {
    menu: useSelector((state) => state.project.breezy.home.menu),
    setMenu: setMenu
  };
};

export type {UseHome};
export default useHome;
