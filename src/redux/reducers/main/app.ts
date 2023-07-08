import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Viewport = {
  width: number;
  height: number;
};

type State = {
  viewport: Viewport;
};

type Reducers = {
  setViewport: (state: State, action: PayloadAction<Viewport>) => void;
};

const name: string = 'app';

const initialState: State = {
  viewport: {
    width: 0,
    height: 0
  }
};

const reducers: Reducers = {
  setViewport: (state, action) => {
    if (action.payload !== state.viewport) {
      state.viewport = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {Viewport};
export const {setViewport} = slice.actions;
export default slice.reducer;
