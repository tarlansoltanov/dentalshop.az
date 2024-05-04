import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Types
import { FreezoneItem } from "@/types/models";

// Actions
import {
  createFreezoneItem,
  deleteFreezoneItem,
  getFreezoneItem,
  getFreezoneItems,
  updateFreezoneItem,
} from "./actions";

interface StateProps {
  status: {
    loading: boolean;
    success: boolean;
    failure: boolean;
    lastAction: string | null;
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
    lastAction: null,
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
        state.status = { ...LOADING, lastAction: getFreezoneItems.typePrefix };
        state.errors = null;
      })
      .addCase(getFreezoneItems.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getFreezoneItems.typePrefix };
        state.items = payload.data;
        state.count = payload.count;
      })
      .addCase(getFreezoneItems.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getFreezoneItems.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(getFreezoneItem.pending, (state) => {
        state.status = { ...LOADING, lastAction: getFreezoneItem.typePrefix };
        state.errors = null;
      })
      .addCase(getFreezoneItem.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getFreezoneItem.typePrefix };
        state.item = payload;
      })
      .addCase(getFreezoneItem.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getFreezoneItem.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(createFreezoneItem.pending, (state) => {
        state.status = { ...LOADING, lastAction: createFreezoneItem.typePrefix };
        state.errors = null;
      })
      .addCase(createFreezoneItem.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: createFreezoneItem.typePrefix };
      })
      .addCase(createFreezoneItem.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: createFreezoneItem.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(updateFreezoneItem.pending, (state) => {
        state.status = { ...LOADING, lastAction: updateFreezoneItem.typePrefix };
        state.errors = null;
      })
      .addCase(updateFreezoneItem.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: updateFreezoneItem.typePrefix };
      })
      .addCase(updateFreezoneItem.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: updateFreezoneItem.typePrefix };
        state.errors = payload;
      });

    builder
      .addCase(deleteFreezoneItem.pending, (state) => {
        state.status = { ...LOADING, lastAction: deleteFreezoneItem.typePrefix };
        state.errors = null;
      })
      .addCase(deleteFreezoneItem.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: deleteFreezoneItem.typePrefix };
      })
      .addCase(deleteFreezoneItem.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: deleteFreezoneItem.typePrefix };
        state.errors = payload;
      });
  },
});

export const { resetState } = freezoneSlice.actions;

export default freezoneSlice.reducer;
