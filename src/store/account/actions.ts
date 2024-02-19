import { createAsyncThunk } from "@reduxjs/toolkit";

// API
import * as API from "@/api/account";
import { getFormData } from "@/helpers";

export const getAccount = createAsyncThunk("account/get", async (_, thunkAPI) => {
  try {
    const response = await API.getAccount();
    return response;
  } catch (error: any) {
    throw thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateAccount = createAsyncThunk(
  "account/update",
  async (data: FormData, thunkAPI) => {
    try {
      const response = await API.updateAccount(data);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getCart = createAsyncThunk("account/cart/get", async (_, thunkAPI) => {
  try {
    const response = await API.getCart();
    return response;
  } catch (error: any) {
    throw thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addToCart = createAsyncThunk(
  "account/cart/add",
  async ({ product, quantity = 1 }: { product: string; quantity?: number }, thunkAPI) => {
    try {
      const response = await API.addToCart(getFormData({ product, quantity }));
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const decrementCart = createAsyncThunk(
  "account/cart/decrement",
  async ({ product, quantity }: { product: string; quantity: number }, thunkAPI) => {
    try {
      const response = await API.addToCart(getFormData({ product, quantity: quantity - 1 }));
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const incrementCart = createAsyncThunk(
  "account/cart/increment",
  async ({ product, quantity }: { product: string; quantity: number }, thunkAPI) => {
    try {
      const response = await API.addToCart(getFormData({ product, quantity: quantity + 1 }));
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "account/cart/remove",
  async (product: string, thunkAPI) => {
    try {
      const response = await API.removeFromCart(product);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
