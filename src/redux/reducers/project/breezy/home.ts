import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

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
  show: boolean;
  fetching: boolean;
  fetched: boolean;
  list: Message[];
};

type Users = {
  show: boolean;
  fetching: boolean;
  fetched: boolean;
  list: User[];
};

type Profile = {
  show: boolean;
  user: User;
};

type State = {
  messages: Messages;
  users: Users;
  profile: Profile;
};

type Reducers = {
  setMessages: (state: State, action: PayloadAction<Messages>) => void;
  setUsers: (state: State, action: PayloadAction<Users>) => void;
  setProfile: (state: State, action: PayloadAction<Profile>) => void;
};

const name: string = 'home';

const initialState: State = {
  messages: {
    show: true,
    fetching: true,
    fetched: false,
    list: []
  },
  users: {
    show: false,
    fetching: true,
    fetched: false,
    list: []
  },
  profile: {
    show: false,
    user: {
      id: '',
      username: '',
      displayName: '',
      session: {
        status: 'offline',
        lastOnline: ''
      }
    }
  }
};

const reducers: Reducers = {
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
export type {User, Chat, Message, Messages, Users, Profile};
export const {setMessages, setUsers, setProfile} = slice.actions;
export default slice.reducer;
