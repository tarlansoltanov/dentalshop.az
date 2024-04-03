import { createAsyncThunk } from "@reduxjs/toolkit";

// Types
import { ProductFilter } from "@/types/filters";

// API
import * as API from "@/api/product";
import { getFormData } from "@/helpers";

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

export const getProduct = createAsyncThunk("product/get/detail", async (slug: string, thunkAPI) => {
  try {
    const response = await API.getProduct(slug);
    return response;
  } catch (error: any) {
    throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
  }
});

export const favoriteProduct = createAsyncThunk(
  "product/favorite/add",
  async (product: string, thunkAPI) => {
    try {
      const response = await API.favoriteProduct(getFormData({ product }));
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);

export const unfavoriteProduct = createAsyncThunk(
  "product/favorite/remove",
  async (product: string, thunkAPI) => {
    try {
      const response = await API.unfavoriteProduct(product);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
    }
  }
);

export const getNotes = createAsyncThunk("product/notes", async (_, thunkAPI) => {
  try {
    const response = await API.getNotes();
    return response;
  } catch (error: any) {
    throw thunkAPI.rejectWithValue({ data: error.response.data, status: error.response.status });
  }
});
