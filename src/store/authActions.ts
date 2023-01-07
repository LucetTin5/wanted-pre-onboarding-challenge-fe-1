import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN, SIGN_UP } from "../constants/api";
import { LoginReqData, SignupReqData } from "../types/users";

export const userLogin = createAsyncThunk(
  "auth/login",
  async (data: LoginReqData) => {
    const response = await axios.post(LOGIN, data);
    if (response.status !== 200) {
      alert("Login failed");
      localStorage.removeItem("token");
      location.href = "/login";
    } else {
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  }
);

export const userLogout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("token");
  return {};
});

export const userSignup = createAsyncThunk(
  "auth/signup",
  async (data: SignupReqData) => {
    const response = await axios.post(SIGN_UP, data);
    return response.data;
  }
);
