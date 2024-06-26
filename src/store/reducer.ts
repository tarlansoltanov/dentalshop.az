import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import authReducer from "./auth/slice";
import brandReducer from "./brand/slice";
import bannerReducer from "./banner/slice";
import accountReducer from "./account/slice";
import productReducer from "./product/slice";
import categoryReducer from "./category/slice";
import freezoneReducer from "./freezone/slice";

const rootReducer = combineReducers({
  auth: authReducer,
  brands: brandReducer,
  banners: bannerReducer,
  account: accountReducer,
  products: productReducer,
  freezone: freezoneReducer,
  categories: categoryReducer,
});

export default rootReducer;
