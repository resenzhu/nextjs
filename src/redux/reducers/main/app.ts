import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Viewport = {
  width: number;
  height: number;
};

type Sidebar = boolean;

type State = {
  viewport: Viewport;
  sidebar: Sidebar;
};

type Reducers = {
  setViewport: (state: State, action: PayloadAction<Viewport>) => void;
  setSidebar: (state: State, action: PayloadAction<Sidebar>) => void;
};

const name: string = 'app';

const initialState: State = {
  viewport: {
    width: 0,
    height: 0
  },
  sidebar: false
};

const reducers: Reducers = {
  setViewport: (state, action) => {
    if (action.payload !== state.viewport) {
      state.viewport = action.payload;
    }
  },
  setSidebar: (state, action) => {
    if (action.payload !== state.sidebar) {
      state.sidebar = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {Viewport, Sidebar};
export const {setViewport, setSidebar} = slice.actions;
export default slice.reducer;
