import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type ShowBackdrop = boolean;

type State = {
  showBackdrop: ShowBackdrop;
};

type Reducers = {
  setShowBackdrop: (state: State, action: PayloadAction<ShowBackdrop>) => void;
};

const name: string = 'app';

const initialState: State = {
  showBackdrop: false
};

const reducers: Reducers = {
  setShowBackdrop: (state, action) => {
    if (action.payload !== state.showBackdrop) {
      state.showBackdrop = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {ShowBackdrop};
export const {setShowBackdrop} = slice.actions;
export default slice.reducer;
