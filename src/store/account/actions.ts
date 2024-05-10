import { createAsyncThunk } from "@reduxjs/toolkit";

// Helpers
import { getFormData } from "@/helpers";

// Types
import { Pagination } from "@/types/filters";

// API
import * as API from "@/api/account";

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

export const changePassword = createAsyncThunk(
  "account/changePassword",
  async (data: FormData, thunkAPI) => {
    try {
      const response = await API.changePassword(data);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/* Cart */
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

/* Favorites */
export const getFavorites = createAsyncThunk(
  "account/favorites/get",
  async (filters: Pagination, thunkAPI) => {
    try {
      const response = await API.getFavorites(filters);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/* Discount */
export const checkDiscount = createAsyncThunk(
  "account/discount/check",
  async (code: string, thunkAPI) => {
    try {
      const response = await API.checkDiscount(code);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/* Orders */
export const getOrders = createAsyncThunk("account/orders/get", async (_, thunkAPI) => {
  try {
    const response = await API.getOrders();
    return response;
  } catch (error: any) {
    throw thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getOrder = createAsyncThunk(
  "account/orders/getOrder",
  async (id: number, thunkAPI) => {
    try {
      const response = await API.getOrder(id);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const payOrder = createAsyncThunk(
  "account/orders/pay",
  async ({ id, data }: { id: number; data: FormData }, thunkAPI) => {
    try {
      const response = await API.payOrder(id, data);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const checkout = createAsyncThunk(
  "account/orders/checkout",
  async (data: FormData, thunkAPI) => {
    try {
      const response = await API.checkout(data);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/* Freezone */
export const getAccountFreezone = createAsyncThunk(
  "account/freezone/get",
  async (filters: Pagination, thunkAPI) => {
    try {
      const response = await API.getFreeZone(filters);
      return response;
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
