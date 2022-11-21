import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../style/themeReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  }
})