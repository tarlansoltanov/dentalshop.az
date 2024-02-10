import { createAsyncThunk } from "@reduxjs/toolkit";

// Types
import { BrandFilter } from "@/types/filters";

// API
import * as API from "@/api/brand";

export const getBrands = createAsyncThunk("brand/get", async (filters: BrandFilter, thunkAPI) => {
  try {
    const response = await API.getBrands(filters);
    return response;
  } catch (error: any) {
    throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
  }
});
