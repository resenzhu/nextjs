import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Explore = boolean;

type State = {
  explore: Explore;
};

type Reducers = {
  setExplore: (state: State, action: PayloadAction<Explore>) => void;
};

const name: string = 'home';

const initialState: State = {
  explore: false
};

const reducers: Reducers = {
  setExplore: (state, action) => {
    if (action.payload !== state.explore) {
      state.explore = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {Explore};
export const {setExplore} = slice.actions;
export default slice.reducer;
