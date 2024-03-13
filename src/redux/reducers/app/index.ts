import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Locale = 'en' | 'id';

type Online = boolean;

type Viewport = {
  width: number;
  height: number;
};

type State = {
  locale: Locale;
  online: Online;
  viewport: Viewport;
};

type Reducers = {
  setLocale: (state: State, action: PayloadAction<Locale>) => void;
  setOnline: (state: State, action: PayloadAction<Online>) => void;
  setViewport: (state: State, action: PayloadAction<Viewport>) => void;
};

const name: string = 'app';

const initialState: State = {
  locale: 'en',
  online: false,
  viewport: {
    width: 0,
    height: 0
  }
};

const reducers: Reducers = {
  setLocale: (state, action) => {
    if (state.locale !== action.payload) {
      state.locale = action.payload;
    }
  },
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
export type {Locale, Online, Viewport};
export const {setLocale, setOnline, setViewport} = slice.actions;
export default slice.reducer;
