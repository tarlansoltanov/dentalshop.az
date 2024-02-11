import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Types
import { Product } from "@/types";

// Actions
import { getNewProducts, getProducts } from "./actions";

interface StateProps {
  status: {
    loading: boolean;
    success: boolean;
    failure: boolean;
  };
  errors: any;
  items: Product[] | null;
  newItems: Product[] | null;
  count: number;
}

const initialState: StateProps = {
  status: {
    loading: false,
    success: false,
    failure: false,
  },
  errors: null,
  items: null,
  newItems: null,
  count: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetState: (state) => {
      state.status = { ...initialState.status };
      state.errors = initialState.errors;
      state.items = initialState.items;
      state.newItems = initialState.newItems;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.status = SUCCESS;
        state.items = payload.data;
        state.count = payload.count;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
    builder
      .addCase(getNewProducts.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(getNewProducts.fulfilled, (state, { payload }) => {
        state.status = SUCCESS;
        state.newItems = payload.data;
      })
      .addCase(getNewProducts.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
  },
});

export const { resetState } = productSlice.actions;

export default productSlice.reducer;
