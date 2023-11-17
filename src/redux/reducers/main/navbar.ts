import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Sidenav = boolean;

type State = {
  sidenav: Sidenav;
};

type Reducers = {
  setSidenav: (state: State, action: PayloadAction<Sidenav>) => void;
};

const name: string = 'navbar';

const initialState: State = {
  sidenav: false
};

const reducers: Reducers = {
  setSidenav: (state, action) => {
    if (state.sidenav !== action.payload) {
      state.sidenav = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export {initialState};
export type {Sidenav};
export const {setSidenav} = slice.actions;
export default slice.reducer;
