import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Form = {
  name: string;
  email: string;
  message: string;
  honeypot: string;
  token: string;
  throttle: boolean;
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
    token: '',
    throttle: true,
    submitting: false,
    error: '',
    success: ''
  }
};

const reducers: Reducers = {
  setForm: (state, action) => {
    if (action.payload !== state.form) {
      state.form = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {Form};
export const {setForm} = slice.actions;
export default slice.reducer;
