import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Form = {
  username: string;
  displayName: string;
  password: string;
  reveal: boolean;
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

const name: string = 'signup';

const initialState: State = {
  form: {
    username: '',
    displayName: '',
    password: '',
    reveal: false,
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
