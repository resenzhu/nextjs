import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Form = {
  userName: string;
  password: string;
  reveal: boolean;
  honeypot: string;
  recaptcha: string;
  submitting: boolean;
  error: {
    field: string | null;
    message: string;
  };
};

type State = {
  form: Form;
};

type Reducers = {
  setForm: (state: State, action: PayloadAction<Form>) => void;
};

const name: string = 'login';

const initialState: State = {
  form: {
    userName: '',
    password: '',
    reveal: false,
    honeypot: '',
    recaptcha: '',
    submitting: false,
    error: {
      field: null,
      message: ''
    }
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
