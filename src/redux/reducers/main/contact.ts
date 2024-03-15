import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Form = {
  name: string;
  email: string;
  message: string;
  honeypot: string;
  recaptcha: string;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string;
};

type State = {
  form: Form;
};

type Reducers = {
  setForm: (state: State, action: PayloadAction<Form>) => void;
};

const name: string = 'contact';

const initialState: State = {
  form: {
    name: '',
    email: '',
    message: '',
    honeypot: '',
    recaptcha: '',
    isSubmitting: false,
    isSuccess: false,
    error: ''
  }
};

const reducers: Reducers = {
  setForm: (state, action) => {
    if (state.form !== action.payload) {
      state.form = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export {initialState};
export type {Form};
export const {setForm} = slice.actions;
export default slice.reducer;
