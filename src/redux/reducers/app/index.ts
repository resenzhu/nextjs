import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Online = boolean;

type Viewport = {
  width: number;
  height: number;
};

type State = {
  online: Online;
  viewport: Viewport;
};

type Reducers = {
  setOnline: (state: State, action: PayloadAction<Online>) => void;
  setViewport: (state: State, action: PayloadAction<Viewport>) => void;
};

const name: string = 'app';

const initialState: State = {
  online: false,
  viewport: {
    width: 0,
    height: 0
  }
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
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export {initialState};
export type {Online, Viewport};
export const {setOnline, setViewport} = slice.actions;
export default slice.reducer;
