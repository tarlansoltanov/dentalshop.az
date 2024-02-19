import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Types
import { FreezoneItem } from "@/types";

// Actions
import { getFreezoneItem, getFreezoneItems } from "./actions";

interface StateProps {
  status: {
    loading: boolean;
    success: boolean;
    failure: boolean;
  };
  errors: any;
  items: FreezoneItem[] | null;
  count: number;
  item: FreezoneItem | null;
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
  item: null,
};

export const freezoneSlice = createSlice({
  name: "freezone",
  initialState,
  reducers: {
    resetState: (state) => {
      state.status = { ...initialState.status };
      state.errors = initialState.errors;
      state.items = initialState.items;
      state.count = initialState.count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFreezoneItems.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(getFreezoneItems.fulfilled, (state, { payload }) => {
        state.status = SUCCESS;
        state.items = payload.data;
        state.count = payload.count;
      })
      .addCase(getFreezoneItems.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
    builder
      .addCase(getFreezoneItem.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(getFreezoneItem.fulfilled, (state, { payload }) => {
        state.status = SUCCESS;
        state.item = payload;
      })
      .addCase(getFreezoneItem.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
  },
});

export const { resetState } = freezoneSlice.actions;

export default freezoneSlice.reducer;
