import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authReducer",
  initialState: {
    token: null,
  },
  reducers: {
    signUp: (state, action) => {
      state.token = action.payload.token;
    },
    login: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { signUp, login } = authSlice.actions;

export default authSlice.reducer;
