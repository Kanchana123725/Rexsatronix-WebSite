import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import languages from "../utils/language.json";

export type LanguageKeys = keyof typeof languages;
export type LanguageData = (typeof languages)[LanguageKeys];

interface LanguageState {
  selectedLang: LanguageData;
}

const initialState: LanguageState = {
  selectedLang: languages.english,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageKeys>) => {
      state.selectedLang = languages[action.payload];
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
