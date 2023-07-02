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
    if (action.payload !== state.sidenav) {
      state.sidenav = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {Sidenav};
export const {setSidenav} = slice.actions;
export default slice.reducer;
