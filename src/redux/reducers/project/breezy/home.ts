import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Menu = {
  chats: boolean;
  users: boolean;
  profile: boolean;
};

type Chat = {
  id: string;
  username: string;
  displayName: string;
  message: string;
  status: 'failed' | 'sending' | 'sent' | 'delivered' | 'read';
  timestamp: {
    created: string;
    delivered: string;
    read: string;
  };
};

type Chats = {
  search: string;
  list: Chat[];
};

type State = {
  menu: Menu;
  chats: Chats;
};

type Reducers = {
  setMenu: (state: State, action: PayloadAction<Menu>) => void;
  setChats: (state: State, action: PayloadAction<Chats>) => void;
};

const name: string = 'home';

const initialState: State = {
  menu: {
    chats: true,
    users: false,
    profile: false
  },
  chats: {
    search: '',
    list: []
  }
};

const reducers: Reducers = {
  setMenu: (state, action) => {
    if (action.payload !== state.menu) {
      state.menu = action.payload;
    }
  },
  setChats: (state, action) => {
    if (action.payload !== state.chats) {
      state.chats = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {Menu, Chat, Chats};
export const {setMenu, setChats} = slice.actions;
export default slice.reducer;
