import { createAsyncThunk } from "@reduxjs/toolkit";

// API
import * as API from "@/api/category";

export const getCategories = createAsyncThunk("category/get", async (_, thunkAPI) => {
  try {
    const response = await API.getCategories();
    return response;
  } catch (error: any) {
    throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
  }
});
