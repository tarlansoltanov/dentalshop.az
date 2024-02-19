import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Types
import { CartItem, Order, User } from "@/types";

// Actions
import {
  incrementCart,
  decrementCart,
  getAccount,
  getCart,
  updateAccount,
  removeFromCart,
  checkDiscount,
  getOrders,
} from "./actions";

interface StateProps {
  status: {
    loading: boolean;
    success: boolean;
    failure: boolean;
    lastAction: string | null;
  };
  errors: any;
  user: User | null;
  cartItems: CartItem[] | null;
  discount: number;
  orders: Order[] | null;
}

const initialState: StateProps = {
  status: {
    loading: false,
    success: false,
    failure: false,
    lastAction: null,
  },
  errors: null,
  user: null,
  cartItems: null,
  discount: 0,
  orders: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    resetAccount: (state) => {
      state.status = { ...initialState.status };
      state.errors = initialState.errors;
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccount.pending, (state) => {
        state.status = { ...LOADING, lastAction: getAccount.typePrefix };
        state.errors = null;
        state.user = null;
      })
      .addCase(getAccount.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getAccount.typePrefix };
        state.user = payload;
      })
      .addCase(getAccount.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getAccount.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(updateAccount.pending, (state) => {
        state.status = { ...LOADING, lastAction: updateAccount.typePrefix };
        state.errors = null;
      })
      .addCase(updateAccount.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: updateAccount.typePrefix };
        state.user = payload;
      })
      .addCase(updateAccount.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: updateAccount.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(getCart.pending, (state) => {
        state.status = { ...LOADING, lastAction: getCart.typePrefix };
        state.errors = null;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getCart.typePrefix };
        state.cartItems = payload;
      })
      .addCase(getCart.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getCart.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(decrementCart.pending, (state, payload) => {
        state.status = { ...LOADING, lastAction: decrementCart.typePrefix };
        state.errors = null;
        if (payload.meta.arg.quantity === 1) {
          state.cartItems =
            state.cartItems?.filter((item) => item.slug !== payload.meta.arg.product) || null;
        } else {
          state.cartItems =
            state.cartItems?.map((item) => {
              if (item.slug === payload.meta.arg.product) {
                if (payload.meta.arg.quantity === 1) return null;
                return { ...item, quantity: payload.meta.arg.quantity - 1 };
              }
              return item;
            }) || null;
        }
      })
      .addCase(decrementCart.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: decrementCart.typePrefix };
      })
      .addCase(decrementCart.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: decrementCart.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(incrementCart.pending, (state, payload) => {
        state.status = { ...LOADING, lastAction: incrementCart.typePrefix };
        state.errors = null;
        state.cartItems =
          state.cartItems?.map((item) => {
            if (item.slug === payload.meta.arg.product) {
              return { ...item, quantity: payload.meta.arg.quantity + 1 };
            }
            return item;
          }) || null;
      })
      .addCase(incrementCart.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: incrementCart.typePrefix };
      })
      .addCase(incrementCart.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: incrementCart.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(removeFromCart.pending, (state, payload) => {
        state.status = { ...LOADING, lastAction: removeFromCart.typePrefix };
        state.errors = null;
        state.cartItems = state.cartItems?.filter((item) => item.slug !== payload.meta.arg) || null;
      })
      .addCase(removeFromCart.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: removeFromCart.typePrefix };
      })
      .addCase(removeFromCart.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: removeFromCart.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(checkDiscount.pending, (state) => {
        state.status = { ...LOADING, lastAction: checkDiscount.typePrefix };
        state.errors = null;
      })
      .addCase(checkDiscount.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: checkDiscount.typePrefix };
        state.discount = payload;
      })
      .addCase(checkDiscount.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: checkDiscount.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(getOrders.pending, (state) => {
        state.status = { ...LOADING, lastAction: getOrders.typePrefix };
        state.errors = null;
      })
      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getOrders.typePrefix };
        state.orders = payload;
      })
      .addCase(getOrders.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getOrders.typePrefix };
        state.errors = payload;
      });
  },
});

export const { resetAccount } = accountSlice.actions;

export default accountSlice.reducer;
