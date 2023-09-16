import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Menu = {
  messages: boolean;
  users: boolean;
  profile: boolean;
};

type Chat = {
  id: string;
  sender: string;
  message: string;
  status: 'failed' | 'sending' | 'sent' | 'delivered' | 'read';
  timestamp: {
    created: string;
    delivered: string;
    read: string;
  };
};

type Message = {
  id: string;
  username: string;
  displayName: string;
  status: 'failed' | 'sending' | 'sent' | 'delivered' | 'read';
  latestTimestamp: string;
  unreadCount: number;
};

type User = {
  id: string;
  username: string;
  displayName: string;
  status: 'online' | 'away' | 'offline';
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
    messages: true,
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

export type {Menu, Chat};
export const {setMenu} = slice.actions;
export default slice.reducer;
