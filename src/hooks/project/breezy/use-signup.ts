import {
  type Form,
  setForm as setSignUpForm
} from '@redux/reducers/project/breezy/signup';
import {useDispatch, useSelector} from '@redux/hooks';

type UseSignUp = {
  form: Form;
  setForm: (form: Form) => void;
};

const useHome = (): UseSignUp => {
  const dispatch = useDispatch();

  const setForm = (form: Form): void => {
    dispatch(setSignUpForm(form));
  };

  return {
    form: useSelector((state) => state.project.breezy.signup.form),
    setForm: setForm
  };
};

export type {UseSignUp};
export default useHome;
