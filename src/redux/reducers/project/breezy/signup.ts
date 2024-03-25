import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Form = {
  userName: string;
  displayName: string;
  password: string;
  isPasswordVisible: boolean;
  honeypot: string;
  recaptcha: string;
  isSubmitting: boolean;
  error: {
    field: 'userName' | 'displayName' | 'password' | null;
    message: string;
  };
};

type State = {
  form: Form;
};

type Reducers = {
  setForm: (state: State, action: PayloadAction<Form>) => void;
};

const name: string = 'signup';

const initialState: State = {
  form: {
    userName: '',
    displayName: '',
    password: '',
    isPasswordVisible: false,
    honeypot: '',
    recaptcha: '',
    isSubmitting: false,
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
