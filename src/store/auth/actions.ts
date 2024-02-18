import { createAsyncThunk } from "@reduxjs/toolkit";

// Helpers
import { getFormData } from "@/helpers";
import { setAuthCookies } from "@/helpers/token";

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
