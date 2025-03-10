import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice"; // Import slice

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
