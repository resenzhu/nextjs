import {type PayloadAction, createSlice} from '@reduxjs/toolkit';
import {locales} from '@navigation';

type Locale = (typeof locales)[number];
type IsOnline = boolean;
type Viewport = {
  width: number;
  height: number;
};

type State = {
  locale: Locale;
  isOnline: IsOnline;
  viewport: Viewport;
};

type Reducers = {
  setLocale: (state: State, action: PayloadAction<Locale>) => void;
  setIsOnline: (state: State, action: PayloadAction<IsOnline>) => void;
  setViewport: (state: State, action: PayloadAction<Viewport>) => void;
};

const name: string = 'app';

const initialState: State = {
  locale: 'en',
  isOnline: false,
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
  setIsOnline: (state, action) => {
    if (state.isOnline !== action.payload) {
      state.isOnline = action.payload;
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
export type {Locale, IsOnline, Viewport};
export const {setLocale, setIsOnline, setViewport} = slice.actions;
export default slice.reducer;
