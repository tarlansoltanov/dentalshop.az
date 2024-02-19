import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Actions
import { login, logout, register, refreshToken, verifyToken } from "./actions";

interface StateProps {
  status: {
    loading: boolean;
    failure: boolean;
    success: boolean;
    lastAction: string | null;
  };
  errors: any;
  isAuth: boolean;
}

const initialState: StateProps = {
  status: {
    loading: false,
    failure: false,
    success: false,
    lastAction: null,
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
        state.status = { ...LOADING, lastAction: login.typePrefix };
        state.errors = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: login.typePrefix };
        state.isAuth = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: login.typePrefix };
        state.errors = payload;
      });
    builder.addCase(logout.pending, (state) => {
      state.status = { ...SUCCESS, lastAction: logout.typePrefix };
      state.errors = null;
      state.isAuth = false;
    });
    builder
      .addCase(register.pending, (state) => {
        state.status = { ...LOADING, lastAction: register.typePrefix };
        state.errors = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: register.typePrefix };
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: register.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(refreshToken.pending, (state) => {
        state.status = { ...LOADING, lastAction: refreshToken.typePrefix };
        state.errors = null;
        state.isAuth = false;
      })
      .addCase(refreshToken.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: refreshToken.typePrefix };
        state.isAuth = true;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: refreshToken.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(verifyToken.pending, (state) => {
        state.status = { ...LOADING, lastAction: verifyToken.typePrefix };
        state.errors = null;
        state.isAuth = false;
      })
      .addCase(verifyToken.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: verifyToken.typePrefix };
        state.isAuth = true;
      })
      .addCase(verifyToken.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: verifyToken.typePrefix };
        state.errors = payload;
      });
  },
});

export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;
