import { createSlice } from "@reduxjs/toolkit";
import languages from "../utils/language.json";

const initialState = {
  selectedLang: languages.english,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.selectedLang = languages[action.payload];
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
