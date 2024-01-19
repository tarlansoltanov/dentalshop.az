import { createAsyncThunk } from "@reduxjs/toolkit";

// API
import * as API from "@/api/brand";

export const getBrands = createAsyncThunk("brand/get", async (_, thunkAPI) => {
  try {
    const response = await API.getBrands();
    return response;
  } catch (error: any) {
    throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
  }
});

export const getMainBrands = createAsyncThunk("brand/getMain", async (_, thunkAPI) => {
  try {
    const response = await API.getMainBrands();
    return response;
  } catch (error: any) {
    throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
  }
});
