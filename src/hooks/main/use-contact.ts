import {
  type Form,
  setForm as setContactForm
} from '@redux/reducers/main/contact';
import {useDispatch, useSelector} from '@redux/hooks';

type UseContact = {
  form: Form;
  setForm: (form: Form) => void;
};

const useContact = (): UseContact => {
  const dispatch = useDispatch();

  const setForm = (form: Form): void => {
    dispatch(setContactForm(form));
  };

  return {
    form: useSelector((state) => state.main.contact.form),
    setForm: setForm
  };
};

export type {UseContact};
export default useContact;
