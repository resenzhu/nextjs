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
  input: string;
  sending: boolean;
  chats: Chat[];
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
    input: '',
    sending: false,
    chats: []
  }
};

const reducers: Reducers = {
  setSection: (state, action) => {
    if (state.section !== action.payload) {
      state.section = action.payload;
    }
  },
  setChatbot: (state, action) => {
    if (state.chatbot !== action.payload) {
      state.chatbot = action.payload;
    }
  }
};

const slice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers
});

export {initialState};
export type {Section, Chat, Chatbot};
export const {setSection, setChatbot} = slice.actions;
export default slice.reducer;
