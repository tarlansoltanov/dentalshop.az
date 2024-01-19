import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import categoryReducer from "./category/slice";
import brandReducer from "./brand/slice";

const rootReducer = combineReducers({
  categories: categoryReducer,
  brands: brandReducer,
});

export default rootReducer;
