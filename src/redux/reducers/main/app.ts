import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Online = boolean;

type Viewport = {
  width: number;
  height: number;
};

type Sidenav = boolean;

type State = {
  online: Online;
  viewport: Viewport;
  sidenav: Sidenav;
};

type Reducers = {
  setOnline: (state: State, action: PayloadAction<Online>) => void;
  setViewport: (state: State, action: PayloadAction<Viewport>) => void;
  setSidenav: (state: State, action: PayloadAction<Sidenav>) => void;
};

const name: string = 'app';

const initialState: State = {
  online: false,
  viewport: {
    width: 0,
    height: 0
  },
  sidenav: false
};

const reducers: Reducers = {
  setOnline: (state, action) => {
    if (state.online !== action.payload) {
      state.online = action.payload;
    }
  },
  setViewport: (state, action) => {
    if (state.viewport !== action.payload) {
      state.viewport = action.payload;
    }
  },
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
export type {Online, Viewport, Sidenav};
export const {setOnline, setViewport, setSidenav} = slice.actions;
export default slice.reducer;
