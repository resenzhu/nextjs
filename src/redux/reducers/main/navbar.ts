import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type IsSideNavOpen = boolean;

type State = {
  isSideNavOpen: IsSideNavOpen;
};

type Reducers = {
  setIsSideNavOpen: (
    state: State,
    action: PayloadAction<IsSideNavOpen>
  ) => void;
};

const name: string = 'navbar';

const initialState: State = {
  isSideNavOpen: false
};

const reducers: Reducers = {
  setIsSideNavOpen: (state, action) => {
    if (state.isSideNavOpen !== action.payload) {
      state.isSideNavOpen = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export {initialState};
export type {IsSideNavOpen};
export const {setIsSideNavOpen} = slice.actions;
export default slice.reducer;
