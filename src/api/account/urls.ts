// ACCOUNT
export const ACCOUNT_URL = "/account/";
export const CHANGE_PASSWORD_URL = "/account/change-password/";

// CART
export const CART_LIST_URL = "/account/cart/";

// PROMO
export const PROMO_VALIDATE_URL = "/promos/validate/";

// CHECKOUT
export const CHECKOUT_URL = "/orders/checkout/";

// ORDER
export const ORDER_LIST_URL = "/orders/";
export const ORDER_DETAIL_URL = (id: number) => `/orders/${id}`;
export const ORDER_DETAIL_PAY_URL = (id: number) => `/orders/${id}/pay/`;

// FAVORITE
export const FAVORITE_LIST_URL = "/account/favorites/";
