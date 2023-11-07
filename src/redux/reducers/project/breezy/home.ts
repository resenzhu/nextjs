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
  id: string;
  sender: {
    user: User;
    typing: boolean;
  };
  chats: Chat[];
};

type Messages = {
  fetching: boolean;
  fetched: boolean;
  list: Message[];
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
  messages: {
    fetching: false,
    fetched: false,
    list: []
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
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export {initialState};
export type {Menu, User, Chat, Message, Messages, Users, Profile};
export const {setMenu, setMessages, setUsers, setProfile} = slice.actions;
export default slice.reducer;
