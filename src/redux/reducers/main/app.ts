import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Viewport = {
  width: number;
  height: number;
};

type Sidenav = boolean;

type State = {
  viewport: Viewport;
  sidenav: Sidenav;
};

type Reducers = {
  setViewport: (state: State, action: PayloadAction<Viewport>) => void;
  setSidenav: (state: State, action: PayloadAction<Sidenav>) => void;
};

const name: string = 'app';

const initialState: State = {
  viewport: {
    width: 0,
    height: 0
  },
  sidenav: false
};

const reducers: Reducers = {
  setViewport: (state, action) => {
    if (action.payload !== state.viewport) {
      state.viewport = action.payload;
    }
  },
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

export type {Viewport, Sidenav};
export const {setViewport, setSidenav} = slice.actions;
export default slice.reducer;
