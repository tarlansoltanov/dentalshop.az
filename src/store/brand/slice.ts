import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Types
import { Brand } from "@/types";

// Actions
import { getBrands, getMainBrands } from "./actions";

interface StateProps {
  status: {
    loading: boolean;
    success: boolean;
    failure: boolean;
  };
  errors: any;
  items: Brand[] | null;
  mainItems: Brand[] | null;
}

const initialState: StateProps = {
  status: {
    loading: false,
    success: false,
    failure: false,
  },
  errors: null,
  items: null,
  mainItems: null,
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    resetState: (state) => {
      state.status = { ...initialState.status };
      state.errors = initialState.errors;
      state.items = initialState.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.status = SUCCESS;
        state.items = payload;
      })
      .addCase(getBrands.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
    builder
      .addCase(getMainBrands.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(getMainBrands.fulfilled, (state, { payload }) => {
        state.status = SUCCESS;
        state.mainItems = payload;
      })
      .addCase(getMainBrands.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
  },
});

export const { resetState } = brandSlice.actions;

export default brandSlice.reducer;
