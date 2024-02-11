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

export const getNewProducts = createAsyncThunk(
  "product/get/new",
  async (filters: ProductFilter, thunkAPI) => {
    try {
      const response = await API.getProducts({ ...filters, is_new: true });
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);

export const getDiscountedProducts = createAsyncThunk(
  "product/get/discounted",
  async (filters: ProductFilter, thunkAPI) => {
    try {
      const response = await API.getProducts({ ...filters, discount: true });
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);

export const getRecommendedProducts = createAsyncThunk(
  "product/get/recommended",
  async (filters: ProductFilter, thunkAPI) => {
    try {
      const response = await API.getProducts({ ...filters, is_recommended: true });
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);