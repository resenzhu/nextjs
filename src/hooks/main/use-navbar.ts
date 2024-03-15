import {
  type IsSideNavOpen,
  setIsSideNavOpen as setNavbarIsSideNavOpen
} from '@redux/reducers/main/navbar';
import {useDispatch, useSelector} from '@redux/hooks';

type UseNavbar = {
  isSideNavOpen: IsSideNavOpen;
  setIsSideNavOpen: (isSideNavOpen: IsSideNavOpen) => void;
};

const useNavbar = (): UseNavbar => {
  const dispatch = useDispatch();

  const setIsSideNavOpen = (isSideNavOpen: IsSideNavOpen): void => {
    dispatch(setNavbarIsSideNavOpen(isSideNavOpen));
  };

  return {
    isSideNavOpen: useSelector((state) => state.main.navbar.isSideNavOpen),
    setIsSideNavOpen: setIsSideNavOpen
  };
};

export type {UseNavbar};
export default useNavbar;
