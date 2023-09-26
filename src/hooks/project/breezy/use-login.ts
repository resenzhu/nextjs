import {
  type Form,
  setForm as setLoginForm
} from '@redux/reducers/project/breezy/login';
import {useDispatch, useSelector} from '@redux/hooks';

type UseLogin = {
  form: Form;
  setForm: (form: Form) => void;
};

const useLogin = (): UseLogin => {
  const dispatch = useDispatch();

  const setForm = (form: Form): void => {
    dispatch(setLoginForm(form));
  };

  return {
    form: useSelector((state) => state.project.breezy.login.form),
    setForm: setForm
  };
};

export type {UseLogin};
export default useLogin;
