import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type ShowChatbox = boolean;

type State = {
  showChatbox: ShowChatbox;
};

type Reducers = {
  setShowChatbox: (state: State, action: PayloadAction<ShowChatbox>) => void;
};

const name: string = 'home';

const initialState: State = {
  showChatbox: false
};

const reducers: Reducers = {
  setShowChatbox: (state, action) => {
    if (action.payload !== state.showChatbox) {
      state.showChatbox = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {ShowChatbox};
export const {setShowChatbox} = slice.actions;
export default slice.reducer;
