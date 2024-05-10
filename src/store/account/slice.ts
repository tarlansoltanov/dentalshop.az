import { createSlice } from "@reduxjs/toolkit";

// Constants
import { LOADING, SUCCESS, FAILURE } from "@/constants";

// Types
import { CartItem, FreezoneItem, Order, Product, User } from "@/types/models";

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
  checkout,
  getOrder,
  getFavorites,
  getAccountFreezone,
  changePassword,
  addToCart,
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
  cartCount: number;
  discount: number;
  orders: Order[] | null;
  order: Order | null;
  favorites: Product[] | null;
  favoritesCount: number;
  freezoneItems: FreezoneItem[] | null;
  freezoneCount: number;
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
  cartCount: 0,
  discount: 0,
  orders: null,
  order: null,
  favorites: null,
  favoritesCount: 0,
  freezoneItems: null,
  freezoneCount: 0,
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
      .addCase(changePassword.pending, (state) => {
        state.status = { ...LOADING, lastAction: changePassword.typePrefix };
        state.errors = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: changePassword.typePrefix };
      })
      .addCase(changePassword.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: changePassword.typePrefix };
        state.errors = payload;
      });
    /* Cart */
    builder
      .addCase(getCart.pending, (state) => {
        state.status = { ...LOADING, lastAction: getCart.typePrefix };
        state.errors = null;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getCart.typePrefix };
        state.cartItems = payload;
        state.cartCount = payload.length;
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
            state.cartItems?.filter((item) => item.product.slug !== payload.meta.arg.product) ||
            null;
        } else {
          state.cartItems =
            state.cartItems?.map((item) => {
              if (item.product.slug === payload.meta.arg.product) {
                return { ...item, quantity: payload.meta.arg.quantity - 1 };
              }
              return item;
            }) || null;
        }
        state.cartCount = state.cartItems?.length || 0;
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
            if (item.product.slug === payload.meta.arg.product) {
              return { ...item, quantity: payload.meta.arg.quantity + 1 };
            }
            return item;
          }) || null;
        state.cartCount = state.cartItems?.length || 0;
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
        state.cartItems =
          state.cartItems?.filter((item) => item.product.slug !== payload.meta.arg) || null;
        state.cartCount = state.cartItems?.length || 0;
      })
      .addCase(removeFromCart.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: removeFromCart.typePrefix };
      })
      .addCase(removeFromCart.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: removeFromCart.typePrefix };
        state.errors = payload;
      });
    builder
      .addCase(addToCart.pending, (state, payload) => {
        state.status = { ...LOADING, lastAction: addToCart.typePrefix };
        state.errors = null;
        state.cartCount =
          state.cartCount +
          (state.cartItems?.find((item) => item.product.slug === payload.meta.arg.product) ? 0 : 1);
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: addToCart.typePrefix };
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: addToCart.typePrefix };
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
      .addCase(checkout.pending, (state) => {
        state.status = { ...LOADING, lastAction: checkout.typePrefix };
        state.errors = null;
      })
      .addCase(checkout.fulfilled, (state) => {
        state.status = { ...SUCCESS, lastAction: checkout.typePrefix };
        state.cartItems = [];
        state.cartCount = 0;
      })
      .addCase(checkout.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: checkout.typePrefix };
        state.errors = payload;
      });
    /* Orders */
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
    builder
      .addCase(getOrder.pending, (state) => {
        state.status = { ...LOADING, lastAction: getOrder.typePrefix };
        state.errors = null;
      })
      .addCase(getOrder.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getOrder.typePrefix };
        state.order = payload;
      })
      .addCase(getOrder.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getOrder.typePrefix };
        state.errors = payload;
      });

    /* Favorites */
    builder
      .addCase(getFavorites.pending, (state) => {
        state.status = { ...LOADING, lastAction: getFavorites.typePrefix };
        state.errors = null;
      })
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getFavorites.typePrefix };
        state.favorites = payload.data;
        state.favoritesCount = payload.count;
      })
      .addCase(getFavorites.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getFavorites.typePrefix };
        state.errors = payload;
      });

    /* Freezone */
    builder
      .addCase(getAccountFreezone.pending, (state) => {
        state.status = { ...LOADING, lastAction: getAccountFreezone.typePrefix };
        state.errors = null;
      })
      .addCase(getAccountFreezone.fulfilled, (state, { payload }) => {
        state.status = { ...SUCCESS, lastAction: getAccountFreezone.typePrefix };
        state.freezoneItems = payload.data;
        state.freezoneCount = payload.count;
      })
      .addCase(getAccountFreezone.rejected, (state, { payload }) => {
        state.status = { ...FAILURE, lastAction: getAccountFreezone.typePrefix };
        state.errors = payload;
      });
  },
});

export const { resetAccount } = accountSlice.actions;

export default accountSlice.reducer;
