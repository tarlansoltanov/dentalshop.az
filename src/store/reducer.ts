import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import categoryReducer from "./category/slice";
import brandReducer from "./brand/slice";
import productReducer from "./product/slice";

const rootReducer = combineReducers({
  categories: categoryReducer,
  brands: brandReducer,
  products: productReducer,
});

export default rootReducer;
