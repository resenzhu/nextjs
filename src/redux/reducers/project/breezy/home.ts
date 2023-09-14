import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Menu = {
  chats: boolean;
  users: boolean;
  profile: boolean;
};

type State = {
  menu: Menu;
};

type Reducers = {
  setMenu: (state: State, action: PayloadAction<Menu>) => void;
};

const name: string = 'home';

const initialState: State = {
  menu: {
    chats: true,
    users: false,
    profile: false
  }
};

const reducers: Reducers = {
  setMenu: (state, action) => {
    if (action.payload !== state.menu) {
      state.menu = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {Menu};
export const {setMenu} = slice.actions;
export default slice.reducer;
