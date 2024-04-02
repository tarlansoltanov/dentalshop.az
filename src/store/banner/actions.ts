import { createAsyncThunk } from "@reduxjs/toolkit";

// Types
import { BannerFilter } from "@/types/filters";

// API
import * as API from "@/api/banner";

export const getBanners = createAsyncThunk(
  "banner/get",
  async (filters: BannerFilter, thunkAPI) => {
    try {
      const response = await API.getBanners(filters);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);
