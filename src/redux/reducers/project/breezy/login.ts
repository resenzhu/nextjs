import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Form = {
  username: string;
  password: string;
  reveal: boolean;
  honeypot: string;
  token: string;
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
    username: '',
    password: '',
    reveal: false,
    honeypot: '',
    token: '',
    submitting: false,
    error: {
      field: null,
      message: ''
    }
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
