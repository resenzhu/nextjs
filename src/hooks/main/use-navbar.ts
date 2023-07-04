import {
  type ShowSidenav,
  setShowSidenav as setNavbarShowSidenav
} from '@redux/reducers/main/navbar';
import {useDispatch, useSelector} from '@redux/hooks';

type UseNavbar = {
  showSidenav: ShowSidenav;
  setShowSidenav: (showSidenav: ShowSidenav) => void;
};

const useNavbar = (): UseNavbar => {
  const dispatch = useDispatch();

  const setShowSidenav = (showSidenav: ShowSidenav): void => {
    dispatch(setNavbarShowSidenav(showSidenav));
  };

  return {
    showSidenav: useSelector((state) => state.main.navbar.showSidenav),
    setShowSidenav: setShowSidenav
  };
};

export type {UseNavbar};
export default useNavbar;
