import { createAsyncThunk } from "@reduxjs/toolkit";

// Helpers
import { getFormData } from "@/helpers";
import { removeAuthCookies, setAuthCookies, setCookie } from "@/helpers/token";

// API
import * as API from "@/api/auth";

export const login = createAsyncThunk("auth/login", async (credentials: any, thunkAPI) => {
  try {
    const response = await API.postLogin(getFormData(credentials));
    setAuthCookies(response, credentials.remember);
  } catch (error: any) {
    throw thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk("auth/logout", async (refreshToken?: string) => {
  await API.postLogout(getFormData({ refresh: refreshToken })).catch((error) => console.log(error));
  removeAuthCookies();
});

export const register = createAsyncThunk("auth/register", async (data: any, thunkAPI) => {
  try {
    await API.postRegister(getFormData(data));
    thunkAPI.dispatch(login({ phone: data.phone, password: data.password }));
  } catch (error: any) {
    throw thunkAPI.rejectWithValue(error.response.data);
  }
});

export const refreshToken = createAsyncThunk(
  "auth/token/refresh",
  async (refreshToken: string, thunkAPI) => {
    try {
      const response = await API.postRefreshToken(getFormData({ refresh: refreshToken }));
      setAuthCookies(response, true);
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const verifyToken = createAsyncThunk(
  "auth/token/verify",
  async (accessToken: string, thunkAPI) => {
    try {
      await API.postVerifyToken(getFormData({ token: accessToken }));
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const sendOTPCode = createAsyncThunk("auth/otp/send", async (phone: string, thunkAPI) => {
  try {
    await API.sendOTPCode(getFormData({ phone }));
    setCookie("phone", phone, 1000);
  } catch (error: any) {
    throw thunkAPI.rejectWithValue(error.response.data);
  }
});

export const verifyOTPCode = createAsyncThunk(
  "auth/otp/verify",
  async (data: { phone: string; otp_code: string }, thunkAPI) => {
    try {
      const response = await API.verifyOTPCode(getFormData(data));
      setAuthCookies(response, true);
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);
