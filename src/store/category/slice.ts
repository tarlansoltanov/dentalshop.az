import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Types
import { Category } from "@/types";

// Actions
import { getCategories } from "./actions";

interface StateProps {
  status: {
    loading: boolean;
    success: boolean;
    failure: boolean;
  };
  errors: any;
  items: Category[] | null;
}

const initialState: StateProps = {
  status: {
    loading: false,
    success: false,
    failure: false,
  },
  errors: null,
  items: null,
};

export const categorySlice = createSlice({
  name: "category",
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
      .addCase(getCategories.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.status = SUCCESS;
        state.items = payload;
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
  },
});

export const { resetState } = categorySlice.actions;

export default categorySlice.reducer;
