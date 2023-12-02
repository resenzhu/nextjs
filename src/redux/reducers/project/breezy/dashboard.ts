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
  session: {
    status: 'online' | 'away' | 'offline';
    lastOnline: string;
  };
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
  sender: {
    id: string;
    typing: boolean;
  };
  chats: Chat[];
};

type Messages = {
  fetching: boolean;
  fetched: boolean;
  list: Message[];
  active: string | null;
};

type Users = {
  fetching: boolean;
  fetched: boolean;
  list: User[];
};

type Profile = {
  fetching: boolean;
  fetched: boolean;
  user: {
    id: string;
    username: string;
    displayName: string;
    session: {
      status: {
        previous:
          | 'online'
          | 'away'
          | 'appear away'
          | 'offline'
          | 'appear offline';
        current:
          | 'online'
          | 'away'
          | 'appear away'
          | 'offline'
          | 'appear offline';
        updating: boolean;
      };
      lastOnline: string;
    };
  };
};

type Settings = {
  show: boolean;
};

type State = {
  menu: Menu;
  messages: Messages;
  users: Users;
  profile: Profile;
  settings: Settings;
};

type Reducers = {
  setMenu: (state: State, action: PayloadAction<Menu>) => void;
  setMessages: (state: State, action: PayloadAction<Messages>) => void;
  setUsers: (state: State, action: PayloadAction<Users>) => void;
  setProfile: (state: State, action: PayloadAction<Profile>) => void;
  setSettings: (state: State, action: PayloadAction<Settings>) => void;
};

const name: string = 'dashboard';

const initialState: State = {
  menu: {
    messages: true,
    users: false,
    profile: false
  },
  messages: {
    fetching: false,
    fetched: false,
    list: [],
    active: null
  },
  users: {
    fetching: false,
    fetched: false,
    list: []
  },
  profile: {
    fetching: false,
    fetched: false,
    user: {
      id: '',
      username: '',
      displayName: '',
      session: {
        status: {
          previous: 'offline',
          current: 'offline',
          updating: false
        },
        lastOnline: ''
      }
    }
  },
  settings: {
    show: false
  }
};

const reducers: Reducers = {
  setMenu: (state, action) => {
    if (state.menu !== action.payload) {
      state.menu = action.payload;
    }
  },
  setMessages: (state, action) => {
    if (state.messages !== action.payload) {
      state.messages = action.payload;
    }
  },
  setUsers: (state, action) => {
    if (state.users !== action.payload) {
      state.users = action.payload;
    }
  },
  setProfile: (state, action) => {
    if (state.profile !== action.payload) {
      state.profile = action.payload;
    }
  },
  setSettings: (state, action) => {
    if (state.settings !== action.payload) {
      state.settings = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export {initialState};
export type {Menu, User, Chat, Message, Messages, Users, Profile, Settings};
export const {setMenu, setMessages, setUsers, setProfile, setSettings} =
  slice.actions;
export default slice.reducer;
