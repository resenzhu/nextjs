import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Section = {
  profile: boolean;
  explore: boolean;
  chatbot: boolean;
};

type Chat = {
  sender: 'bot' | 'user';
  message: string;
};

type Chatbot = {
  replying: boolean;
  chat: Chat[];
};

type State = {
  section: Section;
  chatbot: Chatbot;
};

type Reducers = {
  setSection: (state: State, action: PayloadAction<Section>) => void;
  setChatbot: (state: State, action: PayloadAction<Chatbot>) => void;
};

const name: string = 'home';

const initialState: State = {
  section: {
    profile: true,
    explore: false,
    chatbot: false
  },
  chatbot: {
    replying: false,
    chat: []
  }
};

const reducers: Reducers = {
  setSection: (state, action) => {
    if (action.payload !== state.section) {
      state.section = action.payload;
    }
  },
  setChatbot: (state, action) => {
    if (action.payload !== state.chatbot) {
      state.chatbot = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export type {Section, Chat, Chatbot};
export const {setSection, setChatbot} = slice.actions;
export default slice.reducer;
