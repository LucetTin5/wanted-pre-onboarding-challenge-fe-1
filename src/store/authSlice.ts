import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userLogout, userSignup } from "./authActions";

interface AuthState {
  message: string | null;
  token: string | null;
  error?: string;
}

const initialState: AuthState = {
  message: null,
  token: localStorage.getItem("token") ?? null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.message = "Loading...";
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.token = action.payload.token;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(userLogout.fulfilled, (state) => {
      state.message = null;
      state.token = null;
    });
    builder.addCase(userSignup.pending, (state) => {
      state.message = "Loading...";
    });
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.token = action.payload.token;
    });
    builder.addCase(userSignup.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
