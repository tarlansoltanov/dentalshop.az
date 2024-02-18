import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Actions
import { login } from "./actions";

interface StateProps {
  status: {
    loading: boolean;
    failure: boolean;
    success: boolean;
  };
  errors: any;
  isAuth: boolean;
}

const initialState: StateProps = {
  status: {
    loading: false,
    failure: false,
    success: false,
  },
  errors: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = LOADING;
        state.errors = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.status = SUCCESS;
        state.isAuth = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.status = FAILURE;
        state.errors = payload;
      });
  },
});

export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;
