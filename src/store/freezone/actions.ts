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

export const createFreezoneItem = createAsyncThunk(
  "freezone/create",
  async (formData: FormData, thunkAPI) => {
    try {
      const response = await API.createFreezoneItem(formData);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);

export const updateFreezoneItem = createAsyncThunk(
  "freezone/update",
  async ({ slug, formData }: { slug: string; formData: FormData }, thunkAPI) => {
    try {
      const response = await API.updateFreezoneItem(slug, formData);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);
