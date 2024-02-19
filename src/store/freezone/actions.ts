import { createAsyncThunk } from "@reduxjs/toolkit";

// Types
import { FreezoneFilter } from "@/types/filters";

// API
import * as API from "@/api/freezone";

export const getFreezoneItems = createAsyncThunk(
  "freezone/get",
  async (filters: FreezoneFilter, thunkAPI) => {
    try {
      const response = await API.getFreezoneItems(filters);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);

export const getFreezoneItem = createAsyncThunk(
  "freezone/get/detail",
  async (slug: string, thunkAPI) => {
    try {
      const response = await API.getFreezoneItem(slug);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);