import {
  Sidenav,
  setSidenav as setNavbarSidenav
} from '@redux/reducers/main/navbar';
import {useDispatch, useSelector} from '@redux/hooks';

type UseNavbar = {
  sidenav: Sidenav;
  setSidenav: (sidenav: Sidenav) => void;
};

const useNavbar = (): UseNavbar => {
  const dispatch = useDispatch();

  const setSidenav = (sidenav: Sidenav): void => {
    dispatch(setNavbarSidenav(sidenav));
  };

  return {
    sidenav: useSelector((state) => state.main.navbar.sidenav),
    setSidenav: setSidenav
  };
};

export type {UseNavbar};
export default useNavbar;
