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
  },
});

export const { signUp } = authSlice.actions;

export default authSlice.reducer;
