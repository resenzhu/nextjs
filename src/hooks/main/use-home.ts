import {
  type Section,
  setSection as setHomeSection
} from '@redux/reducers/main/home';
import {useDispatch, useSelector} from '@redux/hooks';

type UseHome = {
  section: Section;
  setSection: (section: Section) => void;
};

const useHome = (): UseHome => {
  const dispatch = useDispatch();

  const setSection = (section: Section): void => {
    dispatch(setHomeSection(section));
  };

  return {
    section: useSelector((state) => state.main.home.section),
    setSection: setSection
  };
};

export type {UseHome};
export default useHome;
