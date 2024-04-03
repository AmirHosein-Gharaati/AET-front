import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginResponse, SignUpResponse, UserResponse } from "@/types/auth";

export const authSlice = createSlice({
  name: "authReducer",
  initialState: {
    token: "",
    user: {
      id: "",
      username: "",
    },
  },
  reducers: {
    signUp: (state, action: PayloadAction<SignUpResponse>) => {
      state.token = action.payload.token;
    },
    login: (state, action: PayloadAction<LoginResponse>) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = "";
    },
    whoami: (state, action: PayloadAction<UserResponse>) => {
      state.user = action.payload;
    },
  },
});

export const { signUp, login, whoami, logout } = authSlice.actions;

export default authSlice.reducer;
