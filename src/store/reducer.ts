import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import categoryReducer from "./category/slice";

const rootReducer = combineReducers({
  categories: categoryReducer,
});

export default rootReducer;
