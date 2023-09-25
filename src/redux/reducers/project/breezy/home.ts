import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Menu = {
  messages: boolean;
  users: boolean;
  profile: boolean;
};

type User = {
  id: string;
  username: string;
  displayName: string;
  status: 'online' | 'away' | 'offline';
  lastOnline: string;
};

type Chat = {
  id: string;
  self: boolean;
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
  sender: {
    user: User;
    typing: boolean;
  };
  chats: Chat[];
};

type Messages = Message[];

type Users = User[];

type Profile = User | null;

type State = {
  menu: Menu;
  messages: Messages;
  users: Users;
  profile: Profile;
};

type Reducers = {
  setMenu: (state: State, action: PayloadAction<Menu>) => void;
  setMessages: (state: State, action: PayloadAction<Messages>) => void;
  setUsers: (state: State, action: PayloadAction<Users>) => void;
  setProfile: (state: State, action: PayloadAction<Profile>) => void;
};

const name: string = 'home';

const initialState: State = {
  menu: {
    messages: true,
    users: false,
    profile: false
  },
  messages: [],
  users: [],
  profile: null
};

const reducers: Reducers = {
  setMenu: (state, action) => {
    if (action.payload !== state.menu) {
      state.menu = action.payload;
    }
  },
  setMessages: (state, action) => {
    if (action.payload !== state.messages) {
      state.messages = action.payload;
    }
  },
  setUsers: (state, action) => {
    if (action.payload !== state.users) {
      state.users = action.payload;
    }
  },
  setProfile: (state, action) => {
    if (action.payload !== state.profile) {
      state.profile = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {Menu, User, Chat, Message, Messages, Users, Profile};
export const {setMenu, setMessages, setUsers, setProfile} = slice.actions;
export default slice.reducer;
