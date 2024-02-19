import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import authReducer from "./auth/slice";
import brandReducer from "./brand/slice";
import productReducer from "./product/slice";
import categoryReducer from "./category/slice";

const rootReducer = combineReducers({
  auth: authReducer,
  brands: brandReducer,
  products: productReducer,
  categories: categoryReducer,
});

export default rootReducer;
