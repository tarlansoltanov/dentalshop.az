import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Types
import { Product } from "@/types";

// Actions
import {
  getProducts,
  getNewProducts,
  getDiscountedProducts,
  getRecommendedProducts,
} from "./actions";

interface StateProps {
  status: {
    loading: boolean;
    success: boolean;
    failure: boolean;
  };
  errors: any;
  items: Product[] | null;
  count: number;
  newItems: Product[] | null;
  discountedItems: Product[] | null;
  recommendedItems: Product[] | null;
}

const initialState: StateProps = {
  status: {
    loading: false,
    success: false,
    failure: false,
  },
  errors: null,
  items: null,
  count: 0,
  newItems: null,
  discountedItems: null,
  recommendedItems: null,
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
      state.discountedItems = initialState.discountedItems;
      state.recommendedItems = initialState.recommendedItems;
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
    builder
      .addCase(getDiscountedProducts.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(getDiscountedProducts.fulfilled, (state, { payload }) => {
        state.status = SUCCESS;
        state.discountedItems = payload.data;
      })
      .addCase(getDiscountedProducts.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
    builder
      .addCase(getRecommendedProducts.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(getRecommendedProducts.fulfilled, (state, { payload }) => {
        state.status = SUCCESS;
        state.recommendedItems = payload.data;
      })
      .addCase(getRecommendedProducts.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
  },
});

export const { resetState } = productSlice.actions;

export default productSlice.reducer;
