import { createAsyncThunk } from "@reduxjs/toolkit";

// Types
import { ProductFilter } from "@/types/filters";

// API
import * as API from "@/api/product";

export const getProducts = createAsyncThunk(
  "product/get",
  async (filters: ProductFilter, thunkAPI) => {
    try {
      const response = await API.getProducts(filters);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);
