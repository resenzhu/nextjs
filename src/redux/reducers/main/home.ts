import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

type Section = {
  isProfileShown: boolean;
  isExploreShown: boolean;
  isChatbotShown: boolean;
};
type Chatbot = {
  input: string;
  isSending: boolean;
  chats: {
    sender: 'bot' | 'user';
    message: string;
  }[];
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
    isProfileShown: true,
    isExploreShown: false,
    isChatbotShown: false
  },
  chatbot: {
    input: '',
    isSending: false,
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
export type {Section, Chatbot};
export const {setSection, setChatbot} = slice.actions;
export default slice.reducer;
