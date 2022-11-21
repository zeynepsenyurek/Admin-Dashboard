import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
  name: "theme",
  initialState: {
    value: false
  },
  reducers: {
    changeTheme: (state) => {
      state.value = !state.value;
    }
  }
})

export const {changeTheme} = themeReducer.actions;
export default themeReducer.reducer;