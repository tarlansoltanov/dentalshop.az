import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Types
import { Banner } from "@/types/models";

// Actions
import { getBanners } from "./actions";

interface StateProps {
  status: {
    loading: boolean;
    success: boolean;
    failure: boolean;
  };
  errors: any;
  items: Banner[] | null;
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

export const bannerSlice = createSlice({
  name: "banner",
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
      .addCase(getBanners.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(getBanners.fulfilled, (state, { payload }) => {
        state.status = SUCCESS;
        state.items = payload;
      })
      .addCase(getBanners.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
  },
});

export const { resetState } = bannerSlice.actions;

export default bannerSlice.reducer;
