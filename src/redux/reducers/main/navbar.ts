import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type ShowSidenav = boolean;

type State = {
  showSidenav: ShowSidenav;
};

type Reducers = {
  setShowSidenav: (state: State, action: PayloadAction<ShowSidenav>) => void;
};

const name: string = 'navbar';

const initialState: State = {
  showSidenav: false
};

const reducers: Reducers = {
  setShowSidenav: (state, action) => {
    if (action.payload !== state.showSidenav) {
      state.showSidenav = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {ShowSidenav};
export const {setShowSidenav} = slice.actions;
export default slice.reducer;
