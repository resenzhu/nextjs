import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Menu = {
  isMessagesShown: boolean;
  isUsersShown: boolean;
  isProfileShown: boolean;
};
type Messages = {
  isFetching: boolean;
  isFetched: boolean;
  list: {
    sender: {
      id: string;
      isTyping: boolean;
    };
    chats: {
      id: string;
      isSelf: boolean;
      message: string;
      status: 'failed' | 'sending' | 'sent' | 'delivered' | 'read';
      timestamp: {
        created: string;
        delivered: string | null;
        read: string | null;
      };
    }[];
    input: string;
  }[];
  current: string | null;
};
type Users = {
  isFetching: boolean;
  isFetched: boolean;
  list: {
    id: string;
    userName: string;
    displayName: string;
    session: {
      status: 'online' | 'away' | 'offline';
      lastOnline: string;
    };
  }[];
};
type Profile = {
  isFetching: boolean;
  isFetched: boolean;
  user: {
    id: string;
    userName: string;
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
        isUpdating: boolean;
      };
      lastOnline: string;
    };
  };
};
type Settings = {
  isVisible: boolean;
};
type IsServerError = boolean;

type State = {
  menu: Menu;
  messages: Messages;
  users: Users;
  profile: Profile;
  settings: Settings;
  isServerError: IsServerError;
};

type Reducers = {
  setMenu: (state: State, action: PayloadAction<Menu>) => void;
  setMessages: (state: State, action: PayloadAction<Messages>) => void;
  setUsers: (state: State, action: PayloadAction<Users>) => void;
  setProfile: (state: State, action: PayloadAction<Profile>) => void;
  setSettings: (state: State, action: PayloadAction<Settings>) => void;
  setIsServerError: (
    state: State,
    action: PayloadAction<IsServerError>
  ) => void;
};

const name: string = 'dashboard';

const initialState: State = {
  menu: {
    isMessagesShown: true,
    isUsersShown: false,
    isProfileShown: false
  },
  messages: {
    isFetching: false,
    isFetched: false,
    list: [],
    current: null
  },
  users: {
    isFetching: false,
    isFetched: false,
    list: []
  },
  profile: {
    isFetching: false,
    isFetched: false,
    user: {
      id: '',
      userName: '',
      displayName: '',
      session: {
        status: {
          previous: 'offline',
          current: 'offline',
          isUpdating: false
        },
        lastOnline: ''
      }
    }
  },
  settings: {
    isVisible: false
  },
  isServerError: false
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
  },
  setIsServerError: (state, action) => {
    if (state.isServerError !== action.payload) {
      state.isServerError = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export {initialState};
export type {Menu, Messages, Users, Profile, Settings, IsServerError};
export const {
  setMenu,
  setMessages,
  setUsers,
  setProfile,
  setSettings,
  setIsServerError
} = slice.actions;
export default slice.reducer;
