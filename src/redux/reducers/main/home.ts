import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Section = {
  profile: boolean;
  explore: boolean;
  chatbot: boolean;
};

type State = {
  section: Section;
};

type Reducers = {
  setSection: (state: State, action: PayloadAction<Section>) => void;
};

const name: string = 'home';

const initialState: State = {
  section: {
    profile: true,
    explore: false,
    chatbot: false
  }
};

const reducers: Reducers = {
  setSection: (state, action) => {
    if (action.payload !== state.section) {
      state.section = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {Section};
export const {setSection} = slice.actions;
export default slice.reducer;
