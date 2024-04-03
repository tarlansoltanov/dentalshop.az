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
  getProduct,
  favoriteProduct,
  unfavoriteProduct,
  getNotes,
} from "./actions";
import { ProductNote } from "@/types/product";

interface StateProps {
  status: {
    loading: boolean;
    success: boolean;
    failure: boolean;
    lastAction: string | null;
  };
  errors: any;
  items: Product[] | null;
  count: number;
  newItems: Product[] | null;
  discountedItems: Product[] | null;
  item: Product | null;
  notes: ProductNote[] | null;
}

const initialState: StateProps = {
  status: {
    loading: false,
    success: false,
    failure: false,
    lastAction: null,
  },
  errors: null,
  items: null,
  count: 0,
  newItems: null,
  discountedItems: null,
  item: null,
  notes: null,
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = { ...LOADING, lastAction: getProducts.typePrefix };
        state.errors = null;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getProducts.typePrefix };
        state.items = payload.data;
        state.count = payload.count;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getProducts.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(getNewProducts.pending, (state) => {
        state.status = { ...LOADING, lastAction: getProducts.typePrefix };
        state.errors = null;
      })
      .addCase(getNewProducts.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getProducts.typePrefix };
        state.newItems = payload.data;
      })
      .addCase(getNewProducts.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getProducts.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(getDiscountedProducts.pending, (state) => {
        state.status = { ...LOADING, lastAction: getProducts.typePrefix };
        state.errors = null;
      })
      .addCase(getDiscountedProducts.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getProducts.typePrefix };
        state.discountedItems = payload.data;
      })
      .addCase(getDiscountedProducts.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getProducts.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = { ...LOADING, lastAction: getProduct.typePrefix };
        state.errors = null;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getProduct.typePrefix };
        state.item = payload;
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getProduct.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(favoriteProduct.pending, (state, payload) => {
        state.status = { ...LOADING, lastAction: favoriteProduct.typePrefix };
        state.errors = null;
        state.items =
          state.items?.map((item) => {
            if (item.slug === payload.meta.arg) {
              return { ...item, is_favorite: true };
            }
            return item;
          }) || null;
        state.newItems =
          state.newItems?.map((item) => {
            if (item.slug === payload.meta.arg) {
              return { ...item, is_favorite: true };
            }
            return item;
          }) || null;
        state.discountedItems =
          state.discountedItems?.map((item) => {
            if (item.slug === payload.meta.arg) {
              return { ...item, is_favorite: true };
            }
            return item;
          }) || null;
        state.item =
          state.item?.slug === payload.meta.arg ? { ...state.item, is_favorite: true } : null;
      })
      .addCase(favoriteProduct.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: favoriteProduct.typePrefix };
      })
      .addCase(favoriteProduct.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: favoriteProduct.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(unfavoriteProduct.pending, (state, payload) => {
        state.status = { ...LOADING, lastAction: unfavoriteProduct.typePrefix };
        state.errors = null;
        state.items =
          state.items?.map((item) => {
            if (item.slug === payload.meta.arg) {
              return { ...item, is_favorite: false };
            }
            return item;
          }) || null;
        state.newItems =
          state.newItems?.map((item) => {
            if (item.slug === payload.meta.arg) {
              return { ...item, is_favorite: false };
            }
            return item;
          }) || null;
        state.discountedItems =
          state.discountedItems?.map((item) => {
            if (item.slug === payload.meta.arg) {
              return { ...item, is_favorite: false };
            }
            return item;
          }) || null;
        state.item =
          state.item?.slug === payload.meta.arg ? { ...state.item, is_favorite: false } : null;
      })
      .addCase(unfavoriteProduct.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: unfavoriteProduct.typePrefix };
      })
      .addCase(unfavoriteProduct.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: unfavoriteProduct.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(getNotes.pending, (state) => {
        state.status = { ...LOADING, lastAction: getNotes.typePrefix };
        state.errors = null;
      })
      .addCase(getNotes.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getNotes.typePrefix };
        state.notes = payload;
      })
      .addCase(getNotes.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getNotes.typePrefix };
        state.errors = payload;
      });
  },
});

export const { resetState } = productSlice.actions;

export default productSlice.reducer;
