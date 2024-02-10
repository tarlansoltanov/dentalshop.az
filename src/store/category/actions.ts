import { createAsyncThunk } from "@reduxjs/toolkit";

// Types
import { CategoryFilter } from "@/types/filters";

// API
import * as API from "@/api/category";

export const getCategories = createAsyncThunk(
  "category/get",
  async (filters: CategoryFilter, thunkAPI) => {
    try {
      const response = await API.getCategories(filters);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);
