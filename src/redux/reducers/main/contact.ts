import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Form = {
  name: string;
  email: string;
  message: string;
  honeypot: string;
  recaptcha: string;
  submitting: boolean;
  error: string;
  success: string;
};

type State = {
  form: Form;
};

type Reducers = {
  setForm: (state: State, action: PayloadAction<Form>) => void;
};

const name: string = 'home';

const initialState: State = {
  form: {
    name: '',
    email: '',
    message: '',
    honeypot: '',
    recaptcha: '',
    submitting: false,
    error: '',
    success: ''
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
